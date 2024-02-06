import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import FetchApi from "./components/fetch-data-from-user-api/FetchApi";
import StopWatch from "./components/stopwatch/StopWatch";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/fetch-api" element={<FetchApi />} />
        <Route path="/stopwatch" element={<StopWatch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
