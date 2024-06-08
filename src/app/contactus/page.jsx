import { PageStarter } from '@/Components/PageStarter';
import * as React from 'react';
import Image from 'next/image';

export default function Page() {
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
          <div className='bg-white shadow-lg rounded-lg w-[70%] h-[420px]'></div>
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

