import React from 'react'
import ComponentImg from '../images/SkyTrax Images/Components1.jpeg'

const Components = () => {
  return (
    <div name='components' className=' text-gray-300 pt-[80px] md:pt-[60px] bg-slate-600 w-full h-screen flex items-start justify-center '>
      <div className=' max-w-[1200px]'>
          <div>
            <img src={ComponentImg} alt="Components"/>
          </div>
          <div className='px-4 text-center text-2xl'>
          We pride ourselves in designing and developing the highest quality drive components and accessories. 
          </div>
      </div>
          
    </div>
  )
}

export default Components 