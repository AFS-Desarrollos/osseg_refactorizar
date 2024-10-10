import { AfiliateFilter } from "../models/AfiliateFilter";
import { QueryParams } from "../models/QueryParams";
import { getAfiliatesByQuery } from "../repositories/afiliateRepository";

export async function getAfiliates(payload: any) {
  try {
    const afiliateFilter = AfiliateFilter.from_json(payload);
    const queryParams = QueryParams.from_json(payload);

    const response = await getAfiliatesByQuery(afiliateFilter, queryParams);

    if (response.status === 200) {
      const afiliates = response.data.value
      const count = response.data["@odata.count"]
      const nextLink = response.data["@odata.count"]
      const data = { count, nextLink, afiliates }

      return { message: "Returning afiliates", status: "success", data: data};
    }
    else {
      throw new Error(`An error ocurred while trying to get the afiliates: ${response.status}`);
    }
  } catch (error: any) {
    return { message: error.message, status: "error" };
  }
}