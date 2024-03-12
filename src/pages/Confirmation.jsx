import { useLocation } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();

  const data = location.state;

  return (
    <div className="h-[62vh] w-full flex justify-center items-center">
      <div className="bg-white flex flex-col justify-around p-5 rounded-[5px] shadow-lg w-[35%] h-[50%]">
        <div className="flex justify-between">
          <div>
            <img src={data.url} alt="" className="h-[25px] w-[25px]" />
            <p>{data.airline}</p>
          </div>
          <div>
            <p className="text-green-500">{data.stop}</p>
            <p>9W-818</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-serif text-xl capitalize">
              From: <span className="font-semibold">{data.source}</span>
            </h1>
            <h1 className="font-serif text-xl capitalize">
              To: <span className="font-semibold">{data.destination}</span>
            </h1>
          </div>

          <div>
            <p>
              Departure:{" "}
              <span className="font-semibold">{data.time.substr(0, 5)}</span>
            </p>
            <p>
              Arrival:{" "}
              <span className="font-semibold">{data.time.substr(7)}</span>
            </p>
          </div>

          <div>
            <div className="flex justify-end">
              <span>
                Date: <span className="font-semibold">{data.date}</span>
              </span>
            </div>
            <div className="flex justify-end">
              <span>
                Duration: <span className="font-semibold">{data.duration}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-slate-700 w-full h-[1px] rounded-md"></div>
        <div className="flex justify-between mt-2">
          <p className="font-serif text-xl ">
            Fare: <span className="font-semibold">₹{data.fare}</span>
          </p>
          <button className="bg-green-600 text-white rounded-3xl py-3 px-8">
            Booked Successfully!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
