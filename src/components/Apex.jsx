import React from 'react';
import { Slider } from '../Functions/Slider';





const Apex = () => {

  const slides = [
    {
      url: 'https://images.squarespace-cdn.com/content/v1/5f8cc5b9e7e527091f80192e/1603489359954-1GZ8C4281QPGW6TQYHU7/19972.jpeg?format=1500w',
    },
    {
      url: 'https://images.squarespace-cdn.com/content/v1/5f8cc5b9e7e527091f80192e/1603489359200-U4VR3231JWXXPS0Y1W2W/35258.jpeg?format=1500w',
    },
    {
      url: 'https://images.squarespace-cdn.com/content/v1/5f8cc5b9e7e527091f80192e/1603489361910-NK9LHQJB5ECGOV39P6I3/46192.jpeg?format=2500w',
    },

    {
      url: 'https://images.squarespace-cdn.com/content/v1/5f8cc5b9e7e527091f80192e/1603489361751-0NYUNG63U72IVMTNA4EX/91305605_2864020236999987_2387845325147602944_n.jpg?format=1000w',
    },
    {
      url: 'https://images.squarespace-cdn.com/content/v1/5f8cc5b9e7e527091f80192e/1603489364168-R73TTTTLV7O3ZLDOFZCC/120188067_10225418479199029_2927499771410780266_o.jpg?format=1000w',
    },
    {
      url: 'https://images.squarespace-cdn.com/content/v1/5f8cc5b9e7e527091f80192e/1603489362823-YYF8JO1VY2FN8TYLUTN2/Apex.black.jpg?format=1000w',
    },
    {
      url: 'https://images.squarespace-cdn.com/content/v1/5f8cc5b9e7e527091f80192e/1603489363694-D4YIX79WEYKZ0SVZKPT4/Apex.silver.jpg?format=1000w',
    },
  ];

  
  return (
    <div name='apex' className='flex items-center justify-center text-center md:pt-72 pb-36 h-full w-full bg-slate-600'>
      <div className='max-w-[1000px]'>
          <h1 className='px-4 text-5xl text-gray-300'>The <span className=' text-red-600 font-extrabold'>APEX</span> Gearbox<br></br>(150HP-300HP)</h1>
          <div>{Slider(slides)}</div>
          <div className='px-4 pt-4 text-gray-300 text-lg'>
          This gearbox is purpose-built specifically for the Yamaha snowmobile engine found in all 4-cylinder models from 2006-2018. Most commonly found on the Yamaha Apex snowmobile. This gearbox features an internal sprag clutch and 3.11:1 gear ratio. The engine has a geared reduction of 1.23:1 so the combined reduction ratio from crankshaft to prop is 3.83:1. The gearbox has been tested intermittently to over 300hp. The overall length of this engine gearbox combo is 25 inches from the prop flange to the stator cover. The flange mounting has a 47mm centering boss and two bolting patterns. They are the SAE 1 which is 4.375” bolt circle with .625” diameter 3/8"-24 threaded drive lugs and the common 4” bolt circle with 13mm diameter M8-1.25 threaded drive lugs. The gearbox includes one set of drive lugs of your choice and a complete hardware kit to mount the gearbox. Current Pricing <span className=' font-extrabold'>$3850</span>
          </div>
      </div>
        
    </div>
  )
}

export default Apex
