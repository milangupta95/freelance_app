import * as React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';

export const Navbar = () => {
    const classActive = "flex items-center pb-2 space-x-4 text-[#FFAB2E] px-2 border-b-2 border-[#FFAB2E]";
    const classUnActive = "flex items-center pb-2 space-x-4 transition-all px-2 duration-300 hover:text-[#FFAB2E] hover:border-b-2 hover:border-[#FFAB2E]";
  return (
    <div className='bg-white h-[70px] p-4 w-full flex justify-between items-center'>
        <div>
            <Image height={40} width={200} src='/images/logo.png'/>
        </div>
        <div>
            <ul className='flex space-x-6 *:cursor-pointer list-style-none text-gray-600'>
                <li className={`${classActive}`}>Home</li>
                <li className={`${classUnActive}`}>About us</li>
                <li className={`${classUnActive}`}>Solution And Services <span><IoIosArrowDown></IoIosArrowDown></span> 
                </li>
                <li className={`${classUnActive}`}>Content Hub<span><IoIosArrowDown/></span></li>
                <li className={`${classUnActive}`}>Carrers</li>
                <li className={`${classUnActive}`}>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}
