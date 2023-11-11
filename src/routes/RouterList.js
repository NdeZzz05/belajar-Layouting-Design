import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Apk } from "../Apk";
import { Coba } from "../Coba";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Apk />}></Route>
        <Route path="/grid" element={<Coba />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
