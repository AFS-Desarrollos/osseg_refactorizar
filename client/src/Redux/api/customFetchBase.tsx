import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const customFetchBase = fetchBaseQuery({
  baseUrl: `http://localhost:3002`,
  credentials: 'include',
  jsonContentType: 'application/json',
  prepareHeaders: (headers) => {
    return headers;
  },
});

export default customFetchBase;
