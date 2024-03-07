import React, { useState } from "react";
import Hero from "./components/Hero";
import { Route, Routes } from "react-router-dom";
import TripDetail from "./components/TripDetail";

const App = () => {
  const [list, setList] = useState([]);
  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Hero list={list} setList={setList} />} />
        <Route
          path="/trip-list"
          element={<TripDetail list={list} setList={setList} />}
        />
      </Routes>
    </div>
  );
};

export default App;
