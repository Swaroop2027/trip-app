import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Offer from "../components/Offer";

const Holidays = () => {
  let slides = [
    {
      url: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/Summer-Holidays-Hero-banner-desktop.jpg?crop=1200:320&downsize=1200:320&quot",
    },
    {
      url: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/HoneyPackages_1200x320_23Jan.jpg?crop=1200:320&downsize=1200:320&quot",
    },
    {
      url: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/Punakha-1200x320-12Feb.jpg?crop=1200:320&downsize=1200:320&quot",
    },
    {
      url: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/Cruise-desktop-HB.jpg?crop=1200:320&downsize=1200:320&quot",
    },
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="mx-[80px] my-4">
        <Slider {...settings} className="w-full">
          {slides.map((image, ind) => (
            <div key={ind}>
              <img src={image.url} alt="" className="h-[400px] w-full" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="my-4">
        <Offer />
      </div>

      <div className="bg-white shadow-lg mx-8 my-4 rounded-md">
        <div className="grid grid-cols-3">
          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/4308/Picturesque%20Houseboat%20on%20Dal%20Lake.jpg?crop=50:50&downsize=50:50"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Kashmir</p>
                <p className="text-sm">
                  Kashmir Tour Packages , Kashmir Tourism, Kashmir Honeymoon
                  Packages
                </p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3872/Havelock_2.jpg?crop=50:50&downsize=50:50"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Andaman</p>
                <p className="text-sm">
                  Andaman Tour Packages , Andaman Tourism, Andaman Honeymoon
                  Packages
                </p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1185/leh01.jpg?crop=50:50&downsize=50:50"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Ladakh</p>
                <p className="text-sm">
                  Ladakh Tour Packages , Ladakh Tourism, Ladakh Honeymoon
                  Packages
                </p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1215/Gangtok.jpg?crop=50:50&downsize=50:50"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">North East</p>
                <p className="text-sm">
                  North East Tour Packages , North East India Tourism, North
                  East India Honeymoon Packages
                </p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/Y.jpg?crop=50:50&downsize=50:50"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Goa</p>
                <p className="text-sm">
                  Goa Tour Packages , Goa Tourism, Goa Honeymoon Packages
                </p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1369/Serene%20Kerala.jpg?crop=50:50&downsize=50:50"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Kerala</p>
                <p className="text-sm">
                  Kerala Tour Packages , Kerala Tourism, Kerala Honeymoon
                  Packages
                </p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1993/Aerial%20view%20of%20Paradise%20Island%20Resort.jpg?crop=50:50&downsize=50:50"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Maldives</p>
                <p className="text-sm">
                  Maldives Tour Packages , Maldives Tourism, Maldives Honeymoon
                  Packages
                </p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/2887/Colombo1.jpg?crop=50:50&downsize=50:50"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Sri Lanka</p>
                <p className="text-sm">
                  Sri Lanka Tour Packages , Sri lanka Tourism, Sri Lanka
                  Honeymoon Packages
                </p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3147/Dubai-Marina-skyline.jpg?crop=50:50&downsize=50:50"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Dubai</p>
                <p className="text-sm">
                  Dubai Tour Packages , Dubai Tourism, Dubai Honeymoon Packages
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holidays;
