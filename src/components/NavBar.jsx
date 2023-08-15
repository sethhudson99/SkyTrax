import React, { useState } from 'react'
import { FaBars, FaTimes, FaFacebookSquare } from 'react-icons/fa'
import Logo from '../images/SkyTrax Images/Logo1.png'



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
      <li>Components</li>
      <li>Apex Gearbox</li>
      <li>Nytro Gearbox</li>
      <li>Accessories</li>
    </ul>
  

    {/* Bars Menu */}
    <div onClick={handleClick} className='md:hidden z-10 px-4 cursor-pointer'>
      { !nav ? <FaBars /> : <FaTimes /> }
    </div>

    {/* Mobile Menu */}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 flex flex-col h-screen w-full bg-slate-600 justify-center items-center'}>
      <li className='py-3 cursor-pointer text-xl'>Components</li>
      <li className='py-3 cursor-pointer text-xl'>Apex Gearbox</li>
      <li className='py-3 cursor-pointer text-xl'>Nytro Gearbox</li>
      <li className='py-3 cursor-pointer text-xl'>Accessories</li>
      <li className='py-3 cursor-pointer text-xl'>Engine Suppliers</li>
      <li className='py-3 cursor-pointer text-xl'>Downloads</li>
      <li className='py-3 cursor-pointer text-xl'>Printable Documents</li>
      <li className='py-3 cursor-pointer text-xl'>FAQs</li>
      <li className='py-3 cursor-pointer text-xl'>Service Bulletins/Recalls</li>
      <li className='py-3 cursor-pointer text-xl'>Contact</li>
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