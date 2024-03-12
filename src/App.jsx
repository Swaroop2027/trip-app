import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Filter from "./pages/Filter";

const App = () => {
  const [list, setList] = useState([]);

  return (
    <div className="overflow-x-hidden h-screen w-full bg-[#f2f2f2]">
      <Navbar />
      <div className="mt-8 pt-[50px]">
        <Routes>
          <Route path="/" element={<Home list={list} setList={setList} />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/confirmed" element={<Confirmation />} />
          <Route path="/filter" element={<Filter list={list} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;

//code channel
