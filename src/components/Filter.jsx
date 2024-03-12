import { useState } from "react";
import Card from "../components/Card";
import trip from "../dummytrip.json";

const Filter = () => {
  const data = trip.data;

  const [price, setPrice] = useState(0);
  const [filterFlight, setfilterFlight] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  const filterPrice = (e) => {
    setIsFilter(true);
    setPrice(e.target.value);
    let data2 = data.filter((ele) => ele.fare <= price);
    setfilterFlight([...data2]);
  };

  const handlePeriodChange = (e) => {
    // console.log(e.target.value);
    setIsFilter(true);
    if (e.target.value === "Morning") {
      let data3 = data.filter((ele) => ele.time_period === "Morning");
      setfilterFlight([...data3]);
    } else if (e.target.value === "Afternoon") {
      let data3 = data.filter((ele) => ele.time_period === "Afternoon");
      setfilterFlight([...data3]);
    } else if (e.target.value === "Evening") {
      let data3 = data.filter((ele) => ele.time_period === "Evening");
      setfilterFlight([...data3]);
    } else {
      setIsFilter((prev) => !prev);
    }
  };

  const handleStopChange = (e) => {
    console.log(e.target.value);
    setIsFilter(true);
    if (e.target.value === "Nonstop") {
      let data4 = data.filter((ele) => ele.stop === "Nonstop");
      setfilterFlight([...data4]);
    } else if (e.target.value === "Connecting") {
      let data4 = data.filter((ele) => ele.stop === "Connecting");
      setfilterFlight([...data4]);
    } else {
      setIsFilter((prev) => !prev);
    }
  };

  const handleResetClick = () => {
    setIsFilter((prev) => !prev);
    setPrice(0);
  };
  return (
    <div>
      <div className="bg-white shadow-lg mb-5 mx-2 rounded-md px-[70px] flex justify-between items-center gap-8">
        <div className="text-[#4a4a4a] flex flex-col justify-center items-start">
          <label htmlFor="filter-price">Filter by Price</label>
          <p>{price}</p>
          <input
            type="range"
            name="filter-price"
            id="filter-price"
            min="1500"
            max="5500"
            value={price}
            step="100"
            onChange={(e) => filterPrice(e)}
            className="cursor-pointer"
          />
        </div>

        <div className="text-[#4a4a4a] flex flex-col justify-center items-start">
          <label htmlFor="period">Time Period:</label>

          <select
            name="period"
            id="period"
            defaultValue="select"
            onChange={(e) => handlePeriodChange(e)}
          >
            <option value="select">Select</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
        </div>

        <div className="text-[#4a4a4a] flex flex-col items-start">
          <label htmlFor="stop">Stop:</label>

          <select
            name="stop"
            id="stop"
            defaultValue="select"
            onChange={(e) => handleStopChange(e)}
          >
            <option value="select">Select</option>
            <option value="Nonstop">Nonstop</option>
            <option value="Connecting">Connecting</option>
          </select>
        </div>
        <div>
          <button
            className="bg-red-600 rounded-3xl text-white p-2 my-3"
            onClick={handleResetClick}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3">
        {isFilter
          ? filterFlight &&
            filterFlight.map((ele, ind) => (
              <Card
                data={filterFlight}
                id={ele.id}
                source={ele.source}
                destination={ele.destination}
                date={ele.date}
                fare={ele.fare}
                duration={ele.duration}
                time={ele.time}
                stop={ele.stop}
                key={ind}
              />
            ))
          : data &&
            data.map((ele, ind) => (
              <Card
                data={data}
                id={ele.id}
                source={ele.source}
                destination={ele.destination}
                date={ele.date}
                fare={ele.fare}
                duration={ele.duration}
                time={ele.time}
                stop={ele.stop}
                key={ind}
              />
            ))}
      </div>
    </div>
  );
};

export default Filter;
