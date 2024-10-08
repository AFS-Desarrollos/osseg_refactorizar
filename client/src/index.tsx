import ReactDOM from "react-dom/client";
import SiteRouter from "./Routes/SiteRouter.tsx";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/api/store.ts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
<Provider store={store}>
  <SiteRouter />
</Provider>
);
