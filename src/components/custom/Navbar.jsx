import React from 'react'
import { NAVITEMS } from '../../data/navLinks'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' max-w-7xl pt-3 mx-auto bg-transparent '>
       <ul className=' px-12 flex gap-1 md:gap-2 md:py-2  items-center justify-center '>
          {
            NAVITEMS.map( (item,index) => (
                <Link
                 to={item.path}
                 key={index}
                 className='py-2 text-white font-semibold text-md  md:text-xl cursor-pointer group '>
                   <li 
                   className=' flex items-center '>
                      <span className=' pr-1 border-transparent border-b-[3px] group-hover:border-purple-950  uppercase'>
                        {item.title}
                      </span>
                      {item.title === "Contact" ? "" : (<span className=' mb-1'>/</span>)}
                   </li>
                   
                </Link>
            ))
          }
       </ul>
    </div>
  )
}

export default Navbar