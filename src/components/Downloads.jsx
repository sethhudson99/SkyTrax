import React from 'react'

const Downloads = () => {
  return (
    <div name='downloads' className='flex items-center justify-center text-center py-36 h-full w-full bg-slate-600'>
        <div className='m-w-[1000px]'>
            <h1 className='text-5xl py-16 text-gray-300'>Downloads</h1>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 px-12'>
                
                <div className='flex flex-col  items-center text-xl text-gray-300 p-4'>
                    <h1 className=' underline text-3xl pb-4'>3D CAD Files</h1>
                    <a href="https://www.dropbox.com/s/82ni05m3mzh0tx4/SkyTrax-Apex%20dummy%20prop%20shaft.STL?dl=0" className='p-4 bg-red-600 m-2 rounded-2xl shadow-2xl shadow-black hover:bg-gray-500'>APEX 3D PRINTABLE DUMMY PROP SHAFT</a>
                    <a href="https://www.dropbox.com/s/fjhwtwzhu4ljtoj/Apex%20Scan%20w%20gearbox.stl?dl=0" className='p-4 bg-red-600 m-2 rounded-2xl shadow-2xl shadow-black hover:bg-gray-500'>APEX ENGINE 3D SCAN</a>
                    <a href="https://www.dropbox.com/s/2ska6fsti6hzkcz/Nytro.%20prop.shaft.part.A.STL?dl=0" className='p-4 bg-red-600 m-2 rounded-2xl shadow-2xl shadow-black hover:bg-gray-500'>NYTRO 3D PRINTABLE DUMMY PROP SHAFT PART A</a>
                    <a href="https://www.dropbox.com/s/05dywkrl3cd5och/Nytro.standoffs..part.B.R1.STL?dl=0" className='p-4 bg-red-600 m-2 rounded-2xl shadow-2xl shadow-black hover:bg-gray-500'>NYTRO 3D PRINTABLE DUMMY PROP SHAFT PART B (REV.1)</a>
                    <a href="https://www.dropbox.com/s/93b4dsbglrsfof6/3CYL%20Motor%20and%20Gearboxand%20enginemount..SLDASM?dl=0" className='p-4 bg-red-600 m-2 rounded-2xl shadow-2xl shadow-black hover:bg-gray-500'>NYTRO GEARBOX,ENGINE, RV9 MOUNT <br />(SOLIDWORKS ASSEMBLY)</a>
                </div>

                <div className='flex flex-col  items-center text-xl text-gray-300 p-4'>
                    <h1 className=' underline text-3xl pb-4'>Printable Documents</h1>
                    <a href="https://www.dropbox.com/s/8mj64ipob4cs12y/Apex%20Cover%20Assembly-explode%20with%20%20BOM_3.PDF?dl=0" className='p-4 bg-red-600 m-2 rounded-2xl shadow-2xl shadow-black hover:bg-gray-500'>APEX EXPLODED VIEW AND PARTS DIAGRAM</a>
                    <a href="https://www.dropbox.com/s/hqsi68l9yncaq66/Installing%20the%20SkyTrax%20gearbox%2Crev6.docx?dl=0" className='p-4 bg-red-600 m-2 rounded-2xl shadow-2xl shadow-black hover:bg-gray-500'>APEX INSTALLATION INSTRUCTIONS</a>
                    <a href="https://www.dropbox.com/s/jn2xrsuknu3t12z/3CYL%20Prop%20Shaft.pdf?dl=0" className='p-4 bg-red-600 m-2 rounded-2xl shadow-2xl shadow-black hover:bg-gray-500'>APEX AND NYTRO PROP FLANGE DIMENSIONS</a>
                    <a href="https://www.dropbox.com/s/nofnmdsukz36gui/3CYL%20BOM%20EXPLODE%20A.pdf?dl=0" className='p-4 bg-red-600 m-2 rounded-2xl shadow-2xl shadow-black hover:bg-gray-500'>NYTRO GEARBOX EXPLODED VIEW AND PARTS DIAGRAM</a>
                    <a href="https://www.dropbox.com/s/fea10117k9ma4ww/SKYTRAX%20%20NYTRO%20Gearbox%20installation%20instructions.Rev11.docx?dl=0" className='p-4 bg-red-600 m-2 rounded-2xl shadow-2xl shadow-black hover:bg-gray-500'>NYTRO INSTALLATION INSTRUCTIONS</a>
                    <a href="https://www.dropbox.com/s/510sfwpvustushm/APEX%20Yamaha%20Shop%20Manual.pdf?dl=0" className='p-4 bg-red-600 m-2 rounded-2xl shadow-2xl shadow-black hover:bg-gray-500'>APEX FACTORY SERVICE MANUAL</a>
                    <a href="https://www.dropbox.com/s/2eyqk37dg9fhjnq/phazer%20gearbox%20install%20instructions%20rev.2.pdf?dl=0" className='p-4 bg-red-600 m-2 rounded-2xl shadow-2xl shadow-black hover:bg-gray-500'>PHAZER INSTALLATION INSTRUCTIONS</a>
                </div>

                

            </div>
        </div>
    </div>
  )
}

export default Downloads