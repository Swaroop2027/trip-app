import React from "react";

const TripDetail = ({ list }) => {
  console.log(list);
  return (
    <div className="h-full w-full flex justify-center items-center gap-8 my-4 rounded-md">
      <div className="flex flex-col gap-4 h-[250px] w-[600px]">
        {list.map((ele, ind) => {
          return (
            <div className="bg-gray-300 text-xl flex justify-evenly items-center w-full p-3 rounded border hover:outline-none hover:shadow-outline-red border-red-500 transition duration-150 ease-in-out">
              <p>{ele.source}</p>
              <p>{ele.destination}</p>
              <p>{ele.date}</p>
              <p>₹{ele.fare}</p>
              <button className="bg-blue-400 text-blue-950 rounded-md p-2 border-2 hover:outline-none hover:shadow-outline-blue hover:border-black transition duration-150 ease-in-out">
                Book Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TripDetail;
