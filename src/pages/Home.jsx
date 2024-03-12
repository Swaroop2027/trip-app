import { useState, useEffect } from "react";
import trip from "../dummytrip.json";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Offer from "../components/Offer";
import SlideCard from "../components/SlideCard";
import ImageSlider from "../components/ImageSlider";

const Home = ({ list, setList }) => {
  const data = trip.data;
  // console.log(data);
  const [src, setSrc] = useState();
  const [dst, setDst] = useState();
  const [date, setDate] = useState();
  const [price, setPrice] = useState(0);
  const [filterFlight, setfilterFlight] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const navigate = useNavigate();

  const handleSrcChange = (e) => {
    setSrc(e.target.value);
  };
  const handleDstChange = (e) => {
    setDst(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleClick = () => {
    console.log(date);
    let data1 = data.filter(
      (ele) => ele.source === src && ele.destination === dst
    );

    setList([...list, ...data1]);
    navigate("/trip-detail");
  };

  const handleSwap = () => {
    setSrc(dst);
    setDst(src);
  };

  const filterPrice = (e) => {
    setIsFilter(true);
    setPrice(e.target.value);
    let data2 = data.filter((ele) => ele.fare <= price);
    setfilterFlight([...data2]);
  };

  // console.log(price);
  // console.log(filterFlight);

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

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div className="min-h-[70vh]">
      <div className="relative">
        <Carousel />
        <div className="bg-white h-[200px] w-[800px] flex justify-evenly items-center rounded-md absolute top-24 left-[25%]">
          <div className="flex flex-col justify-center">
            <div>
              <input
                type="radio"
                id="one-way"
                name="mode"
                defaultChecked
                className="text-2xl mx-2"
              />
              <label htmlFor="one-way">One Way</label>
            </div>
            <div>
              <input
                type="radio"
                id="round-trip"
                name="mode"
                className="text-2xl mx-2"
              />
              <label htmlFor="round-trip">Round Trip</label>
            </div>
            <div>
              <input
                type="radio"
                id="multi-city"
                name="mode"
                className="text-2xl mx-2"
              />
              <label htmlFor="multi-city">Multi City</label>
            </div>
          </div>

          <div>
            <span className="text-blue-950 font-semibold mx-2 font-mono text-xl">
              Source:
            </span>
            <select
              name="source"
              id="source"
              value={src}
              onChange={(e) => handleSrcChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="select_city">Select City</option>
              {data.map((detail, index) => {
                return (
                  <option value={detail.source} key={index}>
                    {detail.source}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mt-6">
            <span onClick={handleSwap} className="cursor-pointer text-2xl">
              &hArr;
            </span>
          </div>

          <div>
            <span className="text-blue-950 font-semibold mx-2 font-mono text-xl">
              Destination:
            </span>
            <select
              name="destination"
              id="destination"
              value={dst}
              onChange={(e) => handleDstChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            <span className="text-blue-950 font-semibold font-mono text-xl block mb-2">
              Departure Date
            </span>
            <input
              type="date"
              className="border-2 border-black"
              onChange={(e) => handleDateChange(e)}
            />
          </div>

          <div>
            <button
              className="bg-[linear-gradient(rgba(83,178,254,1),_rgba(6,90,243,1))] rounded-3xl py-3 px-8 text-white mt-6"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
        </div>
        <div className="bg-white mx-[15%] rounded-[30px] mb-5 shadow-lg">
          <ul className="flex justify-around items-center my-2 py-3">
            <li className="flex items-center gap-2">
              <span>
                <img
                  src="https://promos.makemytrip.com/appfest/2x/icon-wheretogo-23062022.png"
                  alt=""
                  className="h-[28px] w-[28px]"
                />
              </span>

              <span>Where2Go</span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <img
                  src="https://promos.makemytrip.com/appfest/2x/trip-money-1.png"
                  alt=""
                  className="h-[28px] w-[28px]"
                />
              </span>

              <span>Insurance</span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <img
                  src="https://promos.makemytrip.com/images/myBiz/MICE/mice%20icon%20-%20square.png"
                  alt=""
                  className="h-[28px] w-[28px]"
                />
              </span>

              <span>MICE</span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <img
                  src="https://promos.makemytrip.com/appfest/2x/gift%20card%201.png"
                  alt=""
                  className="h-[28px] w-[28px]"
                />
              </span>

              <span>Gift Cards</span>
            </li>
          </ul>
        </div>

        <div>
          <Offer />
        </div>

        <div className="px-8 my-4">
          <SlideCard />
        </div>

        <div>
          <ImageSlider />
        </div>

        <div className="mx-3 my-4 p-4">
          <h1 className="text-3xl font-semibold">All Flights</h1>
        </div>

        {/* Card task */}
        <div className="bg-white shadow-lg mb-5 mx-6 rounded-md px-[70px] flex justify-between items-center gap-8">
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
      </div>

      <div className="grid grid-cols-3 mx-4">
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

export default Home;
