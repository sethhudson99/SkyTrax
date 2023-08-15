import React from 'react'

const FAQ = () => {
  return (
    <div name='faq' className='flex items-center justify-center text-center py-36 h-full w-full bg-slate-600'>
        <div className='max-w-[1000px] '>

            <span className='text-5xl py-16 text-gray-300'>FAQs</span>

            <div className='text-xl md:text-2xl px-4 py-16 '>
               
                <div className=' py-6 border-b-2'>
                    <span className=' text-gray-300'><span className=' text-red-600'>Q:</span> Has SkyTrax considered making gearboxes for other engines?</span><br />
                    <span className=' text-red-600'><span className=' text-gray-300'>A:</span> We are always looking at alternative engines to build drives. We have found that modern powersports engines (non-marine) seem to give the best power-to-weight ratio.</span>
                </div>

                <div className=' py-6 border-b-2'>
                    <span className=' text-gray-300'><span className=' text-red-600'>Q:</span> What is the time between overhauls on your gearboxes?</span><br />
                    <span className=' text-red-600'><span className=' text-gray-300'>A:</span> Currently we cannot make a TBO specification, but the current wear rates indicate the gearboxes will have a higher TBO than the engines.</span>
                </div>

                <div className=' py-6 border-b-2'>
                    <span className=' text-gray-300'><span className=' text-red-600'>Q:</span> Can you build a gearbox for a motorcycle engine?</span><br />
                    <span className=' text-red-600'><span className=' text-gray-300'>A:</span> Most motorcycle engines have a attached transmission. Although motorcycle engines are plentiful we feel the complexity and weight increase greatly outweighs their availability.</span>
                </div>

                

            
            </div>
        </div>

    </div>
  )
}

export default FAQ