import React from 'react';
import Image from 'next/image';

// images
import bannerImg from '../logo/strawdew.png'
import GoldCoin from '../img/gold-coin.avif'

// icons
import { MdKeyboardArrowRight } from "react-icons/md";
import { GrDownload } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import Swip from './Swip';

export default function SectionOne() {
  return (
    <section className='bg-temp relative'>
      <div className="w-11/12 relative bg-white mx-auto py-5 px-10 translate-y-8 rounded-xl shadow-2xl">
        <div className='py-4'>
          <ul className='flex items-center gap-2'>
            <li className='text-tertiary text-xs font-medium cursor-pointer'>Store</li>
            <li className='text-gray-400'><MdKeyboardArrowRight /></li>
            <li className='text-tertiary text-xs font-medium cursor-pointer'>Games</li>
            <li className='text-gray-400'><MdKeyboardArrowRight /></li>
            <li className='text-tertiary text-xs font-medium cursor-pointer'>Strawdew Valley</li>
          </ul>
        </div>
        <div className='flex'>
          <div className="w-3/5 rounded-lg">
            <Swip/>
          </div>
          <div className='w-2/5 px-8'>
            <div className='border-l-2 border-primary px-3 mb-5'>
              <h5 className='text-sm'>
                Nintendo Switch 
              </h5>

            </div>

            <div className='my-7'>
              <h2 className='text-2xl text-tertiary font-semibold'>
                Strawdew Valley
              </h2>
            </div>

            <div className='my-7 flex items-center justify-between'>
              <h2 className='text-2xl text-tertiary font-semibold'>
                $14.99
              </h2>
              <FaRegHeart className='text-primary text-2xl hover:text-secondary'/>
            </div>

            <div className='my-7 flex items-center gap-2'>
              <Image
                className='w-5'
                src={GoldCoin}
              />
              <p className='text-tertiary text-xs'>
              Eligible for up to <b>75</b> Gold Points
              </p>
            </div>

            <div className='my-7'>
              <button className='bg-primary w-full rounded-lg hover:scale-x-105 transition duration-300 ease-out hover:bg-secondary'>
                <a href="#" className='text-white text-xl font-semibold flex items-center justify-center py-4 gap-2'><GrDownload/> Direct Download</a>
              </button>
            </div>

            <div className='my-7 '>
              
              <p className='text-tertiary text-xs'>
                This item will be sent to your system automatically after purchase.
              </p>
            </div>
            
            
          </div>
          
          
        </div>
      </div>
    </section>
  )
}
