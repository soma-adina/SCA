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
import banner2 from '../img/banner2.avif'
import banner3 from '../img/banner3.avif'
import banner4 from '../img/banner4.avif'
import banner5 from '../img/banner5.avif'
import banner6 from '../img/banner6.avif'
import hero from '../img/hero.avif'


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
          <Image className='' src={hero}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={banner}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={banner2}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner3}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner4}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner5}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner6}/>
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
          <Image src={hero}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner3}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner4}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner5}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner6}/>
        </SwiperSlide>
        
      </Swiper>
      </div>
      
    </>
  );
}
