import React, { useState, useEffect } from "react";
import trip from "../dummytrip.json";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import Card from "./Card";

const Hero = ({ list, setList }) => {
  //   console.log(trip.data, "data");
  const data = trip.data;
  const navigate = useNavigate();
  const [src, setSrc] = useState();
  const [dst, setDst] = useState();

  const handleSrcChange = (e) => {
    setSrc(e.target.value);
  };
  const handleDstChange = (e) => {
    setDst(e.target.value);
  };
  const handleClick = () => {
    let data1 = data.filter(
      (ele) => ele.source === src && ele.destination === dst
    );
    // console.log(data1, "func data");
    // console.log(list, "func");
    setList([...list, ...data1]);
    navigate("/trip-list");
  };
  //   console.log("SRC", src);
  //   console.log("DST", dst);

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div className="h-screen">
      <Carousel />
      <div className="bg-gray-300 h-[150px] w-[600px] flex justify-center items-center gap-8 my-7 rounded-md absolute top-24 left-[30%]">
        <div>
          <span className="text-blue-950 font-semibold mx-2 font-mono text-xl">
            Source:
          </span>
          <select
            name="source"
            id="source"
            onChange={(e) => handleSrcChange(e)}
          >
            <option value="select-city">Select City</option>
            {data.map((detail, index) => {
              return (
                <option value={detail.source} key={index}>
                  {detail.source}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <span className="text-blue-950 font-semibold mx-2 font-mono text-xl">
            Destination:
          </span>
          <select
            name="destination"
            id="destination"
            onChange={(e) => handleDstChange(e)}
          >
            <option value="select-city">Select City</option>
            {data.map((detail, index) => {
              return (
                <option value={detail.destination} key={index}>
                  {detail.destination}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <button
            className="bg-green-600 rounded-sm p-2 text-white"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap px-3">
        <Card
          source="Delhi"
          destination="Mumbai"
          date="21/04/2024"
          fare="2000"
        />

        <Card
          source="Delhi"
          destination="Mumbai"
          date="21/04/2024"
          fare="2000"
        />
        <Card
          source="Delhi"
          destination="Mumbai"
          date="21/04/2024"
          fare="2000"
        />
        <Card
          source="Delhi"
          destination="Mumbai"
          date="21/04/2024"
          fare="2000"
        />
        <Card
          source="Delhi"
          destination="Mumbai"
          date="21/04/2024"
          fare="2000"
        />
        <Card
          source="Delhi"
          destination="Mumbai"
          date="21/04/2024"
          fare="2000"
        />
        <Card
          source="Delhi"
          destination="Mumbai"
          date="21/04/2024"
          fare="2000"
        />
        <Card
          source="Delhi"
          destination="Mumbai"
          date="21/04/2024"
          fare="2000"
        />
        <Card
          source="Delhi"
          destination="Mumbai"
          date="21/04/2024"
          fare="2000"
        />
        <Card
          source="Delhi"
          destination="Mumbai"
          date="21/04/2024"
          fare="2000"
        />
      </div>
    </div>
  );
};

export default Hero;
