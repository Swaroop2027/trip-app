import { useState } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import TripDetail from "./components/TripDetail";
import Booking from "./components/Booking";
import Confirmation from "./components/Confirmation";

const App = () => {
  const [list, setList] = useState([]);

  return (
    <div className="overflow-x-hidden h-screen w-full bg-[linear-gradient(rgba(6,20,36,255),_rgba(20,68,122,255))]">
      <Routes>
        <Route path="/" element={<Home list={list} setList={setList} />} />
        <Route path="/trip-detail" element={<TripDetail list={list} />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/confirmed" element={<Confirmation />} />
      </Routes>
    </div>
  );
};

export default App;

//code channel
