import * as React from 'react';
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";

export const ContactNavbar = () => {
  return (
    <div className='bg-[#D9D9D9] px-2 text-[16px] font-semibold text-[#000000] flex items-center justify-end w-full h-[59px]'>
        <div className='flex space-x-10'>
            <div className='flex items-center space-x-2'>
                <MdOutlineLocalPhone fontSize={24}/>
                <span>+97145667357</span>
            </div>
            <div className='flex items-center space-x-2'>
                <CiMail fontSize={24}/>
                <span>info@intellivectra.com</span>
            </div>
        </div>
    </div>
  )
}
