import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings} className="w-full">
      <div className="bg-white shadow-lg p-6 m-8">
        <div className="flex justify-between items-center gap-3">
          <div>
            <img
              src="https://promos.makemytrip.com/Growth/Images/B2C/xhdpi/ic_whatsnew_flight.png"
              alt=""
              className="h-[68px] w-[68px]"
            />
          </div>

          <div>
            <p className="text-[#4a4a4a]">
              Book Flights with Voice Chat!
              <br />
              Code:
              <b>MMTMYRA</b>
              will be auto-applied for EXTRA discounts!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg p-6 m-8">
        <div className="flex justify-between items-center gap-3">
          <div>
            <img
              src="https://promos.makemytrip.com/images/CDN_upload/indiannessapphome2.png"
              alt=""
              className="h-[68px] w-[68px]"
            />
          </div>

          <div>
            <p className="text-[#4a4a4a]">
              Finding Indian Food just got easier!
              <br />
              Use newly launched filters to find <b>Indian food</b> during
              International travel
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg p-6 m-8">
        <div className="flex justify-between items-center gap-3">
          <div>
            <img
              src="https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png"
              alt=""
              className="h-[68px] w-[68px]"
            />
          </div>

          <div>
            <p className="text-[#4a4a4a]">
              Planning to book an international flight?
              <br />
              Check Travel Guidelines
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg p-6 m-8">
        <div className="flex justify-between items-center gap-3">
          <div>
            <img
              src="https://tripmoneycmsimgak.mmtcdn.com/img/RIL_1_468ef5d7a7.png"
              alt=""
              className="h-[68px] w-[68px]"
            />
          </div>

          <div>
            <p className="text-[#4a4a4a]">
              Travel light, leave your worries behind with
              <br />
              <b> Reliance General Insurance</b>
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg p-6 m-8">
        <div className="flex justify-between items-center gap-3">
          <div>
            <img
              src="https://tripmoneycmsimgak.mmtcdn.com/img/abhi_1_223c8a2989.png"
              alt=""
              className="h-[68px] w-[68px]"
            />
          </div>

          <div>
            <p className="text-[#4a4a4a]">
              Karo Acchi Sehat Ka Iraada, Chuno Insurance Jo De Zyada
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default SlideCard;
