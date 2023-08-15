import React from 'react';
import { Slider } from '../Functions/Slider';





const Nytro = () => {

  const slides = [
    {
        url: 'https://images.squarespace-cdn.com/content/v1/5f8cc5b9e7e527091f80192e/1628471458095-GP5S8DQPEQRPB4I8SWDZ/20210701_225330.jpg?format=2500w',
    },
    {
        url: 'https://images.squarespace-cdn.com/content/v1/5f8cc5b9e7e527091f80192e/1628471536508-JI8RT3QKPXHURE2RIJZT/20210730_173656.jpg?format=2500w',
    },
    {
        url: 'https://images.squarespace-cdn.com/content/v1/5f8cc5b9e7e527091f80192e/1628471629253-H2080DBRGWI9FORI70QZ/20210730_173708.jpg?format=2500w',
    },
    {
        url: 'https://images.squarespace-cdn.com/content/v1/5f8cc5b9e7e527091f80192e/1628471289477-8D3G9Z4S8QAT977C6LV3/20210703_181155.jpg?format=2500w',
    },
    {
      url: 'https://images.squarespace-cdn.com/content/v1/5f8cc5b9e7e527091f80192e/1603494114399-SYTB6N681XDEM29YNZDT/120361155_642172329836337_6262842966311712711_n.png?format=2500w',
    },
    {
      url: 'https://images.squarespace-cdn.com/content/v1/5f8cc5b9e7e527091f80192e/1612715708293-IRJ19QHT7HVMO3YNUFNL/120341401_926641377862883_6339944916801618806_n.png?format=2500w',
    },
    {
      url: 'https://images.squarespace-cdn.com/content/v1/5f8cc5b9e7e527091f80192e/1612715760721-0I4TS41IZSN8T0ZD6YBO/top.dimensions.png?format=2500w',
    },

    {
      url: 'https://images.squarespace-cdn.com/content/v1/5f8cc5b9e7e527091f80192e/1612715776365-QHTDJ7QJ8ZNXOQ92IFXH/front.dimensions.png?format=2500w',
    },
    
  ];

  return (
    <div name='nytro' className='flex items-center justify-center text-center py-36 h-full w-full bg-slate-600'>
      <div className='max-w-[1000px]'>
          <h1 className='px-4 text-5xl text-gray-300'>The <span className=' text-red-600 font-extrabold'>Nytro</span> Gearbox</h1>
          <div>{Slider(slides)}</div>
          <div className='px-4 pt-4 text-gray-300 text-lg'>
          This gearbox will fit all of the 3-cylinder Yamaha and Arctic Cat snowmobile engines. <br /> Three gear ratios will be available: 4.01:1, 3.45:1, and 2.85:1. <br /> Currently in stock and ready to ship Pricing<span className=' font-extrabold'>$4500</span>
          </div>
      </div>
        
    </div>
  )
}

export default Nytro;
