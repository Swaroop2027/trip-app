import { useReducer, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Booking = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const initialVal = {
    cardnumber: "",
    expirydate: "",
    cvv: "",
    cardholder: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "Input Text":
        return {
          ...state,
          [action.field]: action.payload,
        };

      case "Reset Text":
        return initialVal;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialVal);

  const handleTextChange = (e) => {
    dispatch({
      type: "Input Text",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const resetState = () => {
    dispatch({
      type: "Reset Text",
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setUsers([...users, state]);
    resetState();
    navigate("/confirmed", { state: location.state });
  };

  useEffect(() => {
    // console.log(users);
    localStorage.setItem("StateData", JSON.stringify(users));
  }, [users]);

  return (
    <div className="h-[62vh] w-full max-w-lg mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-medium mb-6">Payment Information</h2>
        <form>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="cardnumber"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Card Number
              </label>
              <input
                type="text"
                name="cardnumber"
                id="cardnumber"
                placeholder="0000 0000 0000 0000"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                value={state.cardnumber}
                onChange={(e) => handleTextChange(e)}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="expirydate"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Expiration Date
              </label>
              <input
                type="text"
                name="expirydate"
                id="expirydate"
                placeholder="MM / YY"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                value={state.expirydate}
                onChange={(e) => handleTextChange(e)}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                size={3}
                maxLength={3}
                placeholder="000"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                value={state.cvv}
                onChange={(e) => handleTextChange(e)}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="cardholder"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Card Holder
              </label>
              <input
                type="text"
                name="cardholder"
                id="cardholder"
                placeholder="Full Name"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                value={state.cardholder}
                onChange={(e) => handleTextChange(e)}
              />
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-[linear-gradient(rgba(83,178,254,1),_rgba(6,90,243,1))] text-white font-medium py-3 rounded-lg focus:outline-none"
              onClick={(e) => handleClick(e)}
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
