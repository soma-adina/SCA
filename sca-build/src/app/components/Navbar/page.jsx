import React from 'react'
import AfterNav from './AfterNav'
import MainNav from './MainNav'

export default function Navbar() {
  return (
    <div className='w-full bg-rose-300'>
        Navbar
        <MainNav/>
        <AfterNav/>

    </div>
  )
}
