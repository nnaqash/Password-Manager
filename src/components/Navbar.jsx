import React from 'react'

const Navbar = () => {
  return (
   <nav className='bg-customBlue flex justify-between items-center px-4 h-14 text-gray-200'>
    <div className="logo font-bold text-2xl ">Secure Vault</div>
        <div className="logo">
            <img className="w-12 h-12" src="/icons/logo.webp" alt="" />
        </div>
        {/* <ul className=''>
            <li className='flex gap-6'>
                <a className='hover:bg-slate-900 rounded hover:text-gray-50 px-4 py-2' href="/">Home</a>
                <a className='hover:bg-slate-900 rounded hover:text-gray-50 px-4 py-2' href="#">About</a>
                <a className='hover:bg-slate-900 rounded hover:text-gray-50 px-4 py-2' href="#">Contact</a>
            </li>
        </ul>  */}      
        <button className="text-gray-900 my-5 rounded-md flex  bg-cutomBlue justify-between items-center">
            <img src="/icons/github.svg" alt="github logo" className=" invert p-1  w-10" />
            <span className='font-semibold px-2 text-gray-200'>GitHub</span>
        </button>
   </nav>
  )
}

export default Navbar
