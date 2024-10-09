import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase.tsx";
import { GenericResponse } from "../../models/responses.tsx";

export const afiliadosApi = createApi({
  reducerPath: "afiliadosApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getAfiliadosQuery: builder.mutation<GenericResponse, { filters: {} }>({
      query: ({ filters }) => ({
        url: `/afiliates`,
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: { ...filters, cardCode: "C0987" },
      }),
    }),
  }),
});

export const { useGetAfiliadosQueryMutation } = afiliadosApi;
