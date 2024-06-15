'use client'
import * as React from 'react';
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { SlCalender } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from 'next/navigation';

export const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const router = useRouter();
    const classActive = "flex items-center pb-2 space-x-4 text-[#FFAB2E] px-2 border-b-2 border-[#FFAB2E]";
    const classUnActive = "flex items-center pb-2 space-x-4 text-black transition-all px-2 duration-300 hover:text-[#FFAB2E] hover:border-b-2 hover:border-[#FFAB2E]";
    const [showContentInner, setShowContentInner] = useState(false);
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className="relative">
            <div className='bg-white h-[70px] p-4 w-full flex justify-between items-center shadow-md z-50 relative'>
                <div>
                    <Image height={40} width={200} src='/images/logo.png' alt='Logo' />
                </div>
                <div className='lg:hidden'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-black focus:outline-none'>
                        {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
                    </button>
                </div>
                <div ref={menuRef} className={`lg:flex lg:flex-row ${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center absolute lg:static top-[59px] left-0 w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0`}>
                    <ul className='flex-col lg:flex-row flex space-y-4 lg:space-y-0 lg:space-x-6 cursor-pointer list-style-none text-gray-600 w-full lg:w-auto'>
                        <Link href="/"><li className={`${pathname === '/' ? classActive : classUnActive}`}>Home</li></Link>
                        <Link href="/about"><li className={`${pathname === '/about' ? classActive : classUnActive}`}>About us</li></Link>
                        <Link href="/technologypartner"><li className={`${pathname === '/technologypartner' ? classActive : classUnActive}`}>Technology Partner</li></Link>
                        <Link href="/solutionandservices"><li className={`${pathname === '/solutionandservices' ? classActive : classUnActive}`}>Solution And Services <span><IoIosArrowDown /></span></li></Link>
                        <button onClick={() => {
                            setShowContentInner(!showContentInner);
                            console.log()
                        }
                        }><li className={`${pathname === '/contenthub' ? classActive : classUnActive}`}>Content Hub<span><IoIosArrowDown /></span></li></button>
                        <Link href="/carrers"><li className={`${pathname === '/carrers' ? classActive : classUnActive}`}>Carrers</li></Link>
                        <Link href="/contactus"><li className={`${pathname === '/contactus' ? classActive : classUnActive}`}>Contact Us</li></Link>
                    </ul>
                </div>


            </div>
            <div className={!showContentInner ? "hidden" : "bg-white z-[100] text-black w-fit absolute top-10 shadow-lg right-40 rounded-lg p-4"}>
                <ul className="space-y-4">
                    <li onClick={
                        () => {
                            router.push("/blogs");
                            setShowContentInner(false);
                        }
                    } className="cursor-pointer flex items-center text-lg space-x-4"><div className="flex items-center justify-between w-full space-x-4"><span><Image src="/images/icons/blog.png" height={40} width={40}></Image></span><p className="hover:border-b hover:text-[#FFAB2E] border-[#FFAB2E]">Blogs</p><span><IoIosArrowForward style={{ fontSize: '20px', color: "#FFAB2E", fontWeight: "bold" }}></IoIosArrowForward></span></div></li>
                    <li onClick={
                        () => {
                            router.push("/news");
                            setShowContentInner(false);
                        }
                    }  className="cursor-pointer flex items-center text-lg space-x-4"><div className="flex items-center justify-between w-full space-x-4"><span><Image src="/images/icons/news.png" height={40} width={40}></Image></span><p className="hover:border-b hover:text-[#FFAB2E] border-[#FFAB2E]">News</p><span><IoIosArrowForward style={{ fontSize: '20px', color: "#FFAB2E", fontWeight: "bold" }}></IoIosArrowForward></span></div></li>
                    <li onClick={
                        () => {
                            router.push("/events");
                            setShowContentInner(false);
                        }
                    }  className="cursor-pointer flex items-center text-lg space-x-4"><div className="flex items-center justify-between w-full space-x-4"><span><Image src="/images/icons/calender.png" height={40} width={40}></Image></span><p className="hover:border-b hover:text-[#FFAB2E] border-[#FFAB2E]">Events</p><span><IoIosArrowForward style={{ fontSize: '20px', color: "#FFAB2E", fontWeight: "bold" }}></IoIosArrowForward></span></div></li>
                    <li onClick={
                        () => {
                            router.push("/casestudy");
                            setShowContentInner(false);
                        }
                    }   className="cursor-pointer flex items-center text-lg space-x-4"><div className="flex items-center justify-between w-full space-x-4"><span><Image src="/images/icons/casestudy.png" height={40} width={40}></Image></span><p className="hover:border-b hover:text-[#FFAB2E] border-[#FFAB2E]">Case Study</p><span><IoIosArrowForward style={{ fontSize: '20px', color: "#FFAB2E", fontWeight: "bold" }}></IoIosArrowForward></span></div></li>
                </ul>
            </div>
        </div>
    );
}
