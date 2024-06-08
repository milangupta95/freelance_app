import { PageStarter } from "@/Components/PageStarter";
import Image from "next/image";
import { Button } from "@/Components/ui/Button";

export default function Page() {
    return (
        <div>
            <PageStarter tit1Col={"black"} tit1={"About"} tit2={" Us"} imageSrc={"/images/aboutusheader.jpg"} descColor={"black"} />

            <div className="w-full px-10 space-x-20 bg-white text-black items-center justify-center flex">
                <div className="flex w-[40%] items-center">
                    <Image
                        height={400}
                        width={400}
                        src={`/images/aboutusGroup.jpg`}
                    />
                </div>
                <div className="h-full items-center w-[50%] space-y-6">
                    <h1 className="px-2 border-l-2 text-black text-[16px] font-bold border-[#F19F1F]">ABOUT US</h1>
                    <h1 className="px-2 text-[#F19F1F] text-[36px]">Welcome to IVT</h1>

                    <p className="text-[16px] text-[#3F444]">
                        Intelli Vectra stands as a technology and vendor-agnostic solution provider. Our client relationships are fiduciary, dedicated to safeguarding their best interests as we drive business transformation through innovation and engagement. Embracing a holistic approach, we navigate diverse technological landscapes to deliver bespoke solutions tailored to each clients unique needs. Our commitment extends beyond mere consultation; we actively collaborate with clients, fostering an environment of mutual growth and success. By prioritizing innovation and fostering meaningful engagement, we empower businesses to adapt, thrive, and seize new opportunities in an ever-evolving digital ecosystem.
                    </p>

                    <Button buttonText={"Learn More"} />
                </div>
            </div>

            <div className="bg-[#FFFAF2] w-full p-16">
                <div className="h-[70vh] space-y-2 bg-[#F19F1F] bg-blend-darken p-4" style={{ backgroundImage: "url('images/business-network-background-connecting-dots-technology-design 2.png')" }}>
                    <h1 className="text-center text-black text-4xl font-extralight"><span className="text-white">Our</span> Journey</h1>
                    <p className="text-center text-[#3F444D] font-extralight">Embark on a seamless journey with our IT services.</p>
                </div>

                {/* Here Corousel will be Placed */}
            </div>

            <div className="p-8 bg-white space-y-2 flex flex-col justify-center">
                <h1 className="text-center text-4xl text-black">Our <span className="text-[#F19F1F]">Process</span></h1>
                <div className="text-center text-black tracking-wider text-lg font-serif font-extralight">
                    <p >Streamlined Solutions for Seamless IT Services Tailored to</p>
                    <p> Your Business Needs</p>
                </div>
                <div className="w-full flex justify-center">
                    <div style={{ width: '80%', height: '500px', position: 'relative' }}>
                        <Image src={"/images/ourprocess.jpg"} layout="fill" />
                    </div>
                </div>
            </div>

            <div className="p-8 bg-[#FFFAF1] text-black space-y-4">
                <h1 className="font-semibold text-center text-4xl"><span className="text-[#F19F1F]">Our </span>Approach</h1>
                <div className="text-center tracking-widest font-extralight">
                    <p>At IVT, We love technology - But we are obsessed with</p>
                    <p>Your Success</p>
                </div>

                <div className="flex items-center justify-center">
                    <div className="relative h-[410px] w-[80%]">
                        <Image src="/images/ourprocess.png" layout="fill"></Image>
                        <div className="space-y-[225px]">
                            <div className="flex justify-center">
                                <div className="w-[300px]">
                                    <h1 className="text-lg text-center font-semibold">Consult & Envision</h1>
                                    <p className="font-extralight text-center text-sm text-md">We’ll work closely to develop a strategic roadmap and align our technology to your business requirements, so you can reach your goals.</p>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div className="w-[400px]">
                                    <h1 className="text-lg text-center font-semibold">Manage & Improve</h1>
                                    <p className="font-extralight text-center text-sm text-md">You’ll have consistent access to managed, reported & monitored services, as well as dedicated consulting to ensure proactive, continuous improvements with strategic improvement planning.</p>
                                </div>
                                <div className="w-[400px]">
                                    <h1 className="text-lg text-center font-semibold">Build & Implement</h1>
                                    <p className="font-extralight text-center text-sm text-md">Our experts will focus on  implementing your chosen  solutions effectively in a way    that will create powerful and transformative business change.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="h-[8vh] bg-white"></div>
            <div className="bg-white text-black space-y-6">
                <h1 className="text-center font-normal text-4xl"><span className="text-[#F19F1F]">Mission </span>And Vision</h1>

                <div className="space-x-2 flex">
                    <div className="p-16 bg-[#FFFAF2] w-[50%] space-y-6">
                        <h1 className="text-4xl tracking-widest font-extralight">Our <span className="text-[#F19F1F]">Mission</span></h1>
                        <p className="text-xl font-extralight tracking-widest">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="p-16 bg-[#FFFAF2] w-[50%] space-y-6">
                        <h1 className="text-4xl tracking-widest font-extralight">Our <span className="text-[#F19F1F]">Vision</span></h1>
                        <p className="text-xl font-extralight tracking-widest">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-[8vh] bg-white"></div>
            <div className="bg-[#FFFAF2] py-8 w-full text-black flex items-center justify-center">
                <div className="w-[45%] space-y-8">
                    <h1 className="text-center text-4xl font-semibold">Our <span className="text-[#F19F1F]">Achievements</span></h1>
                    <p className="text-[#676767] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div className="flex justify-center">
                        <div className="p-8 text-center space-y-4 border-r">
                            <h1 className="text-[#F19F1F] text-5xl font-bold">2+</h1>
                            <p className="font-bold text-sm tracking-wider">Countries</p>
                        </div>
                        <div className="p-8 text-center space-y-4 border-r">
                            <h1 className="text-[#F19F1F] text-5xl font-bold">1000+</h1>
                            <p className="font-bold text-sm tracking-wider">Projects</p>
                        </div>
                        <div className="p-8 text-center space-y-4">
                            <h1 className="text-[#F19F1F] text-5xl font-bold">10+</h1>
                            <p className="font-bold text-sm tracking-wider">Total Services</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}