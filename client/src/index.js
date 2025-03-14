import "nes.css/css/nes.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detail } from "./Detail";
import { Search } from "./Search";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="nes-container">
        <Routes>
          <Route path="/pokemon/:name" element={<Detail />} />
          <Route path="/" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
