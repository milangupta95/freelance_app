'use client'
import { PageStarter } from "@/Components/PageStarter"
import Image from "next/image";
import { useState } from "react";
import { jsonforServices } from "@/data";
import Link from "next/link";

export default function Page() {
    const [activeServIdx, setActiveServIdx] = useState("technology");
    const classActive = "border-b-2 cursor-pointer px-6 border-[#FFAB2E] h-full items-center flex";
    const classUnactive = "hover:border-b-2 cursor-pointer hover:border-[#FFAB2E] px-6 items-center flex h-full"
    return (
        <div>
            <PageStarter desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"} tit1={"Solution and Services"} tit2={""} tit1Col={"white"} descColor={"white"} imageSrc={"/images/solutionservicesHeader.jpg"}></PageStarter>
            <div className="w-full p-8 px-10 space-x-20 bg-white text-black items-center justify-center flex">
                <div className="flex w-[40%] items-center">
                    <Image
                        height={400}
                        width={400}
                        src={`/images/aboutusGroup.jpg`}
                    />
                </div>
                <div className="h-full items-center w-[50%] space-y-6">
                    <h1 className="text-[#F19F1F] text-[36px] font-extralight"><span className="text-black">Solutions</span> & Services</h1>

                    <p className="text-[16px] text-[#3F444] font-extralight">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <div className="text-gray-600 w-full space-y-4 flex flex-col justify-between items-center">
                <ul className="w-full flex space-x-40 text-[#FFAB2E] items-center justify-center bg-gradient-to-r  from-white via-[#F4F4F4] to-white h-[50px]">
                    <li onClick={() => {
                        setActiveServIdx("technology")
                    }} className={activeServIdx === "technology" ? classActive : classUnactive}>Technologies Solutions</li>
                    <li onClick={() => {
                        setActiveServIdx("pit")
                    }} className={activeServIdx === "pit" ? classActive : classUnactive}>Professional IT Services</li>
                    <li onClick={() => {
                        setActiveServIdx("staffing")
                    }} className={activeServIdx === "staffing" ? classActive : classUnactive}>IT Staffing Services</li>
                </ul>
            </div>

            <div className="bg-white py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
                {
                    jsonforServices.filter((serv) =>  serv.type === activeServIdx ).map((service) => {
                        return (
                <div className="shadow-lg w-[70%] p-4 space-y-4 rounded-lg">
                    <div className="relative w-full h-[250px]">
                        <Image src={service.heading_pic_url} layout="fill"></Image>
                    </div>
                    <h1 className="text-[#FFAB2E]">{service.service_name}</h1>
                    <p className="text-black">
                        {service.short_description}
                    </p>
                    <Link href={`/solutionandservices/${service.service_id}`}><button className="bg-[#FFAB2E] p-4">Learn More</button></Link>
                </div>
                )
                    })
                }
            </div>
        </div>
    )
}