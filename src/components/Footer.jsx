import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white py-[70px] px-[80px] mt-auto min-h-[10vh]">
      <div className="flex justify-between">
        <div className="flex items-center gap-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
            alt=""
            className="w-[30px] h-[24px]"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUAAAD///9bW1urq6uAgIDV1dViYmLS0tL4+Pji4uLZ2dmjo6Po6OjExMTe3t7IyMi+vr6ZmZm2trYXFxe3t7fs7OwJCQkhISF2dnaPj4+lpaVeXl5ISEiUlJR4eHhoaGgyMjIuLi47OztCQkInJydTU1MxMTGfLaxiAAADgUlEQVR4nO3d21IiMRSFYZvG4SxnOYMyOu//iDMXWtpFI+x0Zq+V1PrvvLHyFdJg0kk/POBanVvr9mazOUyng4+2ZVluP3+YfrYDDjKs5/16Ouovi3sboAds6zTo3G9LTrjaPBpxSQnn7U4ILxnha2n92/xqix78PZXdYF9RlOjR367dxJeA8Bx0eUlIuG72Av5rhib83KCpj104ag7kFo4jAIsFWvFDkxhAZuEsCpBYuIkDLCZoyLX2kYC8wvAvookII3wQfjRCU+o7RwMWY7Slvhgf9dTCaJcZWmHEl5BT+BYRWHTQmroO2QuHuQsjflSQCqP+kRaPaE5NTWdm6IXzxlMz7MJTVCCjMO7bsOijPZdFmZ356gntuayXu3AV90JDKPwdF1j00KCLWpGFQzToomP2wliziLzCBnNQ3br4rjSlGdYfrM/oUVuyTub33tEjtrawAZdz9IDNGVecTujx2rPNsy3Rww3I9sWbd+3serZ7nzbo4QZkEyb4NjTO0uzRww2obxK+oIcbkE34hh5uQE8m4Qo93IBswvS+0VinafIXPqOHG5CEEvJnWx7NXtjNX4gebUgSSsifSZjiNI2EEiaQSci3sHRHElbiW8K+Iwkr8S1/fut116rNtNFi+F7/S76FW15sWyQNwl2MvIS4/YdewkP2wnb2Qtz6m5cQt/7mJcSt3XgJYUAvIfD/Kych8HudkxC4dc1JCLzhxkkIPIDHSQi8pchJeMxe2Mpe+JK9ELjA6CTEAZ2EyMUpHyFyutFHiNzn7CNEnmziI0Se9OUjRJ586SPEzbR5CZF3uvsIkXe6+wiRm9pchF3kne4uwiXyzj4XIXQF1UUIPTLCRQg9js5FCD3q2kUI3bznIlwnL+x26huPx6NJOThCt9T8Of2qa2e72wQpCM2030JCyiSUkD+TMMm7LyWUkD8JJeTPdOKAhJRJKCF/Elai3hV0LQkl5E/C9IWm08wkpExCCfmTsBLhwytuJ6GE/EkoIX+ms6AlpExCCfmTsBLhg/FuJ6GE/EmYvtD0FBYJKZNQQv4krMT44PSbSSghfxJKyJ+EEvJnEgJPtgxPwvSFpucBS0iZhBLyJ6GE/OUvHEkoIX0SSsifhJWgZ+qFlr9wIqGE9EkoIX8SSsjfQkIJ6ZNQQv4krDRBjzakmYQS0iehhPzlL8z/E/9YGvrfD477C47JUcbglne0AAAAAElFTkSuQmCC"
            alt=""
            className="w-[24px] h-[30px]"
          />
        </div>

        <div>
          <p className="font-semibold">© 2024 MAKEMYTRIP PVT. LTD.</p>
          <p className="text-end">
            Country <span className="font-semibold">India USA UAE</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
