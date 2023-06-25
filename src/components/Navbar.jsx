import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../media/logo.png'
import { Link } from 'react-router-dom';
// import { BrowserRouter as Link, Router, Routes, Route } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 w-screen mx-auto px-20  text-[#00df9a] bg-[url("./1.jpeg")]'>
      <div className='flex flex-row'>
      <img src={logo} className='w-20 h-16'/>
      <h2 className='ml-3 text-2xl font-bold text-[#00df9a]'>WEEKEND<br></br>DISCOVERIES</h2>
      </div>
      <ul className='hidden md:flex'>
        <li className='p-4'><Link to="/">Home</Link></li>
        
        <li className='p-4'><Link to="/about">About</Link></li>
        <li className='p-4'><a href="https://www.instagram.com/athang_yende84/">Contact</a></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
