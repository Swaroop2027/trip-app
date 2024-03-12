import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-white shadow-lg py-6 px-12 mx-9 flex flex-col justify-center rounded-md">
      <div className="my-2">
        <p className="text-3xl font-[700]">
          Unlock Lesser-Known Wonders of India
        </p>
      </div>

      <div className="my-4">
        <Slider {...settings} className=" w-full">
          <div className="h-[270px] overflow-hidden relative rounded-[8px] px-4 text-center">
            <div className="w-full absolute left-0 bottom-0 z-[1] pt-[77px] pb-[12px] px-[12px]">
              <p className="font-[700] text-white text-xl">
                Shimla's Best Kept Secret
              </p>
            </div>
            <img
              src="https://hblimg.mmtcdn.com//content/hubble/img/narkanda/mmt/destination/m_Narkanda_l_372_902.jpg?im=Resize=(400,462)"
              alt=""
              className="w-[300px] h-full object-cover max-h-[unset]"
            />
          </div>

          <div className="h-[270px] overflow-hidden relative rounded-[8px] px-4 text-center">
            <div className="w-full absolute left-0 bottom-0 z-[1] pt-[77px] pb-[12px] px-[12px]">
              <p className="font-[700] text-white text-xl">
                Tamil Nadu's Charming Hill Town
              </p>
            </div>
            <img
              src="https://hblimg.mmtcdn.com//content/hubble/img/yercaud/mmt/destination/m_destination-yercaud-landscape_l_400_640.jpg?im=Resize=(400,462)"
              alt=""
              className="w-[300px] h-full object-cover max-h-[unset]"
            />
          </div>

          <div className="h-[270px] overflow-hidden relative rounded-[8px] px-4 text-center">
            <div className="w-full absolute left-0 bottom-0 z-[1] pt-[77px] pb-[12px] px-[12px]">
              <p className="font-[700] text-white text-xl">
                Picturesque Gateway to Himalayas
              </p>
            </div>
            <img
              src="https://hblimg.mmtcdn.com//content/hubble/img/dooars/mmt/destination/m_Dooars_l_457_685.jpg?im=Resize=(400,462)"
              alt=""
              className="w-[300px] h-full object-cover max-h-[unset]"
            />
          </div>

          <div className="h-[270px] overflow-hidden relative rounded-[8px] px-4 text-center">
            <div className="w-full absolute left-0 bottom-0 z-[1] pt-[77px] pb-[12px] px-[12px]">
              <p className="font-[700] text-white text-xl">
                Quaint Little Hill Station in Gujarat
              </p>
            </div>
            <img
              src="https://hblimg.mmtcdn.com//content/hubble/img/saputara/mmt/destination/m_destination-saputara-landscape_l_400_640.jpg?im=Resize=(400,462)"
              alt=""
              className="w-[300px] h-full object-cover max-h-[unset]"
            />
          </div>

          <div className="h-[270px] overflow-hidden relative rounded-[8px] px-4 text-center">
            <div className="w-full absolute left-0 bottom-0 z-[1] pt-[77px] pb-[12px] px-[12px]">
              <p className="font-[700] text-white text-xl">
                A pleasant summer retreat and a snowy winter wonderland!
              </p>
            </div>
            <img
              src="https://hblimg.mmtcdn.com//content/hubble/img/dhanaulti/mmt/destination/m_Destination_Dhanaulti_l_534_801.jpg?im=Resize=(400,462)"
              alt=""
              className="w-[300px] h-full object-cover max-h-[unset]"
            />
          </div>

          <div className="h-[270px] overflow-hidden relative rounded-[8px] px-4 text-center">
            <div className="w-full absolute left-0 bottom-0 z-[1] pt-[77px] pb-[12px] px-[12px]">
              <p className="font-[700] text-white text-xl">
                Seaside Resort Village in West Bengal
              </p>
            </div>
            <img
              src="https://hblimg.mmtcdn.com//content/hubble/img/mandarmani/mmt/destination/m_destination-mandarmoni-landscape_l_400_640.jpg?im=Resize=(400,462)"
              alt=""
              className="w-[300px] h-full object-cover max-h-[unset]"
            />
          </div>

          <div className="h-[270px] overflow-hidden relative rounded-[8px] px-4 text-center">
            <div className="w-full absolute left-0 bottom-0 z-[1] pt-[77px] pb-[12px] px-[12px]">
              <p className="font-[700] text-white text-xl">
                Hidden Gem along Maharashtra's Coast
              </p>
            </div>
            <img
              src="https://hblimg.mmtcdn.com//content/hubble/img/malvan/mmt/destination/m_Malvan_l_636_847.jpg?im=Resize=(400,462)"
              alt=""
              className="w-[300px] h-full object-cover max-h-[unset]"
            />
          </div>

          <div className="h-[270px] overflow-hidden relative rounded-[8px] px-4 text-center">
            <div className="w-full absolute left-0 bottom-0 z-[1] pt-[77px] pb-[12px] px-[12px]">
              <p className="font-[700] text-white text-xl">
                Picture-Perfect Hill Station in Tamil Nadu
              </p>
            </div>
            <img
              src="https://hblimg.mmtcdn.com//content/hubble/img/yelagiri/mmt/destination/m_destination_yelagiri_landscape_l_340_544.jpg?im=Resize=(400,462)"
              alt=""
              className="w-[300px] h-full object-cover max-h-[unset]"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
