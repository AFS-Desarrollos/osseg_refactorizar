import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../Pages/MainPage.tsx";
import TestNewPage from "../Pages/TestNewPage.tsx";

const SiteRoutes = () => {
  console.log("site routes")
  return (
    <Routes>
        <Route index element={<MainPage />} />
        <Route path="*" element={<MainPage />} />
        <Route path="test" element={<TestNewPage/>} />
    </Routes>
  );
};

export default SiteRoutes;
