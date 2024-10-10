import { configureStore } from "@reduxjs/toolkit";
import { afiliatesApi } from "./AfiliatesApi.tsx";

export const store = configureStore({
    reducer: {
      [afiliatesApi.reducerPath]: afiliatesApi.reducer,
    },
    //@ts-ignore
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([
        afiliatesApi.middleware,
      ]),
  });