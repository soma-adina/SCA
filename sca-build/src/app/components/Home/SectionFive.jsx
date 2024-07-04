import React from 'react'
import Image from 'next/image';

//icons
import { BsNintendoSwitch } from "react-icons/bs";

// images
import HandController from "../img/Controller-Hands.avif"

export default function SectionFive() {
  return (
    <section>
        <div className='w-11/12  relative bg-gray-100 rounded-xl mx-auto my-12  px-10 flex flex-wrap justify-between'>

        {/* first container */}
            <div className="md:w-[48%] w-full py-5">
                <div className="inline-block bg-primary  px-4 py-2 my-3">
                    <h1 className='uppercase text-white flex items-center gap-2 font-semibold text-2xl'>
                        <BsNintendoSwitch/> Online
                    </h1>
                </div>
                <div className="w-full my-3">
                    <h3 className='font-semibold text-tertiary text-lg'>
                    Play online, access classic NES™ and Super NES™ games, and more with a Nintendo Switch Online membership.
                    </h3>
                    <h4 className='text-tertiary font-semibold my-4 text-sm'>
                    This game supports:<a href='#' className='text-primary underline hover:text-secondary'> Online Play </a>  <a href='#' className='text-primary underline hover:text-secondary'> Save Data Cloud </a> 
                    </h4>

                    <button className='bg-primary py-3 px-4 my-4 rounded-lg hover:scale-x-105 transition duration-300 ease-out hover:bg-secondary'>
                        <a href="#" className='text-white font-semibold'>Learn More</a>
                    </button>
                </div>
                

            </div>

            {/* second container with image */}
            <div className="md:w-1/2 md:block hidden self-end">
                <Image
                alt=''
                className='w-full'
                    src={HandController}
                />
            </div>
        </div>
    </section>
  )
}
