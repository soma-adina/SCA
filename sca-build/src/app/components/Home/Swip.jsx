import React, { useRef, useState } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// images
import banner from '../logo/strawdew.png'


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Swip() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
    <div className=''>
    
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image className='' src={banner}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={banner}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={banner}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner}/>
        </SwiperSlide>
        
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={20}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={banner}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner}/>
        </SwiperSlide>
        
      </Swiper>
      </div>
      
    </>
  );
}
