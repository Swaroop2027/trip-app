import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Filter from "./pages/Filter";
import Hotels from "./pages/Hotels";
import Homestays from "./pages/Homestays";
import Holidays from "./pages/Holidays";

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
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/homestays" element={<Homestays />} />
          <Route path="/holidays" element={<Holidays />} />
        </Routes>
      </div>
      <Footer />
      {/* <Holidays /> */}
    </div>
  );
};

export default App;

//code channel
