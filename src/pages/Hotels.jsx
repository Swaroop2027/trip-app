import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Offer from "../components/Offer";

const Hotels = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div className="bg-white shadow-lg m-8 rounded-md">
        <div className="p-4 leading-[36px]">
          <p className="text-3xl font-bold">For your stay in Goa</p>
          <p>Wed, 13 Mar 24 - Thu, 14 Mar 24</p>
        </div>

        <div className="flex p-4">
          <Slider {...settings} className="w-full">
            <div className="h-full w-[258px] border-[1px] border-[#d8d8d8] border-solid rounded-[16px]">
              <div className="w-full h-[150px]">
                <img
                  src="https://r1imghtlak.mmtcdn.com/5784526b-d589-4291-8967-2ea5414b604f.jpg?&downsize=583:388&output-format=jpg"
                  alt=""
                  className="w-full h-full object-cover align-top rounded-tl-[16px] rounded-br-[0] rounded-tr-[16px] rounded-bl-[0] max-h-[unset]"
                />
              </div>
              <div className="flex justify-between p-2">
                <div>
                  <p className="font-[700]">
                    ibis Styles Goa <br />
                    Calangute - An Accor Brand
                  </p>
                  <p className="mt-2">North Goa</p>
                </div>

                <div className="">
                  <p className="font-semibold">₹5,000</p>
                  <p className="text-xs text-nowrap">per night</p>
                </div>
              </div>
            </div>

            <div className="h-full w-[258px] border-[1px] border-[#d8d8d8] border-solid rounded-[16px] mr-[12px]">
              <div className="w-full h-[150px]">
                <img
                  src="https://r1imghtlak.mmtcdn.com/dbc62ad2a44c11eb883c0242ac110002.jfif?&downsize=583:388&crop=583:388;0,24&output-format=jpg"
                  alt=""
                  className="w-full h-full object-cover align-top rounded-tl-[16px] rounded-br-[0] rounded-tr-[16px] rounded-bl-[0] max-h-[unset]"
                />
              </div>
              <div className="flex justify-between p-2">
                <div>
                  <p className="font-[700]">
                    Alagoa Resort
                    <br />
                    <br />
                  </p>
                  <p className="mt-2">Betalbatim</p>
                </div>

                <div className="">
                  <p className="font-semibold">₹1,537</p>
                  <p className="text-xs text-nowrap">per night</p>
                </div>
              </div>
            </div>

            <div className="h-full w-[258px] border-[1px] border-[#d8d8d8] border-solid rounded-[16px] mr-[12px]">
              <div className="w-full h-[150px]">
                <img
                  src="https://r1imghtlak.mmtcdn.com/084be002670e11e492025ee5da2daa2a.jfif?&downsize=583:388&crop=583:388;0,14&output-format=jpg"
                  alt=""
                  className="w-full h-full object-cover align-top rounded-tl-[16px] rounded-br-[0] rounded-tr-[16px] rounded-bl-[0] max-h-[unset]"
                />
              </div>
              <div className="flex justify-between p-2">
                <div>
                  <p className="font-[700]">
                    Park Inn by Radisson <br />
                    Goa Candolim
                  </p>
                  <p className="mt-2">North Goa</p>
                </div>

                <div className="">
                  <p className="font-semibold">₹5,850</p>
                  <p className="text-xs text-nowrap">per night</p>
                </div>
              </div>
            </div>

            <div className="h-full w-[258px] border-[1px] border-[#d8d8d8] border-solid rounded-[16px] mr-[12px]">
              <div className="w-full h-[150px]">
                <img
                  src="https://r1imghtlak.mmtcdn.com/98bb2da6c0d111e989e00242ac110002.jfif?&downsize=583:388&crop=583:388;53,0&output-format=jpg"
                  alt=""
                  className="w-full h-full object-cover align-top rounded-tl-[16px] rounded-br-[0] rounded-tr-[16px] rounded-bl-[0] max-h-[unset]"
                />
              </div>
              <div className="flex justify-between p-2">
                <div>
                  <p className="font-[700]">
                    Resort Primo Bom Terra Verde
                    <br />
                    Calangute - An Accor Brand
                  </p>
                  <p className="mt-2">Bardez</p>
                </div>

                <div className="">
                  <p className="font-semibold">₹1,843</p>
                  <p className="text-xs text-nowrap">per night</p>
                </div>
              </div>
            </div>

            <div className="h-full w-[258px] border-[1px] border-[#d8d8d8] border-solid rounded-[16px] mr-[12px]">
              <div className="w-full h-[150px]">
                <img
                  src="https://r1imghtlak.mmtcdn.com/16a8d3c6cfab11ed9c3c0a58a9feac02.png?&downsize=583:388&crop=583:388;23,0&output-format=jpg"
                  alt=""
                  className="w-full h-full object-cover align-top rounded-tl-[16px] rounded-br-[0] rounded-tr-[16px] rounded-bl-[0] max-h-[unset]"
                />
              </div>
              <div className="flex justify-between p-2">
                <div>
                  <p className="font-[700]">
                    Estrela Do Mar Beach Resort - A Beach Property
                    <br />
                    <br />
                  </p>
                  <p className="mt-2">North Goa</p>
                </div>

                <div className="">
                  <p className="font-semibold">₹3,144</p>
                  <p className="text-xs text-nowrap">per night</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div>
        <Offer />
      </div>

      <div className="bg-white shadow-lg m-8 rounded-md">
        <div className="grid grid-cols-3">
          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/store/GoaDT.JPG"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Goa</p>
                <p className="text-sm">
                  Hotels, Budget Hotels, Resorts, Best Hotels, North Goa, Villas
                </p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/store/DelhiDT.JPG"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Delhi</p>
                <p className="text-sm">
                  Hotels, Budget Hotels, Resorts, Best Hotels, Near IGI Airport
                </p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/store/BangaloreDT.JPG"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Bangalore</p>
                <p className="text-sm">
                  Hotels, Budget Hotels, Resorts,Near Airport, Guhantara Resort
                </p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/images/50x50-Ooty-23052019.png"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Ooty</p>
                <p className="text-sm">
                  Hotels, Resorts, Cottges, Budget Hotels, Homestay, Resorts,
                </p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/store/MumbaiDT.JPG"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Mumbai</p>
                <p className="text-sm">
                  Hotels, Budget Hotels, Resorts, Couple Hotels, Near Mumbai
                  Airport
                </p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/images/50x50-Shimla-23052019.png"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Shimla</p>
                <p className="text-sm">
                  Hotels, Budget Hotels, Best Hotels, Resorts, Near Mall Road
                </p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/store/JaipurDT.JPG"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Jaipur</p>
                <p className="text-sm">
                  Hotels, Resorts, Budget Hotels, Best Hotels, Near Railway
                  Station
                </p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/images/50x50-Manali-23052019.png"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Manali</p>
                <p className="text-sm">
                  Hotels, Resorts, Budget Hotels, Best Hotels, Near Mall Road
                </p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/images/CDN_upload/shutterstock_1892460739.jpg"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Dubai</p>
                <p className="text-sm">
                  Hotels, Budget Hotels, 5 Star Hotels, Apart-Hotels, Homestays
                </p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/images/CDN_upload/popular%20area.jpg"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Singapore</p>
                <p className="text-sm">
                  Hotels, 5 Star Hotels, Little India, Orchard Road, Hostels,
                  Hotels in Sentosa
                </p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/images/CDN_upload/shutterstock_701150233.jpg"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Bangkok</p>
                <p className="text-sm">
                  Hotels, 3 Star Hotels, 5 Star Hotels,Hostels, Budget Hotels,
                  Hotels in Sukhumvit
                </p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/images/CDN_upload/shutterstock_1008532504.jpg"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Pattaya</p>
                <p className="text-sm">
                  Hotels, Budget Hotels, 5 Star Hotels, Resorts, Central
                  Pattaya, Beachfront Properties
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
