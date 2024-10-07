import ReactDOM from "react-dom/client";
import SiteRouter from "./Routes/SiteRouter.tsx";
import React from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<SiteRouter />);
