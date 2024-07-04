import React from 'react'
import Image from 'next/image'

// images
import hero from '../img/hero.avif'

// icons

import ReadMore from './ReadMore';

export default function SectionTwo() {
  return (
    <section>
        <div className="lg:w-11/12 w-full relative bg-white mx-auto my-12 py-5 px-10 flex flex-wrap justify-between">
            <div className="md:w-3/6 w-full">
                <h4 className="text-tertiary text-xl font-semibold py-2">You're moving to the valley...</h4>
                <div>
                  <ReadMore >
                    
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae inventore praesentium, 
                        cum voluptatum exercitationem at rerum dolorum 
                        a voluptates vitae, amet aut molestiae consequatur fugiat. Dolorum eum vitae quisquam vero.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae inventore praesentium, 
                        cum voluptatum exercitationem at rerum dolorum 
                        a voluptates vitae, amet aut molestiae consequatur fugiat. Dolorum eum vitae quisquam vero.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae inventore praesentium, 
                        cum voluptatum exercitationem at rerum dolorum 
                        a voluptates vitae, amet aut molestiae consequatur fugiat. Dolorum eum vitae quisquam vero.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae inventore praesentium, 
                        cum voluptatum exercitationem at rerum dolorum 
                        a voluptates vitae, amet aut molestiae consequatur fugiat. Dolorum eum vitae quisquam vero.
                    
                    
                  </ReadMore>
                </div>
                
                <p className='text-xs'>
                Software description provided by the publisher.
                </p>
                <button className="bg-primary py-3 px-4 my-4 rounded-lg hover:scale-x-105 transition duration-300 ease-out hover:bg-secondary">
                <a href="#" className="text-white font-semibold">Explore this game's official website</a>
              </button>
            </div>

            <div className="md:w-3/6 w-full md:px-5 px-0">
                <Image
                alt=""
                    className="w-full rounded-xl"
                    src={hero}/>
                    
            </div>
            
        </div>
    </section>
  )
}
