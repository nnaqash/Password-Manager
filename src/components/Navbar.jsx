import React from 'react'

const Navbar = () => {
  return (
   <nav className='bg-customBlue flex justify-evenly items-center px-4 h-14 text-gray-200'>
    <div className="logo font-bold text-2xl ">Password Manager</div>
        <ul className=''>
            <li className='flex gap-6'>
                <a className='hover:bg-slate-900 rounded hover:text-gray-50 px-4 py-2' href="/">Home</a>
                <a className='hover:bg-slate-900 rounded hover:text-gray-50 px-4 py-2' href="#">About</a>
                <a className='hover:bg-slate-900 rounded hover:text-gray-50 px-4 py-2' href="#">Contact</a>
            </li>
        </ul>
   </nav>
  )
}

export default Navbar
