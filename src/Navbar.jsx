import React from 'react'
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='w-full p-5 flex justify-center'>
      <nav className='p-5 bg-white w-[70%] rounded-xl flex justify-around'>
          <h1 className='text-black font-bold text-[2rem]'>GitHub User Search</h1>
          <form action="" className='w-[50%] flex items-center relative'>
            <input type="text" className='p-2 w-[100%] bg-slate-300 rounded-3xl focus:outline-none px-4' placeholder='Search username'/>
            <CiSearch  className='text-[2rem] absolute right-4'/>
          </form>
        </nav>      
    </div>
  )
}

export default Navbar;
