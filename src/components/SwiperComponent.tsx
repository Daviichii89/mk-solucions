// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import img1 from "../assets/img/image_swiper_1.jpg";
import img2 from "../assets/img/image_swiper_2.jpg";
import img3 from "../assets/img/image_swiper_3.jpg";

export const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      className='mySwiper'
    >
      <SwiperSlide>
        <img src={img1} alt="home" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="home2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="home3" />
      </SwiperSlide>
    </Swiper>
  );
};