import React from "react";

const Card = ({ source, destination, date, fare }) => {
  return (
    <div className="bg-gray-200 flex flex-col justify-evenly p-5 rounded-[5px] mb-5 w-[20%] h-[20%] shadow-lg hover:scale-110 hover:hover:shadow-sm hover:text-black mx-auto">
      <div className="flex justify-between">
        <h1 className="font-serif text-xl font-semibold capitalize">
          From: {source}
        </h1>
        <span>{date}</span>
      </div>

      <h1 className="font-serif text-xl font-semibold capitalize">
        To: {destination}
      </h1>
      <div className="bg-slate-700 w-full h-1 rounded-md"></div>
      <p className="font-serif mt-2">Fare: {fare}</p>
    </div>
  );
};

export default Card;
