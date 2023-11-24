import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img from "../../assets/homeImg.jpg";
import img2 from "../../assets/homeImg2.jpg";
import img3 from "../../assets/homeImg3.jpg";

const Header = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className=" relative">
          <div className="h-full flex flex-col gap-3 items-center justify-center w-full bg-slate-950 opacity-70 absolute bottom-0 z-40 text-white">
            <h1 className="text-white text-2xl font-semibold">
              Best BUILDING in Gulshan
            </h1>
            <div className="flex items-center justify-center gap-5">
              <p>
                $5000 <sub className="text-orange-700">/ month</sub>
              </p>
              <p className="bg-teal-500 p-1 font-semibold w-fit text-white">
                For Rent
              </p>
            </div>
          </div>
          <img className="h-[670px] object-fill w-full" src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[670px] object-fill w-full" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[670px] object-fill w-full" src={img3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
