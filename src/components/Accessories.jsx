import React from 'react'
import Acc1 from '../images/SkyTrax Images/Acc1.jpeg'
import Acc2 from '../images/SkyTrax Images/Acc2.jpeg'
import Acc3 from '../images/SkyTrax Images/Acc3.jpeg'
import Acc4 from '../images/SkyTrax Images/Acc4.jpeg'


const Accessories = () => {
  return (
    <div name='accessories' className='flex items-center justify-center text-center py-36 h-full w-full bg-slate-600'>
      <div className='max-w-[1000px]'>
        <div className='py-16'>
          <h1 className='px-4 text-5xl text-gray-300'>Accessories</h1>
        </div>

        <div className='grid lg:grid-cols-2 max-w-[1000px] gap-8 px-4 '>
          <div style={{backgroundImage: `url(${Acc1})`}} className='group w-[400px] h-[400px] bg-contain shadow-2xl'>
            <div className='opacity-0 group-hover:opacity-100 text-gray-300 text-2xl h-full w-full flex items-center justify-center bg-gradient-to-b from-gray-400 to bg-red-600 '>
              <span>3Cyl engine airbox. must use stock inlet boots not included. $150 each while they last.</span>
            </div>
          </div>

          <div style={{backgroundImage: `url(${Acc2})`}} className='group w-[400px] h-[400px] bg-contain shadow-2xl'>
            <div className='opacity-0 group-hover:opacity-100 text-gray-300 text-2xl h-full w-full flex items-center justify-center bg-gradient-to-b from-gray-400 to bg-red-600 '>
              <span>Sidewinder intake plenum.</span>
            </div>
          </div>
          
          <div style={{backgroundImage: `url(${Acc3})`}} className='group w-[400px] h-[400px] bg-contain shadow-2xl'>
            <div className='opacity-0 group-hover:opacity-100 text-gray-300 text-2xl h-full w-full flex items-center justify-center bg-gradient-to-b from-gray-400 to bg-red-600 '>
              <span>Sidewinder intake plenum.</span>
            </div>
          </div>
          
          <div style={{backgroundImage: `url(${Acc4})`}} className='group w-[400px] h-[400px] bg-contain shadow-2xl'>
            <div className='opacity-0 group-hover:opacity-100 text-gray-300 text-2xl h-full w-full flex items-center justify-center bg-gradient-to-b from-gray-400 to bg-red-600 '>
              <span>3Cyl header $350 while they last.</span>
            </div>
          </div>

          

        </div>
      </div>
    </div>
  )
}

export default Accessories