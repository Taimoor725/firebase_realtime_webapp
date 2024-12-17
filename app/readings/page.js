import Sensorvalues from '@/components/SensorReadings'
import SideBar from '@/components/SideBar'
import React from 'react'

function page() {
  return (
    <div className='flex w-screen h-screen ml-[20%]'>
    {/* <div className='w'> */}
        {/* <SideBar/> */}
    {/* </div> */}
        <div className='w-[80%]'>
        <Sensorvalues/>
        </div>
    </div>
  )
}

export default page
