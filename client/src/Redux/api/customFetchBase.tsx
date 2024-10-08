import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const customFetchBase = fetchBaseQuery({
  baseUrl: `https://app-afiliados.audifarmsalud.com:50000/b1s/v1`,
  credentials: 'include',
  jsonContentType: 'application/json',
  prepareHeaders: (headers) => {
    return headers;
  },
});

export default customFetchBase;
