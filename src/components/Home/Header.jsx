
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img from '../../assets/homeImg.jpg'
import img2 from '../../assets/homeImg2.jpg'
import img3 from '../../assets/homeImg3.jpg'

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
        <SwiperSlide>
            <img className='h-[670px] object-fill w-full' src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-[670px] object-fill w-full' src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-[670px] object-fill w-full' src={img3} alt="" />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Header;
