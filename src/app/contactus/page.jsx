'use client'
import { PageStarter } from '@/Components/PageStarter';
import * as React from 'react';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [name,setName] = React.useState("")
  const [email,setEmail] = React.useState("")
  const [phone,setPhone] = React.useState("")
  const [subject,setSubject] = React.useState("")
  const [message,setMessage] = React.useState("")
  return (
    <div>
      <PageStarter tit1={"Contact"} tit2={" Us"} tit1Col={"black"} descColor={"black"} imageSrc={"/images/contactusback.jpg"}></PageStarter>
      <div className='bg-[#FFFAF2] w-full py-8 px-32 space-y-8'>
        <h1 className='text-center text-3xl underline font-bold text-[#FFC872] '> Get In Touch </h1>
        <div className='flex space-x-4 w-full justify-center items-center'>
          <div className='space-y-2'>
            <div className='h-[100px] shadow-lg w-[250px] bg-white rounded-lg'></div>
            <div className='h-[100px] shadow-lg w-[250px] bg-white rounded-lg'></div>
            <div className='h-[100px] shadow-lg w-[250px] bg-white rounded-lg'></div>
            <div className='h-[100px] shadow-lg w-[250px] bg-white rounded-lg'></div>
          </div>
          <div className='bg-white shadow-lg space-y-8 text-black p-4 py-8 rounded-lg w-[70%] h-[420px]'>
            <div>
              <h1 className='text-3xl font-extralight'>Send Message</h1>
              <p className='text-xl font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
            </div>
            <div>
              <form className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='w-[49%] p-2 font-extralight border border-black ' type="text" name="name" />
                  <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='w-[49%] p-2 font-extralight border border-black ' type="text" name="email" />
                </div>
                <div className='flex items-center justify-between'>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone No' className='w-[49%] p-2 font-extralight border border-black ' type="text" name="phone" />
                  <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Subject' className='w-[49%] p-2 font-extralight border border-black ' type="text" name="subject" />
                </div>
                <div>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' rows={3} className='w-full p-2 font-extralight col-span-4 border border-black '></textarea>
                </div>
                <div className='flex items-center justify-end'>
                  <button className='p-4 bg-[#F19F1F] tracking-wide text-white'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-end justify-center w-full bg-white'>
        <div className='space-y-4 flex flex-col justify-center'>
          <Image src="/images/indiagate.jpg" height={300} width={500} />
          <h1 className='text-4xl text-[#F19F1F] text-center'>Haryana, India</h1>
          <p className='text-[#3F444D] text-center font-extralight'>2nd Floor, Plot No. 29,<br />
            Maruti Industrial Area, Sector-18,<br />
            Gurugram–122015 (Haryana).</p>
          <div className='flex justify-center w-full'>
            <button className='bg-[#F19F1F] p-4 w-fit'>Get Directions</button>
          </div>
        </div>
        <div className='space-y-4 flex flex-col justify-center'>
          <Image src="/images/burzkhalifa.jpg" height={300} width={500} />
          <h1 className='text-4xl text-[#F19F1F] text-center'>Dubai, UAE</h1>
          <p className='text-[#3F444D] text-center font-extralight'>Office #1111,<br />
            Clover Bay Tower, Business Bay,<br />
            PO Box: 283426, Dubai, UAE</p>
          <div className='flex justify-center w-full'>
            <button className='bg-[#F19F1F] p-4 w-fit'>Get Directions</button>
          </div>
        </div>
      </div>
    </div>

  )
}

