import * as React from 'react';
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Image from 'next/image';
export const Footer = () => {
    return (
        <div className='w-full py-8 bg-white'>
            <div className='h-[20px] bg-white'></div>
            <div>
                <div className='space-x-10 border-b border-white flex justify-center bg-[#343A40] p-4'>
                    <Image width={120} height={100} src='/images/logo2.png'/>

                    <div className='space-y-2'>
                        <h1 className='text-[#FFAB2E] font-bold'>Company</h1>
                        <ul className='list-style-none space-y-2'>
                            <li>About us</li>
                            <li>Technology Partners</li>
                            <li>Carrers</li>
                            <li>Content Hub</li>
                        </ul>
                    </div>

                    <div className='space-y-2'>
                        <h1 className='text-[#FFAB2E] font-bold'>Solutions and Services</h1>
                        <ul className='list-style-none space-y-2'>
                            <li>Datacenter Design & Optimization</li>
                            <li>Physical Datacenter Design & Layout</li>
                            <li>Cybersecurity Consulting Services</li>
                            <li>SAP Offerings Consulting Services</li>
                        </ul>
                    </div>

                    <div className='space-y-2'>
                        <h1 className='text-[#FFAB2E] font-bold'>&nbsp;</h1>
                        <ul className='list-style-none space-y-2'>
                            <li>AI & RPA Consulting Services</li>
                            <li>Devops Consulting Services</li>
                            <li>Staff Augmentation Services</li>
                            <li>Cloud Consulting Services</li>
                        </ul>
                    </div>

                    <div className='space-y-2'>
                        <h1 className='text-[#FFAB2E] font-bold'>Contact Us</h1>
                        <ul className='list-style-none space-y-2'>
                            <li className='flex space-x-4 items-center'><CiPhone />+91-012-4496-0635</li>
                            <li className='flex space-x-4 items-center'><MdOutlineEmail />info@intellivectra.tech</li>
                            <li className='flex space-x-4'><CiLocationOn />
                                2nd Floor, Plot no. 29,<br />
                                Maruti Industrial Area,<br />
                                Sector-18,Gurugram-<br />
                                122015(Haryana)
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
