import { useNavigate } from "react-router-dom";

const TripDetail = ({ list }) => {
  const navigate = useNavigate();
  // console.log(list);

  const handleClick = (_id) => {
    const data = list.find((ele) => ele.id === _id);
    navigate("/book", { state: data });
  };
  return (
    <div className="flex justify-center items-center rounded-md">
      <div className="flex flex-col gap-4 h-[250px] w-[90%]">
        {list.map((ele, ind) => {
          return (
            <div
              className="bg-white text-xl flex justify-evenly items-center w-full p-3 rounded border hover:outline-none hover:shadow-outline-red border-red-500 transition duration-150 ease-in-out"
              key={ind}
            >
              <div className="flex flex-col items-center">
                <img src={ele.url} alt="" className="h-[25px] w-[25px]" />
                <p className="font-semibold"> {ele.airline}</p>
              </div>
              <div>
                <p>From:</p>
                <p className="font-bold"> {ele.source}</p>
              </div>
              <div>
                <p>To:</p>
                <p className="font-bold">{ele.destination}</p>
              </div>
              <div>
                <p>Date:</p>
                <p className="font-bold">{ele.date}</p>
              </div>
              <div>
                <p>Duration:</p>
                <p className="font-bold">{ele.duration}</p>
              </div>
              <div>
                <p>Fare:</p>
                <p className="font-bold">₹{ele.fare}</p>
              </div>

              <button
                className="border-[1px] border-solid border-[#008cff] rounded-[96px] text-[#008cff] bg-[#daebff] p-2"
                onClick={() => handleClick(ele.id)}
              >
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
