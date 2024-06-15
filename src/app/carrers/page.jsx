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
            <PageStarter tit1={"Carrer"} tit1Col={"white"} tit2={""} descColor={"white"} imageSrc={"/images/banners/carrerpagebanner.jpg"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"}/>
            <div className="h-[5vh] bg-white"></div>

            <div className="flex flex-col w-[100vw] justify-center items-center space-y-4 bg-white">
                <div className="space-y-4 w-[70vw]">
                    <h1 className="text-4xl text-center text-black font-bold">Be a part of our mission</h1>
                    <p className="text-black text-center font-extralight">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt onsectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt onsectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                </div>
                <div className="w-full flex flex-col md:flex-row">
                    <div className="md:w-[50%] w-[100%] relative h-[400px]">
                        <Image src="/images/nowhiring.jpg" layout="fill" />
                    </div>
                    <div className="md:w-[50%] w-[100%] bg-[#FFDFAD] p-16 py-16 space-y-8">
                        <p className="text-black tracking-widest font-extralight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt onsectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt onsectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <button onClick={moveToApply} className="py-2 bg-[#F19F1F] font-light px-8">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}