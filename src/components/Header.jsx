import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import Category from './Category';

function Header() {
  const [dropdown , setDropDown] = useState(true);
  const [filterQuery , setFilterQuery] = useState(false);
  const handleDropDown = () => {
    setDropDown(prev => !prev);
  }
  const handleFilter = () => {
    setFilterQuery(prev => !prev);
  }
  return (
    <div className='lg:px-2'>
      <nav className='flex justify-between items-center p-3 fixed lg:static w-full shadow-lg bg-white'>
        <p className='text-xl'>GetNews</p>
        {dropdown && <ul className='flex gap-4 items-center lg:flex-row flex-col fixed left-0 top-[7%] p-3 bg-[white] w-full justify-center lg:justify-end lg:p-0 lg:static'>
            <li><SearchBar/></li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><div className='relative cursor-pointer' onClick={handleFilter}>
             Category
             {filterQuery && 
             <Category/>
             }
            </div>
            </li>
        </ul>}
        <div className='lg:hidden px-3 cursor-pointer' onClick={handleDropDown}>
          Menu
        </div>
      </nav>
    </div>
  )
}

export default Header
