'use client'
import * as React from 'react';
import { PageStarter } from '@/Components/PageStarter';
import Image from 'next/image';
import { useState } from 'react';
import { GoArrowRight } from "react-icons/go";

const Page = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [appliedFor,setAppliedFor] = useState("");
    const [coverletter,setCoverLetter] = useState("");
    return (
        <div className="">
            <PageStarter tit1={"Carrer"} tit1Col={"white"} tit2={""} descColor={"white"} imageSrc={"/images/carrerheader.jpg"} />
            <div className='bg-[#FFFAF2] p-4 text-black w-full flex items-center justify-center space-x-16'>
                <div className="w-[30%] h-[85vh] relative">
                    <Image src="/images/wearehiring.png" layout="fill"></Image>
                </div>
                <div className='space-y-8 w-[30%]'>
                    <h1 className='text-4xl text-[#F19F1F] text-light text-center tracking-wide'>Join The Team</h1>
                    <form className="flex flex-col space-y-8">
                        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name *" type="text" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email *" type="text" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number *" type="text" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
                        <input value={appliedFor} onChange={(e) => setAppliedFor(e.target.value)} placeholder="Applied For *" type="text" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
                        <textarea value={coverletter} onChange={(e) => setCoverLetter(e.target.value)} placeholder="Cover Letter" rows={4} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
                        <div className='space-y-2'>
                            <div className="shrink-0">
                                Upload Your CV<sup>*</sup>
                            </div>
                            <label className="block">
                                <span className="sr-only">Choose profile photo</span>
                                <input type="file" className="block w-full text-sm text-slate-500
                                                        file:mr-4 file:py-2 file:px-4
                                                        file:rounded-full file:border-0
                                                        file:text-sm file:font-semibold
                                                        file:bg-violet-50 file:text-violet-700
                                                        hover:file:bg-violet-100"/>
                            </label>
                        </div>
                        <button className="bg-[#F19F1F] font-bold flex space-x-2 items-center rounded-lg p-2 w-fit text-white" type="Submit">Submit <span><GoArrowRight fontWeight="bold"/></span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Page