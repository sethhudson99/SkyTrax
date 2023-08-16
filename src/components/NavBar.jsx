import React, { useState } from 'react'
import { FaBars, FaTimes, FaFacebookSquare } from 'react-icons/fa'
import Logo from '../images/SkyTrax Images/Logo1.png'
import { Link } from 'react-scroll'



const NavBar = () => {

const [nav,setNav] = useState(false)
const handleClick = () => setNav(!nav)

  return (
  <div className=' z-10 text-gray-300 fixed w-full h-[80px] flex justify-between items-center bg-slate-600  '>
    <div>
        <img src={Logo} alt="Logo" style={{width: '120px'}} />
    </div>
      
      {/* Menu */}
    
    <ul className='hidden md:flex items-center text-xl px-4'>
      <li>
        <Link className=' cursor-pointer' to="components" smooth={true} duration={500}>
          Components
        </Link>
      </li>
      <li>
        <Link className=' cursor-pointer' to="apex" smooth={true} duration={500}>
          Apex Gearbox
        </Link>
      </li>
      <li>
        <Link className=' cursor-pointer' to="nytro" smooth={true} duration={500}>
           Nytro Gearbox
        </Link>
      </li>
      <li>
        <Link className=' cursor-pointer' to="accessories" smooth={true} duration={500}>
          Accessories
        </Link>
      </li>
    </ul>
  

    {/* Bars Menu */}
    <div onClick={handleClick} className='md:hidden z-10 px-4 cursor-pointer'>
      { !nav ? <FaBars /> : <FaTimes /> }
    </div>

    {/* Mobile Menu */}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 flex flex-col h-screen w-full bg-slate-600 justify-center items-center'}>
      <li className='py-3 cursor-pointer text-xl'>
        <Link className=' cursor-pointer' to="components" smooth={true} duration={500} onClick={handleClick}>
          Components
        </Link>
      </li>
      <li className='py-3 cursor-pointer text-xl'>
        <Link className=' cursor-pointer' to="apex" smooth={true} duration={500} onClick={handleClick}>
          Apex Gearbox
        </Link>
      </li>
      <li className='py-3 cursor-pointer text-xl'>
        <Link className=' cursor-pointer' to="nytro" smooth={true} duration={500} onClick={handleClick}>
          Nytro Gearbox
        </Link>
      </li>
      <li className='py-3 cursor-pointer text-xl'>
        <Link className=' cursor-pointer' to="accessories" smooth={true} duration={500} onClick={handleClick}>
          Accessories
        </Link>
      </li>
      <li className='py-3 cursor-pointer text-xl'>
        <Link className=' cursor-pointer' to="engine" smooth={true} duration={500} onClick={handleClick}>
          Engine Suppliers
        </Link>
      </li>
      <li className='py-3 cursor-pointer text-xl'>
        <Link className=' cursor-pointer' to="downloads" smooth={true} duration={500} onClick={handleClick}>
          Downloads
        </Link>
      </li>
      <li className='py-3 cursor-pointer text-xl'>
        <Link className=' cursor-pointer' to="faq" smooth={true} duration={500} onClick={handleClick}>
          FAQs
        </Link>
      </li>
      <li className='py-3 cursor-pointer text-xl'>
        <Link className=' cursor-pointer' to="recalls" smooth={true} duration={500} onClick={handleClick}>
          Product Service Bulletins and Recalls
        </Link>
      </li>
      <li className='py-3 cursor-pointer text-xl'>
        <Link className=' cursor-pointer' to="contact" smooth={true} duration={500} onClick={handleClick}>
          Contact
        </Link>
      </li>
    </ul>

    {/* Social Icon Medium+ Screens*/}
    <div className={nav ? 'hidden' : 'hidden md:flex fixed top-[50%] left-0 bg-blue-600 px-4 ml-[-130px] hover:ml-0 hover duration-700'}>
      <a className='w-[160px] h-[60px] flex justify-between items-center' href='https://www.facebook.com/teal.jenkins.9'>
        FaceBook <FaFacebookSquare size={30} />
      </a>
    </div>

    {/*Social Icon Small Screen*/}
    <div className={nav ? 'hidden' : ' fixed left-[75%] md:hidden cursor-pointer bg-blue-600 rounded-md'}>
      <a href="https://www.facebook.com/teal.jenkins.9">
        <FaFacebookSquare size={30}/>
      </a>
    </div>

  </div>
  )
}

export default NavBar