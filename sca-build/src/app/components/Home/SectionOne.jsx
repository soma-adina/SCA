import React from 'react';
import Image from 'next/image';

// images
import GoldCoin from '../img/gold-coin.avif'
import certify from '../logo/certify.svg'

// icons
import { MdKeyboardArrowRight } from "react-icons/md";
import { GrDownload } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import Swip from './Swip';

export default function SectionOne() {
  return (
    <section className='bg-temp relative'>
      <div className="lg:w-11/12 w-full relative bg-white mx-auto py-5 px-10 lg:translate-y-8 lg:rounded-xl shadow-lg">

      {/* hero navigation */}
        <div className='py-4'>
          <ul className='flex items-center gap-2'>
            <li className='text-tertiary text-xs font-medium cursor-pointer'>Store</li>
            <li className='text-gray-400'><MdKeyboardArrowRight /></li>
            <li className='text-tertiary text-xs font-medium cursor-pointer'>Games</li>
            <li className='text-gray-400'><MdKeyboardArrowRight /></li>
            <li className='text-tertiary text-xs font-medium cursor-pointer'>Strawdew Valley</li>
          </ul>
        </div>
        <div className='flex flex-wrap'>
          <div className="md:w-3/5 w-full">
            <div className="w-full rounded-lg">
              <Swip/>
              <div className='lg:w-3/5 md:w-full md:flex items-center hidden'>
                <div className='w-2/12'>
                  <Image
                    className='w-full'
                    src={certify}
                    alt=''
                  />
                </div>
                <div className='p-2 text-tertiary text-xs  divide-y divide-solid divide-tertiary'>
                  <p className='py-2 '>Fantasy Violenc, Use of Alcohol, Use of Tabacco, Simulated Gambling, Mild Language and Mild Blood.</p>
                  <p className='py-2'>Users Interact</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className='md:w-2/5 md:px-8 my-4 md:my-0 w-full'>
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
                alt=''
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
