import { useState } from "react";

const Offer = () => {
  const [toggle, setToggle] = useState(1);
  const [allOffer, setAllOffer] = useState("blue");
  const [bankOffer, setBankOffer] = useState("black");
  const [flights, setFlights] = useState("black");
  const [hotels, setHotels] = useState("black");
  const [holidays, setHolidays] = useState("black");

  console.log(toggle);

  return (
    <div className="bg-white shadow-lg mx-8 flex flex-col items-center justify-center">
      <div className="flex my-[20px] gap-8">
        <h2 className="text-3xl text-[#393939] font-bold">Offers</h2>
        <div className="flex items-center">
          <ul className="flex gap-3 border-b-[1px] border-[#c6c6c6] border-solid">
            <li
              onClick={() => {
                setToggle(1);
                setAllOffer("blue");
                setBankOffer("black");
                setFlights("black");
                setHotels("black");
                setHolidays("black");
              }}
              className={
                allOffer === "blue"
                  ? "text-[#008cff] font-semibold cursor-pointer text-xl"
                  : "cursor-pointer"
              }
            >
              All Offers
            </li>

            <li
              onClick={() => {
                setToggle(2);
                setBankOffer("blue");
                setAllOffer("black");
                setFlights("black");
                setHotels("black");
                setHolidays("black");
              }}
              className={
                bankOffer === "blue"
                  ? "text-[#008cff] font-semibold cursor-pointer text-xl"
                  : "cursor-pointer"
              }
            >
              Bank Offers
            </li>
            <li
              onClick={() => {
                setToggle(3);
                setFlights("blue");
                setBankOffer("black");
                setAllOffer("black");
                setHotels("black");
                setHolidays("black");
              }}
              className={
                flights === "blue"
                  ? "text-[#008cff] font-semibold cursor-pointer text-xl"
                  : "cursor-pointer"
              }
            >
              Flights
            </li>
            <li
              onClick={() => {
                setToggle(4);
                setHotels("blue");
                setFlights("black");
                setBankOffer("black");
                setAllOffer("black");
                setHolidays("black");
              }}
              className={
                hotels === "blue"
                  ? "text-[#008cff] font-semibold cursor-pointer text-xl"
                  : "cursor-pointer"
              }
            >
              Hotels
            </li>
            <li
              onClick={() => {
                setToggle(5);
                setHolidays("blue");
                setHotels("black");
                setFlights("black");
                setBankOffer("black");
                setAllOffer("black");
              }}
              className={
                holidays === "blue"
                  ? "text-[#008cff] font-semibold cursor-pointer text-xl"
                  : "cursor-pointer"
              }
            >
              Holidays
            </li>
          </ul>
        </div>
      </div>

      <div
        className={
          toggle === 1
            ? "flex flex-wrap justify-center items-center my-4"
            : "hidden"
        }
      >
        <div className="bg-white shadow-2xl w-[30%] m-3 rounded-md">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//DT-Pricedrop-pre-buzz-6Mar.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                LIVE NOW: FLAT 45% OFF* on Holiday Packages
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>
                with Package Price Drop Days for BIG Savings on Summer Trips
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-[30%] m-3 rounded-md">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//airasia-116x116-05022024.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">LIVE NOW: Sale by AirAsia</p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>
                with one-way fares from Bhubaneswar to Kuala Lumpur starting @
                ₹4,999*.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-[30%] m-3 rounded-md">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//offer-11032024.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                Grab Up to 35% OFF* + Additional Savings on EMI{" "}
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>
                on flights, hotels and holiday packages for pocket-friendly
                travel bookings.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-[30%] m-3 rounded-md">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//116X116-intellistay-04032024.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                REMARKABLE STAYS @ POCKET-FRIENDLY RATES:
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>Book intelliStay Hotels @ Up to 35% OFF*</p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-[30%] m-3 rounded-md">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//116X116-axis-29022024.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                FOR HASSLE-FREE TRIPS WITH MAX SAVINGS:
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>
                Grab Up to 15% OFF* + Additional Savings on EMI for flights and
                hotels.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
      </div>

      <div
        className={
          toggle === 2
            ? "flex flex-wrap justify-center items-center my-4"
            : "hidden"
        }
      >
        <div className="bg-white shadow-2xl w-[30%] m-3 rounded-md">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//116X116-icici-df-13102023.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                Grab NOW: FLAT 12% OFF* on Domestic Flights!
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>
                wValid on ICICI Bank Credit Cards, Credit Cards EMI and Debit
                Cards
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-[30%] m-3 rounded-md">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//116X116-icici-dh-28062023.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                Grab FLAT 15% OFF* on 3, 4 & 5-Star Stays in India
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>& treat yourself to a refreshing, luxurious break.</p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-[30%] m-3 rounded-md">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//116X116-icici-ih-13102023.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                Grab FLAT 15% OFF* on 3, 4 & 5-Star Stays
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>for your next international trip.</p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-[30%] m-3 rounded-md">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//116X116-icici-homestray-13102023.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                Grab Flat 15% OFF* on Homestays in India
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>& enjoy 100% privacy and freedom on your next trip.</p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-[30%] m-3 rounded-md">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//116X116-icici-mmt-df-13102023.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                Grab NOW: FLAT 15% OFF* on Domestic Flights!
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>Valid on MakeMyTrip ICICI Bank Credit Cards.</p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
      </div>

      <div
        className={
          toggle === 3
            ? "flex flex-wrap justify-center items-center my-4"
            : "hidden"
        }
      >
        <div className="bg-white shadow-2xl w-[30%] m-3">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//airasia-116x116-05022024.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">LIVE NOW: Sale by AirAsia</p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>
                with one-way fares from Bhubaneswar to Kuala Lumpur starting @
                ₹4,999*.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-[30%] m-3">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//DT-Med-Refund.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">Get a full refund</p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>
                with MyMedRefund on your flight bookings, in case of medical
                emergencies.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-[30%] m-3">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//flight123456.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                Special Benefit for Defence Personnel:
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>
                FREE Date Change on Domestic Flights @ NO EXTRA COST. Code:
                MMTFDC.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-[30%] m-3">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//116X116-avaan-19102023.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                NOW AVAIL: Door-to-Door Baggage Delivery with Us!
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>
                Travel light & transfer your luggage @ less than Rs. 100/kg
                within India!
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-[30%] m-3">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//calccentre-116x116-13012024.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                Get Live Assistance from Travel Experts
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>for international flight bookings. Call us @ 0124 4781869.</p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
      </div>

      <div
        className={
          toggle === 4
            ? "flex flex-wrap justify-center items-center my-4"
            : "hidden"
        }
      >
        <div className="bg-white shadow-2xl w-[30%] m-3">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//116X116-mastiff-25102023.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                Enjoy a Memorable Stay at Mastiff Hotels
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>with Up to 35% OFF*.</p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-[30%] m-3">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//Desktop-Sarovar-Hotels-Sale-030423.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                Save Big with Sarovar Hotels & Resorts!
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>Grab up to 40% OFF* on your stay.</p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-[30%] m-3">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//singapore-16x116-20122023.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                SPECIAL DISCOUNTS ON SINGAPORE HOTELS:
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>
                Grab Up to 25% OFF* & book your stay @ LESS THAN ₹8000 per night
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-[30%] m-3">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//ih-luxe-116x116-27042023.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                Ultra-Premium Stays, Only for You!
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>
                Explore Luxe International for Handpicked Stays with Signature
                Services
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-[30%] m-3">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//116X116-evolve-back-09022024.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                SPECIAL 2+1 OFFER FOR YOU:
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>
                Book for 2 Nights, Stay for 3 Nights at Evolve Back Resorts in
                Coorg, Hampi and Kabini.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-[10px]">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
      </div>

      <div
        className={
          toggle === 5
            ? "flex flex-wrap justify-center items-center my-4"
            : "hidden"
        }
      >
        <div className="bg-white shadow-2xl w-[30%] m-3 rounded-md">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//DT-Pricedrop-pre-buzz-6Mar.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                LIVE NOW: FLAT 45% OFF* on Holiday Packages
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>
                with Package Price Drop Days for BIG Savings on Summer Trips
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-[30%] m-3">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//offer-11032024.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                Grab Up to 35% OFF* + Additional Savings on EMI{" "}
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>
                on flights, hotels and holiday packages for pocket-friendly
                travel bookings.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-[30%] m-3">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/images//Visa-DT-211223.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                Grab Up to 35% OFF* on Holiday Package
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>and plan your next vacay NOW!</p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-[30%] m-3">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//Desktop-Hol-Packages-Villa-11Oct.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                Introducing Holiday Packages with Villas
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>
                Explore unique stay options like villas, homestays, cottages,
                tents, beach huts, etc.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-[30%] m-3">
          <div className="flex gap-3 p-4">
            <div>
              <img
                src="https://promos.makemytrip.com/images//desktop-YesBank-070324.jpg?im=Resize=(134,134)"
                alt=""
                className="h-[134px] w-[134px]"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">
                Avail No Cost EMI + Up to 35% OFF*
              </p>
              <span className="w-[33px] h-[1px] bg-[#eb2026] flex"></span>
              <p>Avail No Cost EMI + Up to 35% OFF*</p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-4 my-2">
            <span>T&C's Apply</span>
            <span>View Details</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
