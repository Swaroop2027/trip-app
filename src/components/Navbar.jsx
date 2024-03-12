import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-lg rounded-sm p-4 fixed top-0 left-0 w-full z-10">
      <div className="flex justify-around">
        <span>
          <img
            src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png"
            alt=""
            className="h-[36px] w-[110px]"
          />
        </span>

        <nav>
          <ul className="flex gap-5">
            <li className="flex flex-col items-center">
              <span>
                <img
                  src="https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-airplane-icon-png-image_3989898.jpg"
                  alt=""
                  className="w-[25px] h-[20px]"
                />
              </span>
              <span className="text-[#008cff] font-semibold">Flights</span>
            </li>
            <li className="flex flex-col items-center">
              <span>
                <img
                  src="https://cdn4.iconfinder.com/data/icons/hotel-service-5/300/hotel-512.png"
                  alt=""
                  className="w-[25px] h-[20px]"
                />
              </span>
              <span className="text-[#008cff] font-semibold">Hotels</span>
            </li>
            <li className="flex flex-col items-center">
              <span>
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/homestay-1723913-1463389.png?f=webp"
                  alt=""
                  className="w-[25px] h-[20px]"
                />
              </span>
              <span className="text-[#008cff] font-semibold">
                Homestays & Villas
              </span>
            </li>
            <li className="flex flex-col items-center">
              <span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4343/4343430.png"
                  alt=""
                  className="w-[25px] h-[20px]"
                />
              </span>
              <span className="text-[#008cff] font-semibold">
                Holiday Packages
              </span>
            </li>
            <li className="flex flex-col items-center">
              <span>
                <img
                  src="https://toppng.com/uploads/preview/high-speed-train-icon-high-speed-train-icon-11553508231cdcvhnpdyb.png"
                  alt=""
                  className="w-[25px] h-[20px]"
                />
              </span>
              <span className="text-[#008cff] font-semibold">Trains</span>
            </li>
            <li className="flex flex-col items-center">
              <span>
                <img
                  src="https://cdn.icon-icons.com/icons2/2070/PNG/512/bus_icon_126644.png"
                  alt=""
                  className="w-[25px] h-[20px]"
                />
              </span>
              <span className="text-[#008cff] font-semibold">Buses</span>
            </li>
            <li className="flex flex-col items-center">
              <span>
                <img
                  src="https://i.pinimg.com/564x/f8/29/bc/f829bcffceebe4d7334da234d448e51d.jpg"
                  alt=""
                  className="w-[25px] h-[20px]"
                />
              </span>
              <span className="text-[#008cff] font-semibold">Cabs</span>
            </li>
          </ul>
        </nav>

        <ul>
          <li className="flex items-center gap-3">
            <span>
              <img
                src="https://static-00.iconduck.com/assets.00/makemytrip-icon-2048x2048-lzegiqql.png"
                alt=""
                className="h-[20px] w-[20px] rounded-full"
              />
            </span>
            <span className="font-semibold text-sm">
              <div>Login or</div>
              Create Account
            </span>
          </li>
        </ul>

        <ul>
          <li className="text-sm">
            <p>Country</p>
            <p className="flex items-center gap-1">
              <span>
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png"
                  alt=""
                  className="w-[15px] h-[12px]"
                />
              </span>
              <span className="font-semibold text-xs">India</span>
              <span>
                <img
                  src="https://cdn-icons-png.freepik.com/512/10017/10017916.png"
                  alt=""
                  className="w-[16px] h-[16px]"
                />
              </span>
            </p>
          </li>
        </ul>
        <ul>
          <li className="text-sm">
            <p>Language</p>
            <p className="font-semibold text-xs flex items-center gap-1">
              <span>ENG</span>
              <span>
                <img
                  src="https://cdn-icons-png.freepik.com/512/10017/10017916.png"
                  alt=""
                  className="w-[16px] h-[16px]"
                />
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
