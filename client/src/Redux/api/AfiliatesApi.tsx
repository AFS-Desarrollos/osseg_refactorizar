import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase.tsx";
import { GenericResponse } from "../../models/responses.tsx";

export const afiliatesApi = createApi({
  reducerPath: "afiliadosApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getAfiliadosQuery: builder.mutation<GenericResponse, { filters: {}, jwt: any }>({
      query: ({ filters, jwt}) => ({
        url: `/afiliates`,
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json", "Authorization": jwt },
        body: { ...filters, cardCode: "C0987" },
      }),
    }),
  }),
});

export const { useGetAfiliadosQueryMutation } = afiliatesApi;
