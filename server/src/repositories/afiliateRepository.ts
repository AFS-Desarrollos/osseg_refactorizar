import { loginToAPI, apiClient } from "../config/apiConfig";
import { AfiliateFilter } from "../models/AfiliateFilter";
import { QueryParams } from "../models/QueryParams";

function transformText(text: string) {
  return text.toUpperCase().replace(/Ñ/g, "N").trim();
}
export async function getAfiliatesByQuery(afiliateFilter: AfiliateFilter, queryParams: QueryParams) {
    const sessionId = await loginToAPI();

    let filters = [`CardCode eq 'C0987'`];

    if (afiliateFilter.name != null)
      filters.push(`startswith(U_NombrePaciente,'${transformText(afiliateFilter.name)}')`);
    if (afiliateFilter.lastname != null)
      filters.push(`contains(U_ApellidoPaciente,'${transformText(afiliateFilter.lastname)}')`);
    if (afiliateFilter.state != null)
      filters.push(`contains(ESTADO,'${transformText(afiliateFilter.state)}')`);
    if (afiliateFilter.afiliateNumber != null)
      filters = [`U_NroAfiliado eq '${transformText(afiliateFilter.afiliateNumber)}'`];

    const filterQuery = filters.join(" and ");
    const url = `/sml.svc/VFCV_AUDI_PEDIDOSPRD?$filter=${filterQuery}&$top=${queryParams.limit}&$skip=${queryParams.skip}`;

    const headers = {
      Cookie: `B1SESSION=${sessionId}; CompanyDB=SBOAUDIFRPRDAR; ROUTEID=.node0`,
    };

    return await apiClient.get(url, { headers });
  }

  