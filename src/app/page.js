import { BenifitCard } from "@/Components/Cards/BenifitCard";
import { ContentCard } from "@/Components/Cards/ContentCard";
import { Button } from "@/Components/ui/Button";
import Image from "next/image";

export default function Home() {
  const classActive = "border-b-2 px-6 border-[#FFAB2E] h-full items-center flex";
  return (
    <div className="h-min-[100vh] bg-white">
      {
        // Starter Layout
      }
      <div className="px-20 flex items-center h-[80vh] w-full bg-cover bg-center" style={{ backgroundImage: "url('images/frontpageimage.jpg')" }}>
        <div className="flex flex-col space-y-8">
          <div className="border-[#F19F1F] space-y-4 border-l-2 px-4">
            <h1 className="text-4xl">
              <span className="text-[#F19F1F]">BUSINESS</span>
              <span className="text-white"> & ENTERPRISE HUB</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
              Ut enim ad minim veniam
            </p>
          </div>
          <div>
            <Button buttonText={"Explore"} functionToPerform={null} />
          </div>
        </div>
      </div>
      {
        // About Layout
      }

      <div className="w-full px-10 space-x-20 bg-white text-black items-center justify-center flex">
        <div className="flex w-[40%] items-center">
          {/* First Image */}
          <div className="w-full max-w-sm mb-6">
            <img
              src="images/image-1.jpg"
              alt="Team hands"
              width={300}
              height={550}
            />
          </div>
          {/* Second Image */}
          <div className="w-full max-w-xs align-bottom ml-[-200px] mt-[400px]">
            <img
              src="images/image-2.jpg"
              alt="Team meeting"
              width={400}
              height={222}
            />
          </div>
        </div>
        <div className="h-full items-center w-[50%] space-y-6">
          <h1 className="px-2 border-l-2 text-black text-[16px] font-bold border-[#F19F1F]">ABOUT US</h1>
          <h1 className="px-2 text-[#F19F1F] text-[36px]">Lorem ipsum dolor sit ame</h1>

          <p className="text-[16px] text-[#3F444]">
            Intelli Vectra stands as a technology and vendor-agnostic solution provider. Our client relationships are fiduciary, dedicated to safeguarding their best interests as we drive business transformation through innovation and engagement. Embracing a holistic approach, we navigate diverse technological landscapes to deliver bespoke solutions tailored to each client's unique needs. Our commitment extends beyond mere consultation; we actively collaborate with clients, fostering an environment of mutual growth and success. By prioritizing innovation and fostering meaningful engagement, we empower businesses to adapt, thrive, and seize new opportunities in an ever-evolving digital ecosystem.
          </p>

          <Button buttonText={"Learn More"} />
        </div>
      </div>


      <div className="text-center min-h-[70vh] bg-[#FFFAF2] p-4">
        <h1 className="text-5xl text-gray-800 mb-2">Solutions & <span className="text-[#FFAB2E]">Services</span></h1>
        <p className="text-gray-600 mb-6 font-light text-2xl">Empowering Your Digital Journey: Seamless Solutions for Every IT Need.</p>

        <div className="flex items-center justify-center">
          <img src="/images/solutionandservices.jpg" alt="Solutions & Services" className="w-[600px] object-cover rounded-full" />
        </div>
      </div>

      <div className="h-[10vh]">

      </div>
      <div className="text-black space-y-10">
        <div>
          <h1 className="text-center tracking-wide text-4xl text-gray-600">Key <span className="text-[#FFAB2E]">Benefits</span></h1>
          <p className="font-extralight text-xl tracking-wide text-center">Tailored IT Solutions for Seamless Operations, Reliable Support, Cybersecurity Expertise, Innovation-driven </p>
          <p className="font-extralight text-xl text-center tracking-wide">Approach, Client-Centric Services, Proven Results.</p>
        </div>
        <div className="bg-white flex justify-between items-center p-4">
          <BenifitCard
            imagesrc={"/images/bp2.png"}
            title={"CUSTOMER FOCUS"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
          <BenifitCard
            imagesrc={"/images/bp1.png"}
            title={"TRANSPARENCY"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
          <BenifitCard
            imagesrc={"/images/bp3.png"}
            title={"AGILITY & PASSION"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
          <BenifitCard
            imagesrc={"/images/bp4.png"}
            title={"COLLABORATION"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
        </div>
      </div>
      <div className="bg-white h-[8vh]">

      </div>
      <div className="w-full text-gray-600 space-y-10 bg-[#FFFAF2] py-12 flex flex-col">
        <div className="w-full space-y-2">
          <h1 className="text-4xl text-center">Technology <span className="text-[#FFAB2E]">Partners</span></h1>
          <p className="text-center text-xl tracking-wide">Partnering with industry-leading manufacturers to deliver cutting-edge technology solutions<br /> tailored to your business needs.</p>
        </div>

        <div className="flex space-y-6 flex-col justify-center">
          <div className="space-x-6 flex w-full justify-center">
            <img src="/images/tp1.png" />
            <img src="/images/tp2.png" />
            <img src="/images/tp3.png" />
            <img src="/images/tp4.png" />
          </div>
          <div className="space-x-6 flex w-full justify-center">
            <img src="/images/tp5.png" />
            <img src="/images/tp6.png" />
            <img src="/images/tp7.png" />
            <img src="/images/tp8.png" />
            <img src="/images/tp9.png" />
          </div>
          <div className="space-x-6 flex w-full justify-center">
            <img src="/images/tp10.png" />
            <img src="/images/tp11.png" />
            <img src="/images/tp12.png" />
            <img src="/images/tp13.png" />
          </div>
        </div>
      </div>

      <div className="h-[8vh] bg-white">

      </div>
      <div className="text-gray-600 w-full space-y-4 flex flex-col justify-between items-center">
        <h1 className="text-4xl text-center">Content <span className="text-[#FFAB2E]">Hub</span></h1>
        <ul className="w-full flex space-x-40 text-[#FFAB2E] items-center justify-center bg-gradient-to-r  from-white via-[#F4F4F4] to-white h-[50px]">
          <li className={classActive}>Blog</li>
          <li>News</li>
          <li>Case Study</li>
          <li>Events</li>
        </ul>

        <div className="flex space-x-10 items-center justify-center">
          <ContentCard date={"12 Jan 2024"} description={"Consectetur adipiscing elit dolore magna aliqua?"} imageSrc={"/images/blog1.jpg"} userImageSrc={"/images/av1.jpg"} username={"Jessica"} userDes={"UI/UX Designer"}/>
          <ContentCard date={"12 Jan 2024"} description={"Consectetur adipiscing elit dolore magna aliqua?"} imageSrc={"/images/blog1.jpg"} userImageSrc={"/images/av1.jpg"} username={"Jessica"} userDes={"UI/UX Designer"}/>
          <ContentCard date={"12 Jan 2024"} description={"Consectetur adipiscing elit dolore magna aliqua?"} imageSrc={"/images/blog1.jpg"} userImageSrc={"/images/av1.jpg"} username={"Jessica"} userDes={"UI/UX Designer"}/>
        </div>
      </div>


    </div>
  );
}
