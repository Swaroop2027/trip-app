import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data, id, source, destination, date, fare, duration }) => {
  const navigate = useNavigate();

  const handleClick = (_id) => {
    const list = data.find((ele) => ele.id === _id);
    navigate("/book", { state: list });
  };
  return (
    <div className="bg-white flex flex-col justify-center p-5 rounded-[5px] mb-5  shadow-lg hover:scale-110 hover:hover:shadow-sm hover:text-black mx-2">
      <div className="flex justify-between">
        <div>
          <h1 className="font-serif text-xl capitalize">
            From: <span className="font-semibold">{source}</span>
          </h1>
          <h1 className="font-serif text-xl capitalize">
            To: <span className="font-semibold">{destination}</span>
          </h1>
        </div>

        <div>
          <div className="flex justify-end">
            <span>
              Date: <span className="font-semibold">{date}</span>
            </span>
          </div>
          <div className="flex justify-end">
            <span>
              Duration: <span className="font-semibold">{duration}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="bg-slate-700 w-full h-1 rounded-md"></div>
      <div className="flex justify-between mt-2">
        <p className="font-serif text-xl ">
          Fare: <span className="font-semibold">₹{fare}</span>
        </p>
        <button
          className="bg-[linear-gradient(rgba(6,20,36,56),_rgba(20,68,122,255))] text-white rounded-3xl py-3 px-8"
          onClick={() => handleClick(id)}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Card;
