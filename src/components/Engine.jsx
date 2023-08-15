import React from 'react'

const Engine = () => {
  return (
    <div name='engine' className='flex items-center justify-center text-center pb-36 h-full w-full bg-slate-600'>
        <div className='max-w-[1000px]'>
            <div>
                <div className='py-16'>
                <h1 className='px-4 text-5xl text-gray-300'>Engine Suppliers</h1>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 text-2xl text-gray-300'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1>Spa City Sled Parts</h1>
                        <h2 className='mb-9'>Jim Hensel: (607) 329-8676</h2>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h1>Barn of Parts Sled Salvage</h1>
                        <h2>Phone: (717)-821-9639</h2>
                        <a href="https://www.barnofparts.com/" className=' bg-red-600 px-4 rounded-lg hover:bg-slate-500 shadow-2xl mt-3 shadow-black'>Website</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Engine