import React from 'react'
import { Link } from 'react-scroll'


const Footer = () => {
  return (
    
    <div className='hidden md:flex items-center justify-center fixed bottom-0 bg-slate-600 w-full h-[40px] text-gray-300'>
      <ul className='flex items-center justify-between text-sm '>
        <li>
          <Link className=' cursor-pointer' to="engine" smooth={true} duration={500}>
            Engine Suppliers
          </Link></li>
        <li>
          <Link className=' cursor-pointer' to="downloads" smooth={true} duration={500}>
            Downloads
          </Link></li>
        <li>
          <Link className=' cursor-pointer' to="faq" smooth={true} duration={500}>
            FAQs
          </Link></li>
        <li>
          <Link className=' cursor-pointer' to="recalls" smooth={true} duration={500}>
            Service Bulletins/Recalls
          </Link></li>
        <li>
          <Link className=' cursor-pointer' to="contact" smooth={true} duration={500}>
            Contact
          </Link></li>
      </ul>
    </div>
  )
}

export default Footer