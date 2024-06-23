import React from 'react'
import AfterNav from './AfterNav'
import MainNav from './MainNav'
import TopNav from './TopNav'

export default function Navbar() {
  return (
    <div className='w-full bg-rose-300'>
        <TopNav/>
        <MainNav/>
        <AfterNav/>

    </div>
  )
}
