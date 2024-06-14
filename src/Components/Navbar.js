'use client'
import * as React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
    const pathname = usePathname();

    console.log('Current path:', pathname);
    const classActive = "flex items-center pb-2 space-x-4 text-[#FFAB2E] px-2 border-b-2 border-[#FFAB2E]";
    const classUnActive = "flex items-center pb-2 space-x-4 text-black transition-all px-2 duration-300 hover:text-[#FFAB2E] hover:border-b-2 hover:border-[#FFAB2E]";
  return (
    <div className='bg-white h-[70px] p-4 w-full flex justify-between items-center'>
        <div>
            <Image height={40} width={200} src='/images/logo.png'/>
        </div>
        <div>
            <ul className='flex space-x-6 *:cursor-pointer list-style-none text-gray-600'>
                <Link href ="/"><li className={`${pathname === '/' ? classActive : classUnActive}`}>Home</li></Link>
                <Link href ="/about"><li className={`${pathname === '/about' ? classActive : classUnActive}`}>About us</li></Link>
                <Link href="/solutionandservices"><li className={`${pathname === '/solutionandservices' ? classActive : classUnActive}`}>Solution And Services <span><IoIosArrowDown></IoIosArrowDown></span> 
                </li></Link>
                <Link href="/contenthub"><li className={`${pathname === '/contenthub' ? classActive : classUnActive}`}>Content Hub<span><IoIosArrowDown/></span></li></Link>
                <Link href="/carrers"><li className={`${pathname === '/carrers' ? classActive : classUnActive}`}>Carrers</li></Link>
                <Link href="/contactus"><li className={`${pathname === '/contactus' ? classActive : classUnActive}`}>Contact Us</li></Link>
            </ul>
        </div>
    </div>
  )
}
