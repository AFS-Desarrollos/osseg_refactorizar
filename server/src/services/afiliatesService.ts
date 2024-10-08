import { loginToAPI, apiClient } from "../config/apiConfig";
import { AfiliateFilter } from "../models/AfiliateFilter";
import { getAfiliatesByQuery } from "../repositories/afiliateRepository";

const sessionId = await loginToAPI();

export async function getAfiliates(filters: {}) {
  try {
    const afiliateFilter = AfiliateFilter.from_json(filters);

    const response = await getAfiliatesByQuery(afiliateFilter);

    if (response.status === 200) {
      return { message: "Returning afiliates", data: response.data.value };
    } 
    else {
      throw new Error(`An error ocurred while trying to get the afiliates: ${response.status}`);
    }
  } catch (error: any) {
    return { message: error.message };
  }
}

// async function fetchAllPatientData(nombre, apellido, estado, nroAfiliado, sessionId) {
//     const limit = 20;
//     let skip = 0;
//     let allData = [];
//     let totalResults;

//     //do {
//         const data = await fetchPatientData(nombre, apellido, estado, nroAfiliado, sessionId, limit, skip);
//         allData = allData.concat(data.value);
//         totalResults = data['@odata.count'];
//         skip += limit;
//    // } while (skip < totalResults);

//     return allData;
// }
