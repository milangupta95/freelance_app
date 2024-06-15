import * as React from 'react';
import { PageStarter } from '@/Components/PageStarter';
import Image from 'next/image';

const Page = () => {
    return (
        <div className="text-black bg-white space-y-4">
            <PageStarter tit1={"Technology Partner"} tit2={""} tit1Col={"black"} descColor={"black"} imageSrc={"/images/blogsHeader.jpg"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"}></PageStarter>
            <div className="w-full text-gray-600 space-y-10 bg-[#FFFAF2] py-12 flex flex-col">
                <div className="w-full space-y-2">
                    <h1 className="text-4xl text-center">Technology <span className="text-[#FFAB2E]">Partners</span></h1>
                    <p className="text-center text-xl tracking-wide">Partnering with industry-leading manufacturers to deliver cutting-edge technology solutions<br /> tailored to your business needs.</p>
                </div>

                <div className="flex md:space-y-16 flex-col justify-center">
                    <div className="md:space-x-32 gap-2 md:flex grid grid-cols-2 justify-items-center w-full md:justify-center">
                        <Image alt="Technology Partner" height={100} width={100} src="/images/tp1.png" />
                        <Image alt="Technology Partner" height={100} width={100} src="/images/tp2.png" />
                        <Image alt="Technology Partner" height={100} width={100} src="/images/tp3.png" />
                        <Image alt="Technology Partner" height={100} width={100} src="/images/tp4.png" />
                    </div>
                    <div className="md:space-x-32 gap-2 md:flex grid grid-cols-2 justify-items-center w-full md:justify-center">
                        <Image alt="Technology Partner" height={100} width={100} src="/images/tp5.png" />
                        <Image alt="Technology Partner" height={100} width={100} src="/images/tp6.png" />
                        <Image alt="Technology Partner" height={100} width={100} src="/images/tp7.png" />
                        <Image alt="Technology Partner" height={100} width={100} src="/images/tp8.png" />
                        <Image alt="Technology Partner" height={100} width={100} src="/images/tp9.png" />
                    </div>
                    <div className="md:space-x-32 gap-2 md:flex grid grid-cols-2 justify-items-center w-full md:justify-center">
                        <Image alt="Technology Partner" height={100} width={100} src="/images/tp10.png" />
                        <Image alt="Technology Partner" height={100} width={100} src="/images/tp11.png" />
                        <Image alt="Technology Partner" height={100} width={100} src="/images/tp12.png" />
                        <Image alt="Technology Partner" height={100} width={100} src="/images/tp13.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
