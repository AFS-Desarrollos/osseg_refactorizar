import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useGetAfiliadosQueryMutation } from "../Redux/api/AfiliatesApi.tsx";
import { useContext, useEffect, useState } from "react";
import { StateAutocomplete } from "../componentes/StateAutocomplete.tsx";
import { TextInput } from "../componentes/TextInput.tsx";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { AuthContext } from "../auth.js";
import { useCookies } from "react-cookie";
import { Navigate, useNavigate } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "id__", headerName: "ID", width: 70 },
  {
    field: "DOCDATE_REM",
    headerName: "Fecha doc",
    width: 150,
    valueFormatter: (value: string) =>
      value !== null ? value.split(" ")[0] : "",
  },
  {
    field: "U_NroAfiliado",
    headerName: "Nro Afiliado",
    width: 150,
    valueFormatter: (value: string) => value.split("%")[1],
  },
  { field: "U_NombrePaciente", headerName: "Nombre", width: 260 },
  { field: "U_ApellidoPaciente", headerName: "Apellido", width: 220 },
  { field: "U_NOMBRE_FD", headerName: "Nombre FD", width: 350 },
  { field: "U_REMITO", headerName: "Remito", width: 260 },
  { field: "ESTADO", headerName: "Estado", width: 200 },
  { field: "Dscription ", headerName: "Desc", width: 260 },
];

export default function DataTable() {
  const [getAfiliates] = useGetAfiliadosQueryMutation();
  const [afiliates, setAfiliates] = useState([]);
  const [cachedData, setCachedData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 20,
  });
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [afiliateNumber, setAfiliateNumber] = useState("");
  const [state, setState] = useState("");
  const [cookies, setCookies] = useCookies(["user"]);
  const navigate = useNavigate();

  const jwt = cookies.user || "not_sent";

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };
  const handleLastnameChange = (event: any) => {
    setLastname(event.target.value);
  };
  const handleAfiliateNumberChange = (event: any) => {
    setAfiliateNumber(event.target.value);
  };
  const handleStateChange = (_, value: string) => {
    setState(value);
  };

  const fetchAfiliates = async (page) => {
    setIsLoading(true);

    const filters = {
      name: name,
      lastname: lastname,
      afiliateNumber: afiliateNumber,
      state: state,
      skip: page * paginationModel.pageSize,
      limit: paginationModel.pageSize,
    };

    try {
      const response = await getAfiliates({ filters, jwt }).unwrap();
      setCachedData((prev) => ({
        ...prev,
        [page]: response.data.afiliates,
      }));
      setAfiliates(response.data.afiliates);
      setTotalRows(response.data.count);
    } catch (error) {
      if (error.status === 400 || error.status === 500) {
        navigate("/");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const { page } = paginationModel;

    setAfiliates([]);

    fetchAfiliates(page);
  }, [paginationModel]);

  const handlePageChange = (newPaginationModel) => {
    setPaginationModel(newPaginationModel);
  };

  return (
    <>
      <Paper sx={{ height: "auto", width: "100%" }}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          <TextInput
            label="Nombre"
            handleInputChange={handleNameChange}
            disabled={!!afiliateNumber}
          />
          <TextInput
            label="Apellido"
            handleInputChange={handleLastnameChange}
            disabled={!!afiliateNumber}
          />
          <TextInput
            label="Nro Afiliado"
            handleInputChange={handleAfiliateNumberChange}
          />
          <StateAutocomplete handleSelectionChange={handleStateChange} />
          <Button variant="outlined" onClick={fetchAfiliates}>
            Buscar
          </Button>
        </Box>
      </Paper>

      <Paper sx={{ height: 750, width: "100%" }}>
        <DataGrid
          getRowId={(row) => row.id__}
          rows={afiliates}
          loading={isLoading}
          rowCount={totalRows}
          columns={columns}
          disableColumnMenu
          disableColumnSorting
          pagination
          paginationMode="server"
          paginationModel={paginationModel}
          onPaginationModelChange={handlePageChange}
          checkboxSelection={false}
          rowSelection={false}
          pageSizeOptions={[20, 50, 100]}
        />
      </Paper>
    </>
  );
}
