import { BrowserRouter } from "react-router-dom";
import React from "react";
import SitesRoutes from "./SitesRoutes.tsx";
const SiteRouter = () => {
  return (
    <BrowserRouter>
      <SitesRoutes />
    </BrowserRouter>
  );
};

export default SiteRouter;
