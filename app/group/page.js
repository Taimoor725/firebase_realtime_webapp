import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='flex flex-col relative w-[80%] h-full z-0'>
        {/* <div>Respected Mambers of Egale Group</div> */}

        <div className='absolute flex flex-col bottom-10 -right-[20rem] justify-center items-center'>
            <div>Khasosi Tavun</div>
            <Image src={'/hasseb.jpg'} height={150}  alt="abdullah" width={150} className=' object-cover w-20 h-20 rounded-full'/>

        </div>
    <div className='grid grid-cols-2 ml-[20%] gap-10 p-20 space-x-28 w-full h-full'>
        <div className='flex flex-col items-center justify-center mt-10'>
            <Image src={'/WhatsApp Image 2024-12-18 at 10.16.18_778533f9.jpg'} height={600} width={600} className='w-[350px] h-[350px] rounded-full object-cover'/>
            <div className=' font-bold text-2xl'>Hathim Abu Hathim</div>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <Image src={'/hammad.jpg'} height={600} alt="abdullah" width={600} className='w-[350px] h-[350px] rounded-full object-cover'/>
            <div className=' font-bold text-2xl'>Hammad Minhas</div>
        </div>

        <div className='flex flex-col items-center justify-center overflow-hidden'>
            <Image src={'/abdullah.jpg'} height={600} width={600}  alt="abdullah" className='w-[350px] h-[350px] rounded-full object-contain  '/>
            <div className=' font-bold text-2xl'>Abdullah Awan</div>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <Image src={'/taimoor.jpg'} height={600} width={600} alt="abdullah" className='w-[350px] h-[350px] rounded-full object-cover'/>
            <div className=' font-bold text-2xl'>Taimoor Tanveer</div>
        </div>
    </div>
    </div>
  )
}

export default page
