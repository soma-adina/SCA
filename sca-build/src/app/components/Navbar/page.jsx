import React from 'react'
import AfterNav from './AfterNav'
import MainNav from './MainNav'
import TopNav from './TopNav'
import ResNav from './ResNav'

export default function Navbar() {
  return (
    <div className='w-full  bg-rose-300'>
      <ResNav/>
        <TopNav/>
        <MainNav/>
        <AfterNav/>
        

    </div>
  )
}
