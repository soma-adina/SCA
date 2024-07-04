'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// images
import Card1 from '../img/portia.avif'
import Card2 from '../img/card2.avif'
import Card3 from '../img/card3.avif'
import Card4 from '../img/card4.avif'
import Card5 from '../img/card5.avif'
import Card6 from '../img/card6.avif'



// icons
import { FaRegHeart } from "react-icons/fa";



// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function CardSwip() {
  return (
    <div className="lg:w-11/12 w-full relative  mx-auto my-12 py-5 flex flex-wrap justify-between">
      <h4 className='text-3xl text-tertiary font-semibold my-3'>More like this..</h4>
      <div className='px-8  h-full w-full'>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        navigation={true}
        breakpoints={
          {640: {
          slidesPerView: 2.7
          },
          768: {
            slidesPerView: 3.7
            }
        }
          
        }
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='flex flex-col flex-nowrap gap-3 border border-solid relative  border-gray-200 '>
              <div className='relative transition hover:-translate-y-8 z-10'>
                <Image alt='' className='w-full relative ' src={Card1}/>
              </div>
              <div className='py-4 px-4 text-left'>
                <h3 className='text-tertiary hover:text-primary font-semibold '>My Portia Game</h3>
                <p className='text-xs'>4/16/19</p>

              </div>
              <div className='py-6 px-4 text-left'>
                  <h3 className='font-bold text-tertiary text-lg'>$ 29.99</h3>
                  <div className='flex items-center justify-between border-l-2 border-primary border-solid my-2'>
                    <p className='px-2 text-xs'>Nintendo Switch</p>
                    <FaRegHeart className='text-primary text-xl hover:text-secondary'/>

                  </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col gap-3 border border-solid relative  border-gray-200 rounded-md overflow-hidden'>
              <div className='relative transition hover:-translate-y-8 z-100'>
                <Image alt='' className='w-full relative ' src={Card2}/>
              </div>
              <div className='py-4 px-4 text-left'>
                <h3 className='text-tertiary hover:text-primary font-semibold '>Portion Permit</h3>
                <p className='text-xs'>4/16/19</p>

              </div>
              <div className='py-6 px-4 text-left'>
                  <h3 className='font-bold text-tertiary text-lg'>$ 19.99</h3>
                  <div className='flex items-center justify-between border-l-2 border-primary border-solid my-2'>
                    <p className='px-2 text-xs'>Nintendo Switch</p>
                    <FaRegHeart className='text-primary text-xl hover:text-secondary'/>

                  </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col gap-3 border border-solid relative  border-gray-200 rounded-md overflow-hidden'>
              <div className='relative transition hover:-translate-y-8 z-100'>
                <Image alt='' className='w-full relative ' src={Card3}/>
              </div>
              <div className='py-4 px-4 text-left'>
                <h3 className='text-tertiary hover:text-primary font-semibold '>Ooblet</h3>
                <p className='text-xs'>4/16/19</p>

              </div>
              <div className='py-6 px-4 text-left'>
                  <h3 className='font-bold text-tertiary text-lg'>$ 29.99</h3>
                  <div className='flex items-center justify-between border-l-2 border-primary border-solid my-2'>
                    <p className='px-2 text-xs'>Nintendo Switch</p>
                    <FaRegHeart className='text-primary text-xl hover:text-secondary'/>

                  </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col gap-3 border border-solid relative  border-gray-200 rounded-md overflow-hidden'>
              <div className='relative transition hover:-translate-y-8 z-100'>
                <Image alt='' className='w-full relative ' src={Card4}/>
              </div>
              <div className='py-4 px-4 text-left'>
                <h3 className='text-tertiary hover:text-primary font-semibold '>Bear and Breakfast</h3>
                <p className='text-xs'>4/16/19</p>

              </div>
              <div className='py-6 px-4 text-left'>
                  <h3 className='font-bold text-tertiary text-lg'>$ 29.99</h3>
                  <div className='flex items-center justify-between border-l-2 border-primary border-solid my-2'>
                    <p className='px-2 text-xs'>Nintendo Switch</p>
                    <FaRegHeart className='text-primary text-xl hover:text-secondary'/>

                  </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col gap-3 border border-solid relative  border-gray-200 rounded-md overflow-hidden'>
              <div className='relative transition hover:-translate-y-8 z-100'>
                <Image alt='' className='w-full relative ' src={Card5}/>
              </div>
              <div className='py-4 px-4 text-left'>
                <h3 className='text-tertiary hover:text-primary font-semibold '>Wytchwood</h3>
                <p className='text-xs'>4/16/19</p>

              </div>
              <div className='py-6 px-4 text-left'>
                  <h3 className='font-bold text-tertiary text-lg'>$ 19.99</h3>
                  <div className='flex items-center justify-between border-l-2 border-primary border-solid my-2'>
                    <p className='px-2 text-xs'>Nintendo Switch</p>
                    <FaRegHeart className='text-primary text-xl hover:text-secondary'/>

                  </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col gap-3 border border-solid relative  border-gray-200 rounded-md overflow-hidden'>
              <div className='relative transition hover:-translate-y-8 z-100'>
                <Image alt='' className='w-full relative ' src={Card6}/>
              </div>
              <div className='py-4 px-4 text-left'>
                <h3 className='text-tertiary hover:text-primary font-semibold '>Fae Farm</h3>
                <p className='text-xs'>4/16/19</p>

              </div>
              <div className='py-6 px-4 text-left'>
                  <h3 className='font-bold text-tertiary text-lg'>$ 59.99</h3>
                  <div className='flex items-center justify-between border-l-2 border-primary border-solid my-2'>
                    <p className='px-2 text-xs'>Nintendo Switch</p>
                    <FaRegHeart className='text-primary text-xl hover:text-secondary'/>

                  </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col gap-3 border border-solid relative  border-gray-200 rounded-md overflow-hidden'>
              <div className='relative transition hover:-translate-y-8 z-100'>
                <Image alt='' className='w-full relative ' src={Card1}/>
              </div>
              <div className='py-4 px-4 text-left'>
                <h3 className='text-tertiary hover:text-primary font-semibold '>My Portia Game</h3>
                <p className='text-xs'>4/16/19</p>

              </div>
              <div className='py-6 px-4 text-left'>
                  <h3 className='font-bold text-tertiary text-lg'>$ 29.99</h3>
                  <div className='flex items-center justify-between border-l-2 border-primary border-solid my-2'>
                    <p className='px-2 text-xs'>Nintendo Switch</p>
                    <FaRegHeart className='text-primary text-xl hover:text-secondary'/>

                  </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col gap-3 border border-solid relative  border-gray-200 rounded-md overflow-hidden'>
              <div className='relative transition hover:-translate-y-8 z-100'>
                <Image alt='' className='w-full relative ' src={Card1}/>
              </div>
              <div className='py-4 px-4 text-left'>
                <h3 className='text-tertiary hover:text-primary font-semibold '>My Portia Game</h3>
                <p className='text-xs'>4/16/19</p>

              </div>
              <div className='py-6 px-4 text-left'>
                  <h3 className='font-bold text-tertiary text-lg'>$ 29.99</h3>
                  <div className='flex items-center justify-between border-l-2 border-primary border-solid my-2'>
                    <p className='px-2 text-xs'>Nintendo Switch</p>
                    <FaRegHeart className='text-primary text-xl hover:text-secondary'/>

                  </div>
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}
