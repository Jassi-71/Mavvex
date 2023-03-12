import React, { useState } from 'react'
import Logo from '../../images/main_logo.jpg'
import {Link} from 'react-router-dom';
import Navlinks from './Navlinks';
import Button from '../Button';

const Navbar = () => {
  const [open,setOpen]=useState(false)
  return (
    <nav className='bg-white'>
      <div className='flex items-center font-medium justify-around'>
      <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-16 rounded-lg" />
          <div className='text-3xl md:hidden' onClick={()=>setOpen(!open)}>
            <ion-icon name={`${open ? 'close':'menu'}`} style={{'color':'black'}}></ion-icon>
          </div>
        </div>

        <ul className='md:flex hidden uppercase items-center gap-8 font-Poppins'>
          
          <Navlinks/>
        </ul>

        <div className='md:block hidden'>
          <Button/>
        </div>

        {/*Mobile Nav*/}

        <ul className={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
            duration-500 ${open ? 'left-0' :'left-[-100%]'}`}>
          <Navlinks/>
          <div className='py-5'>
            <Button/>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar