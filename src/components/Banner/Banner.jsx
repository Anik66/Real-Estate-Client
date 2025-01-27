import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css"

import "swiper/css/bundle"

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
const Banner = () => {
  return (


     <Swiper className='mt-20 mb-10' cssMode={true}
     navigation={true}
     pagination={{clickable:true}}
     mousewheel={true}
     keyboard={true}
     loop={true}
     autoplay={
      { delay:2000}
     }

     modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}>
      <SwiperSlide>
      <div className="slide slide1">
         
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="slide slide2">
     
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="slide slide3">
         
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="slide slide4">
       
      </div>
      </SwiperSlide>


     </Swiper>
   
  );
};

export default Banner;


