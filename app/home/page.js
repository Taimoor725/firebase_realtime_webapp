import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

function page() {
  return (
    <div className='w-screen h-screen flex'>
        <Image src={'/newImages/title.png'} height={1024} width={1024} className="h-full w-1/2"/>
        <div className='w-1/2 h-full bg-white py-8 px-16 font-semibold text-[120px] relative flex flex-col'>
           <div className='flex text-8xl font-bold pt-14'>
              Structural<br/> Health<br/> Monitoring<br/>System
           </div>
           <div className='h-2 w-3/4 bg-black rounded-full my-10'/>
            <div className='text-4xl absolute top-[35rem] font-light capitalize'>
                machine learning technique (KNN)
            </div>
        </div>
    </div>
  )
}

export default page 
