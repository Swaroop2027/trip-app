import { useState, useEffect } from "react";
import trip from "../dummytrip.json";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import Offer from "../components/Offer";
import SlideCard from "../components/SlideCard";
import ImageSlider from "../components/ImageSlider";

const Home = ({ list, setList }) => {
  const data = trip.data;
  // console.log(data);
  const [src, setSrc] = useState();
  const [dst, setDst] = useState();
  const [date, setDate] = useState();

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

    setList([...data1]);
    // setList([...list, ...data1]);
    // navigate("/trip-detail");
    navigate("/filter");
  };

  const handleSwap = () => {
    setSrc(dst);
    setDst(src);
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

        <div className="my-8">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};

export default Home;
