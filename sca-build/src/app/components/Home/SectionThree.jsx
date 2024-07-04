import React from 'react'
import Image from 'next/image'

// images
import certify from '../logo/certify.svg'

// icons
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { BsTabletLandscape } from "react-icons/bs";
import { VscGame } from "react-icons/vsc";

export default function SectionThree() {
  return (
    <section>
        <div className='lg:w-11/12 w-full relative bg-white mx-auto my-12 py-5 px-10 flex flex-wrap justify-between'>
        {/* first container */}
            <div className="md:w-[49%] w-full bg-gray-100 rounded-xl my-2 py-5 md:px-8 px-10">
                <h3 className='text-center font-semibold text-tertiary mb-2'>ESRB rating</h3>
                <div className='w-full flex items-center bg-white px-5 py-3 rounded-xl shadow-md'>
                    <div className='w-2/12'>
                        <Image
                            alt=''
                            className='w-full'
                            src={certify}
                        />
                    </div>
                    <div className='p-2 text-tertiary text-xs  divide-y divide-solid divide-tertiary'>
                        <p className='py-2 '>Fantasy Violenc, Use of Alcohol, Use of Tabacco, Simulated Gambling, Mild Language and Mild Blood.</p>
                        <p className='py-2'>Users Interact</p>
                    </div>
                </div>
            </div>
        {/* second container */}
            <div className="md:w-[49%] w-full bg-gray-100 rounded-xl my-2  py-5 md:px-8 px-10">
                <h3 className='text-center font-semibold text-tertiary mb-2'>Supported play modes</h3>
                <div className='w-full flex items-center justify-between px-1 py-3'>
                    <div className="w-[30%]  text-center">
                        <div className='bg-tertiary py-5 flex items-center justify-center rounded-lg'>
                            <PiTelevisionSimpleBold className='text-4xl text-white'/>
                        </div>
                        <h4 className='my-2 text-tertiary text-sm  font-semibold'>TV</h4>
                    </div>
                    <div className="w-[30%]  text-center">
                        <div className='bg-tertiary py-5 flex items-center justify-center rounded-lg'>
                            <BsTabletLandscape className='text-4xl text-white'/>
                        </div>
                        <h4 className='my-2 text-tertiary text-sm  font-semibold'>Tabletop</h4>
                    </div>
                    <div className="w-[30%]  text-center">
                        <div className='bg-tertiary py-5 flex items-center justify-center rounded-lg'>
                            <VscGame className='text-4xl text-white'/>
                        </div>
                        <h4 className='my-2 text-tertiary text-sm font-semibold'>Handheld</h4>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}
