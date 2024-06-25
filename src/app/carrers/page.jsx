'use client'
import { PageStarter } from "@/Components/PageStarter";
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter()
    const moveToApply = () => {
        router.push("/carrers/apply");
    }

    return (
        <div>
            <PageStarter tit1={"Carrer"} tit1Col={"white"} tit2={""} descColor={"white"} imageSrc={"/images/banners/carrerpagebanner.jpg"} desc={" Join Intelli Vectra Technology and be part of a dynamic team driving digital innovation. Explore rewarding career opportunities where your skills and ideas can shape the future of technology solutions."}/>
            <div className="h-[5vh] bg-white"></div>

            <div className="flex flex-col w-[100vw] justify-center items-center space-y-4 bg-white">
                <div className="space-y-4 w-[70vw]">
                    <h1 className="text-4xl text-center text-black font-bold">Be a part of our mission</h1>
                    <p className="text-black text-center font-extralight">
                        Be a vital part of Intelli Vectra Technology's mission to lead digital transformation globally. Join us in creating impactful solutions that empower businesses and shape the future of technology.
                    </p>
                </div>
                <div className="w-full flex flex-col md:flex-row">
                    <div className="md:w-[50%] w-[100%] relative h-[400px]">
                        <Image src="/images/nowhiring.jpg" layout="fill" />
                    </div>
                    <div className="md:w-[50%] w-[100%] bg-[#FFDFAD] p-16 py-16 space-y-8">
                        <p className="text-black tracking-widest font-extralight">We're expanding our team at Intelli Vectra Technology and looking for driven individuals like you to join us. Explore rewarding career opportunities and apply your skills to shape the future of IT solutions. Whether you're an experienced professional or new to the field, we invite you to be part of our innovative journey. Apply now and make an impact with us.</p>
                        <button onClick={moveToApply} className="py-2 bg-[#F19F1F] font-light px-8">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}