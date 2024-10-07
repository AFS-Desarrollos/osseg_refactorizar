








{/* <table class="table table-bordered table-striped">
<thead>
    <tr>
        <th>Fecha de Remito</th>
        <th>N° Afiliado</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Farmacia</th>
        <th>N° Rto</th>
        <th>Estado</th>
        <th>Descripción</th>
    </tr>
</thead>
<tbody>
    <% data.slice(i * 20, (i + 1) * 20).forEach(pedido => { %>
    <tr>
        <td>
            <% if (pedido.DOCDATE_REM) { %>
                <% 
                    let dateParts = pedido.DOCDATE_REM.split(' ')[0].split('-'); 
                    let formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
                %>
                <%= formattedDate %>
            <% } else { %>
                No remitido
            <% } %>
        </td>
        <td><%= pedido.U_NroAfiliado ? pedido.U_NroAfiliado.split('%')[1] : 'No disponible' %></td>
        <td><%= pedido.U_NombrePaciente %></td>
        <td><%= pedido.U_ApellidoPaciente %></td>
        <td><%= pedido.U_NOMBRE_FD %></td>
        <td><%= pedido.U_REMITO %></td>
        <td><%= pedido.ESTADO %></td>
        <td><%= pedido.Dscription %></td>
    </tr>
    <% }); %>
</tbody>
</table>



<TablePagination
  component="div"
  count={100}
  page={page}
  onPageChange={handleChangePage}
  rowsPerPage={rowsPerPage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/>

 */}

 
