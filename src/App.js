import React, { Redirect } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import About from "./Page/About/About";
import Home from "./Page/Home/Home";
import Logement from "./Page/Logement/Logement";
import Error from "./Page/Error/Error";
import cardItems from "./assets/logements";

export default function App() {
  let { id } = useParams();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="logement/:id" element={<Logement />} />
        <Route path="about" element={<About />} />
        <Route path="*" exact element={<Error/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
