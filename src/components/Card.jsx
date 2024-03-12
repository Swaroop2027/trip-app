import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
  data,
  id,
  source,
  destination,
  date,
  fare,
  duration,
  time,
  stop,
}) => {
  const navigate = useNavigate();

  const handleClick = (_id) => {
    const list = data.find((ele) => ele.id === _id);
    navigate("/book", { state: list });
  };
  return (
    // <div className="bg-white flex flex-col justify-center p-5 rounded-[5px] mb-5 shadow-lg hover:scale-110 hover:shadow-sm hover:text-black mx-2">
    //   <div className="flex justify-between">
    //     <div>
    //       <h1 className="font-serif text-xl capitalize">
    //         From: <span className="font-semibold">{source}</span>
    //       </h1>
    //       <h1 className="font-serif text-xl capitalize">
    //         To: <span className="font-semibold">{destination}</span>
    //       </h1>
    //     </div>

    //     <div>
    //       <div className="flex justify-end">
    //         <span>
    //           Date: <span className="font-semibold">{date}</span>
    //         </span>
    //       </div>
    //       <div className="flex justify-end">
    //         <span>
    //           Duration: <span className="font-semibold">{duration}</span>
    //         </span>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="bg-slate-700 w-full h-1 rounded-md"></div>
    //   <div className="flex justify-between mt-2">
    //     <p className="font-serif text-xl ">
    //       Fare: <span className="font-semibold">₹{fare}</span>
    //     </p>
    //     <button
    //       className="bg-[linear-gradient(rgba(83,178,254,1),_rgba(6,90,243,1))] text-white rounded-3xl py-3 px-8"
    //       onClick={() => handleClick(id)}
    //     >
    //       Book Now
    //     </button>
    //   </div>
    // </div>

    <div className="bg-white flex flex-col justify-center p-5 rounded-[5px] mb-5 shadow-lg hover:shadow-sm hover:text-black mx-2">
      <div>
        <div className="flex justify-between">
          <div>
            <p className="font-semibold">{time}</p>
            <p className="font-bold">
              {source} - {destination}
            </p>
          </div>

          <div>
            <p className="text-green-500">{stop}</p>
            <p>{duration}</p>
          </div>
        </div>

        <div className="my-2 text-gray-700 font-[500]">
          <p>{date}</p>
          <p>
            Air India,
            <span>
              <select defaultValue="economy">
                <option value="economy">Economy</option>
                <option value="business">Business</option>
              </select>
            </span>
          </p>
        </div>
      </div>

      <div className="bg-slate-700 w-full h-[1px] rounded-md"></div>
      <div className="flex justify-between mt-2">
        <p className="font-serif text-xl ">
          Fare: <span className="font-semibold">₹{fare}</span>
        </p>
        <button
          className="bg-[linear-gradient(rgba(83,178,254,1),_rgba(6,90,243,1))] text-white rounded-3xl py-3 px-8"
          onClick={() => handleClick(id)}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Card;
