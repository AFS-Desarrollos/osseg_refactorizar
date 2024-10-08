import { configureStore } from "@reduxjs/toolkit";
import { afiliadosApi } from "./AfiliadosApi.tsx";

export const store = configureStore({
    reducer: {
      [afiliadosApi.reducerPath]: afiliadosApi.reducer,
    },
    //@ts-ignore
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([
        afiliadosApi.middleware,
      ]),
  });