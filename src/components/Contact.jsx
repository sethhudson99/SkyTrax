import React, { useRef} from 'react'
import emailjs from '@emailjs/browser';



const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ry1jp43', 'template_toup8ny', form.current, 'G2NagnmRTZf4pNhkN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

  return (
    <div name='contact' className='flex items-center justify-center text-center py-36 h-full w-full bg-slate-600'>
        <div className='max-w-[1000px]'>
            
            <span className='text-5xl py-16 text-gray-300'>Contact</span>
        

            <div className=' p-16 md:w-[500px] lg:w-[800px]'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col items-center gap-4'>
                    <input className='p-2 w-full' type="text" placeholder='Name' name='user_name' required/>
                    <input className='p-2 w-full' type="email" placeholder='Email' name='user_email' required/>
                    <input className='p-2 w-full' type="text" placeholder='Subject' name='subject' required />
                    <input className='p-2 w-full' type="text" name="user_number" placeholder='Number (optional)' />
                    <textarea className='p-2 w-full' name="message" cols="30" rows="10" placeholder='Message'></textarea>
                    <button className=' text-gray-300 bg-red-600 rounded-2xl w-[200px]  hover:bg-gray-500'>Submit</button>
                </form>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 text-xl lg:text-2xl max-w-[800px] px-10 text-gray-300'>
                <div className='flex flex-col'>
                    <span className='underline'>Our Office</span>
                    <span>29216 W. Taylor St. Buckeye, AZ, 85396</span>
                </div>

                <div className='flex flex-col'>
                    <span className='underline'>Phone</span>
                    <span>(623) 734-0185</span>
                </div>

            </div>
        
        </div>
    </div>
  )
}

export default Contact