import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../Pages/MainPage.tsx";
import AfiliatePage from "../Pages/AfiliadosPage.tsx";

const SiteRoutes = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="*" element={<MainPage />} />
      <Route path="/afiliates" element={<AfiliatePage />} />
      <Route />
    </Routes>
  );
};

export default SiteRoutes;
