"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

function SideBar() {
    const [isSensorDropdownOpen, setIsSensorDropdownOpen] = useState(false);

    const sensorOptions = [
        'ADXL1', 'ADXL2', 'ADXL3', 'ADXL4',
        'PIZO1', 'PIZO2', 'PIZO3', 'PIZO4', 'PIZO5', 'PIZO6', 'PIZO7'
    ];

    const toggleDropdown = () => {
        setIsSensorDropdownOpen(!isSensorDropdownOpen);
    };

    return (
        <div className='w-[20%] h-screen bg-[#254c74] fixed overflow-y-auto flex flex-col'>
            {/* Logo Section */}
            <div className='w-full h-[40%] flex justify-center items-center'>
                <Image src={"/logo/uet-lahore-seeklogo.svg"} alt='image' height={200} width={200} className='object-cover w-60 h-60'/>
            </div>
            <div className='w-full h-[0.5px] bg-[gold]'></div>

            {/* Sidebar Buttons */}
            <div className='w-full h-full flex flex-col mt-10 items-center text-[#00274D] gap-5'>
            <Link href={'/home'} className='w-2/3'>
                <button className='bg-[gold] w-full p-2 font-semibold rounded-xl text-xl'>
                    Home
                </button>
                </Link>

                <button className='bg-[gold] w-2/3 p-2 font-semibold rounded-xl text-xl'>
                    Group Member
                </button>

                {/* <button className='bg-[gold] w-2/3 p-2 font-semibold rounded-xl text-xl'>
                    Specimen
                </button> */}

                {/* Sensor Readings Dropdown */}
                {/* <div className='w-2/3'>
                    <button
                        className='bg-[gold] w-full p-2 font-semibold rounded-xl text-xl flex justify-center gap-3 items-center'
                        onClick={toggleDropdown}
                    >
                        Sensors Readings
                        <span className='text-2xl transition-all duration-200'>{isSensorDropdownOpen ? <Image src={'/icons/dropdown.svg'} height={60} width={60} alt='image' className='object-cover w-6 h-6 -rotate-180 '/> : <Image src={'/icons/dropdown.svg'} height={60} width={60} alt='image' className='object-cover w-6 h-6'/>}</span>
                    </button>

                    {isSensorDropdownOpen && (
                        <div className='mt-2 bg-white rounded-xl shadow-lg'>
                            {sensorOptions.map((option, index) => (
                                <div
                                    key={index}
                                    className='w-full p-2 hover:bg-[#F1F1F1] text-[#00274D] text-center font-medium cursor-pointer'
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div> */}
                <Link href={'/readings'} className='bg-[gold] w-2/3 p-2 font-semibold rounded-xl text-xl flex justify-center items-center cursor-pointer'>
                    Sensors Readings
                </Link>

                <Link href={'/plot'} className='bg-[gold] w-2/3 p-2 font-semibold rounded-xl text-xl flex justify-center items-center cursor-pointer'>
                    Plots
                </Link>

                <button className='bg-[gold] w-2/3 p-2 font-semibold rounded-xl text-xl'>
                    Setup
                </button>
            </div>
        </div>
    )
}

export default SideBar;
