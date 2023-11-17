import React from "react";
import View from "../pages/View";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<View />} />
    </Routes>
  );
};

export default Main;
