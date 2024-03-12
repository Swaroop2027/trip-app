import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  let slides = [
    {
      url: "https://www.progressive.com/lifelanes/wp-content/uploads/2023/01/PR1497_FamilyRoadTrip_Banner.jpg",
    },
    {
      url: "https://www.mistay.in/travel-blog/content/images/size/w2000/2020/05/cover-9.jpg",
    },
    { url: "https://lvivity.com/wp-content/uploads/2019/07/travel-app.jpg" },
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
    <Slider {...settings}>
      {slides.map((image, ind) => (
        <div key={ind}>
          <img src={image.url} alt="" className="h-[400px] w-full" />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
