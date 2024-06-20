'use client'
import { PageStarter } from "@/Components/PageStarter";
import Image from "next/image";
import { Button } from "@/Components/ui/Button";
import EmblaCarousel from "@/Components/Corousel/EmblaCarousel";

export default function Page() {
    const slides = [
        {
            text_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image_src: "/images/slider1image.png",
            heading: "Duis aute irure dolor"
        },
        {
            text_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image_src: "/images/slide2image.png",
            heading: "irure dolor"
        },
        {
            text_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image_src: "/images/slide3image.png",
            heading: "Duis aute"
        },
    ];
    const OPTIONS = {
        loop: true
    };
    const SLIDE_COUNT = 5;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

    return (
        <div className='space-y-[30px] bg-white'>
            <PageStarter tit1Col={"black"} tit1={"About"} tit2={" Us"} imageSrc={"/images/banners/aboutusbanner.jpg"} descColor={"black"} desc={"Intelli Vectra Technologies offers comprehensive Digital Infrastructure, Business Analytics, Cloud, Security, and Emerging solutions that empower SMEs, enterprises, and government clients to unlock new digital revenue opportunities, enhance customer experiences across channels, and gain valuable data insights."} />

            <div className="w-full px-4 md:px-10 lg:px-20 space-y-6 bg-white text-black flex flex-col lg:flex-row items-center justify-center md:space-x-20">
                <div className="relative w-full lg:w-[40%] h-[300px] lg:h-[600px]">
                    <Image
                        layout="fill"
                        src={`/images/aboutusGroup.jpg`}
                        objectFit="cover"
                    />
                </div>
                <div className="h-full w-full lg:w-[50%] space-y-6">
                    <h1 className="px-2 border-l-2 text-black text-[16px] font-bold border-[#F19F1F]">ABOUT US</h1>
                    <h1 className="px-2 text-[#F19F1F] text-[36px]">Welcome to IVT</h1>
                    <div>
                        <p className="text-[16px] text-[#3F444D]">
                            Intelli Vectra Technologies offers comprehensive Digital Infrastructure, Business Analytics, Cloud, Security, and Emerging solutions that empower SMEs, enterprises, and government clients to unlock new digital revenue opportunities, enhance customer experiences across channels, and gain valuable data insights. Our strong partnerships with top technology providers enable us to deliver solutions that align IT investments with business goals, making technology work harder and smarter for our clients.
                        </p>
                        <p className="text-[16px] text-[#3F444D]">
                            Our mission is to drive economic value for our clients by guiding their digital transformation with world-class, secure, agile, and cloud-ready infrastructure solutions. We provide expert services throughout the entire lifecycle, including strategy, consulting, design, implementation, and ongoing support.
                        </p>
                        <p className="text-[16px] text-[#3F444D]">
                            Staying at the forefront of IT advancements, we ensure our clients benefit from a wide array of technologies and leading-edge solutions. Collaborating with both established market leaders and innovative emerging providers, we deliver tailored, integrated, and multi-technology solutions that meet the unique needs of each client.
                        </p>
                    </div>
                    <Button buttonText={"Learn More"} />
                </div>
            </div>

            <div className="bg-[#FFFAF2] w-full p-4 md:p-16">
                <div className="h-fit md:h-[70vh] space-y-8 md:space-y-16 bg-[#F19F1F] bg-blend-darken p-4" style={{ backgroundImage: "url('images/business-network-background-connecting-dots-technology-design 2.png')" }}>
                    <div className='space-y-2'>
                        <h1 className="text-center text-black text-2xl md:text-4xl font-extralight"><span className="text-white">Our</span> Journey</h1>
                        <p className="text-center text-[#3F444D] font-extralight">Embark on a seamless journey with our IT services.</p>
                    </div>
                    <EmblaCarousel slides={slides} options={OPTIONS} />
                </div>
            </div>

            <div className="p-4 md:p-8 bg-white space-y-4 flex flex-col items-center">
                <h1 className="text-center text-4xl text-black">Our <span className="text-[#F19F1F]">Process</span></h1>
                <div className="text-center text-black tracking-wider text-lg font-serif font-extralight">
                    <p>Streamlined Solutions for Seamless IT Services Tailored to</p>
                    <p>Your Business Needs</p>
                </div>
                <div className="w-full flex justify-center">
                    <div className="relative w-full md:w-[80%] h-[300px] md:h-[400px]">
                        <Image src={"/images/ourprocess.jpg"} layout="fill" />
                    </div>
                </div>
            </div>


            <div className="p-8 bg-[#FFFAF1] w-[100%] text-black space-y-4">
                <h1 className="font-semibold text-center text-4xl"><span className="text-[#F19F1F]">Our </span>Approach</h1>
                <div className="text-center tracking-widest font-extralight ">
                    <p>At IVT, We love technology - But we are obsessed with</p>
                    <p>Your Success</p>
                </div>

                <div className="relative items-center h-full flex justify-center">
                    <div className="w-[100vw] md:h-[550px] h-[300px] relative">
                        <Image src="/images/ourprocess.png" layout='fill'></Image>
                    </div>

                    <div className="absolute top-0 h-fit w-[94%] md:space-y-[350px] space-y-[190px]">
                        <div className="flex justify-center">
                            <div className="w-[150px] lg:w-[400px]">
                                <h1 className="text-sm md:text-lg text-center font-semibold">Consult & Envision</h1>
                                <p className="font-extralight text-center text-[7px] md:text-[15px]">We’ll work closely to develop a strategic roadmap and align our technology to your business requirements, so you can reach your goals.</p>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <div className="w-[150px] lg:w-[400px]">
                                <h1 className="text-sm md:text-lg text-center font-semibold">Manage & Improve</h1>
                                <p className="font-extralight text-center text-[7px] md:text-[15px]">You’ll have consistent access to managed, reported & monitored services, as well as dedicated consulting to ensure proactive, continuous improvements with strategic improvement planning.</p>
                            </div>
                            <div className="w-[150px] lg:w-[400px]">
                                <h1 className="md:text-lg text-sm text-center font-semibold">Build & Implement</h1>
                                <p className="font-extralight text-center text-[7px] md:text-[15px]">Our experts will focus on  implementing your chosen  solutions effectively in a way    that will create powerful and transformative business change.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="h-[8vh] bg-white"></div>
            <div className="bg-white text-black space-y-6 p-4">
                <h1 className="text-center font-normal text-4xl"><span className="text-[#F19F1F]">Mission </span>And Vision</h1>

                <div className="space-x-0  md:space-x-2 space-y-4 md:space-y-0 flex flex-col md:flex-row">
                    <div className="p-4 md:p-16 bg-[#FFFAF2] w-full md:w-[50%] space-y-4 md:space-y-6">
                        <h1 className="text-2xl md:text-4xl tracking-widest font-extralight">Our <span className="text-[#F19F1F]">Mission</span></h1>
                        <p className="text-base md:text-xl font-extralight tracking-widest">
                            At Intelli Vectra Solutions, our mission is to revolutionize the digital landscape by providing innovative IT solutions that empower businesses to thrive in the modern era. We are committed to simplifying complexities, driving digital transformation, and maximizing value for our clients.
                        </p>
                    </div>
                    <div className="p-4 md:p-16 bg-[#FFFAF2] w-full md:w-[50%] space-y-4 md:space-y-6">
                        <h1 className="text-2xl md:text-4xl tracking-widest font-extralight">Our <span className="text-[#F19F1F]">Vision</span></h1>
                        <p className="text-base md:text-xl font-extralight tracking-widest">
                            Our vision at Intelli Vectra Solutions is to be the forefront leader in the IT industry, renowned for our transformative solutions that enable organizations to harness the full potential of technology. We strive to be the trusted partner for businesses seeking sustainable growth and competitive advantage in the digital age.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
