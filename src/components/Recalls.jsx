import React from 'react'

const Recalls = () => {
  return (
    <div name='recalls' className='flex items-center justify-center text-center py-36 h-full w-full bg-slate-600'>
        <div className='m-w-[1000px]'>
            <h1 className='text-5xl py-16 text-gray-300'>Product Service Bulletins and Recalls</h1>
            
            <div className='flex flex-col  items-center text-xl text-gray-300 p-4'>
                    <a href="https://www.dropbox.com/s/1cxs3wxwou8d7tw/Apex.docx?dl=0" className='p-4 bg-red-600 m-2 rounded-2xl shadow-2xl shadow-black hover:bg-gray-500'>APEX GEARBOX</a>
                    <a href="/" className='p-4 bg-red-600 m-2 rounded-2xl shadow-2xl shadow-black hover:bg-gray-500'>PHAZER GEARBOX</a>
                    <a href="/" className='p-4 bg-red-600 m-2 rounded-2xl shadow-2xl shadow-black hover:bg-gray-500'>NYTRO GEARBOX</a>
            </div>

               

                

            
        </div>
    </div>
  )
}

export default Recalls