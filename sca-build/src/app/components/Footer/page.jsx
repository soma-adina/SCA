import React from 'react'
import BeforeFooter from './BeforeFooter';
import MainFooter from './MainFooter';
import AfterFooter from './AfterFooter';
// icons
import { FaFacebook} from "react-icons/fa";



export default function Footer() {
  return (
    <div >
      {/* before footer */} 
      <BeforeFooter/>

      {/* main footer */}
      <MainFooter/>

      {/* after footer */}

      <AfterFooter/>

    </div>
  )
}
