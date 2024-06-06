import * as React from 'react';
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Image from 'next/image';
import { SocialIcon } from './ui/SocialIcon';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className='w-full bg-white'>
            <div className='h-[20px] bg-white'></div>
            <div className='bg-[#343A40]'>
                <div className='space-x-10 py-8 border-b p-4 border-white flex justify-center'>
                    <div>
                        <Image src='/images/logo2.png' height={40} width={150} />
                    </div>


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

                <div className='h-full bg-[#343A40] p-4 flex items-center justify-between'>
                    <p>© 2024 Intelli Vectra Technologies Pvt. Ltd. All rights reserved.</p>
                    <ul className='flex list-style-none items-center space-x-4'>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                    </ul>
                    <div className='flex items-center space-x-4 text-white'>
                        <SocialIcon>
                            <FaLinkedin size={20}/>
                        </SocialIcon>
                        <SocialIcon>
                            <FaFacebook size={20}/>
                        </SocialIcon>
                        <SocialIcon>
                            <FaTwitter size={20}/>
                        </SocialIcon>
                    </div>
                </div>
            </div>
        </div>
    )
}
