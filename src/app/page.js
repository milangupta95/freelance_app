'use client'
import { BenifitCard } from "@/Components/Cards/BenifitCard";
import { ContentCard } from "@/Components/Cards/ContentCard";
import { PageStarter } from "@/Components/PageStarter";
import PageStarterVideo from "@/Components/PageStarterVideo";
import { Button } from "@/Components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'
export default function Home() {

  const partners = [
    {
      imageSrc: "/images/techpartner/tp6.png",
      link: "https://www.microsoft.com/en-in",
      out: true,
    },
    {
      imageSrc: "/images/techpartner/tp11.png",
      link: "https://www.hpe.com/in/en/home.html",
      out: true
    },
    {
      imageSrc: "/images/techpartner/tp5.png",
      link: "https://www.redhat.com/en",
      out: true
    },
    {
      imageSrc: "/images/techpartner/tp2.png",
      link: "https://www.vmware.com/"
    },
    {
      imageSrc: "/images/techpartner/tp17.png",
      link: "https://cloud.google.com/",
      out: true
    },
    {
      imageSrc: "/images/techpartner/tp3.png",
      link: "https://www.veritas.com/"
    },
    {
      imageSrc: "/images/techpartner/tp14.png",
      link: "https://www.cohesity.com/"
    },
    {
      imageSrc: "/images/techpartner/tp12.png",
      link: "https://about.gitlab.com/"
    },
    {
      imageSrc: "/images/techpartner/tp4.png",
      link: "https://www.sap.com/india/index.html"
    },
    {
      imageSrc: "/images/techpartner/tp21.png",
      link: "https://aws.amazon.com/?nc2=h_lg",
      out: true
    },
    {
      imageSrc: "/images/techpartner/tp7.png",
      link: "https://www.imperva.com/"
    },
    {
      imageSrc: "/images/techpartner/tp15.png",
      link: "https://www.exagrid.com/"
    },
    {
      imageSrc: "/images/techpartner/tp9.png",
      link: "https://arconnet.com/"
    },
    {
      imageSrc: "/images/techpartner/tp1.png",
      link: "https://www.aquilai.io/",
      out: true
    },
    {
      imageSrc: "/images/techpartner/tp8.png",
      link: "https://www.prolabs.com/",
      out: true
    },
    {
      imageSrc: "/images/techpartner/tp13.png",
      link: "https://www.arista.com/en/"
    },
    {
      imageSrc: "/images/techpartner/tp16.png",
      link: "https://www.arista.com/en/"
    },

    {
      imageSrc: "/images/techpartner/tp18.jpg",
      link: "https://www.commvault.com/",
    },
    {
      imageSrc: "/images/techpartner/tp19.jpg",
      link: "https://www.proofpoint.com/us",
    },
    {
      imageSrc: "/images/techpartner/tp20.png",
      link: "https://www.indusface.com/",
    },

  ]

  const dataForContentHub = {
    "events": [
      {
        "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSliF3XoIDPLq9MzY4adp9caGN98v3axTGMA&s",
        "userImageSrc": "/images/profile_image.png", "username": "User One",
        "userDes": "Description for User One",
        "description": "The Biggest Technical AI conference in San Francisco",
        "link": "https://www.ai.engineer/worldsfair?wt.mc_id=eventscatalog",
        "date": "June 25-27 2024"
      },
      {
        "link": "https://devopscon.io/new-york/",
        "imageSrc": "https://devopscon.io/wp-content/uploads/2024/04/Header_Image-13.jpg",
        "userImageSrc": "/images/profile_image.png", "username": "User Two",
        "userDes": "Description for User Two",
        "description": "The Conference for CI/CD, Kubernetes Ecosystem, Agile & Lean Business",
        "date": "October 8 – 9, 2024"
      },
      {
        "link": "https://www.rsaconference.com/library/webcast/176-securing-ai",
        "imageSrc": "https://www.teksystems.com/cdn-cgi/image/height=605,width=813,quality=95,format=webp/https://www.teksystems.com/-/media/teksystems/images/blogs/blog%20images/microlearning.png?iar=0&rev=a52dbfa380ad4523877d74bfacbf619f&hash=100CFFE850E379EE87623E8B04064536",
        "userImageSrc": "/images/profile_image.png", "username": "User Three",
        "userDes": "Description for User Three",
        "description": "Securing AI Like a Boss",
        "date": "Sep. 11, 2024"
      }
    ],
    "blogs": [
      {
        "link": "https://www.example.com/blogs/understanding-ai",
        "imageSrc": "/images/AI.jpg",
        "userImageSrc": "/images/profile_image.png",
        "username": "User One",
        "userDes": "Description for User One",
        "description": "Understanding AI and Its Applications",
        "date": "Jun. 21, 2024"
      },
      {
        "link": "https://www.example.com/blogs/future-of-tech",
        "imageSrc": "/images/fut_of_tech.jpeg",
        "userImageSrc": "/images/profile_image.png",
        "username": "User Two",
        "userDes": "Description for User Two",
        "description": "The Future of Technology: Trends and Predictions",
        "date": "Jul. 15, 2024"
      },
      {
        "link": "https://www.rsaconference.com/library/webcast/176-securing-ai",
        "imageSrc": "https://www.teksystems.com/cdn-cgi/image/height=605,width=813,quality=95,format=webp/https://www.teksystems.com/-/media/teksystems/images/blogs/blog%20images/microlearning.png?iar=0&rev=a52dbfa380ad4523877d74bfacbf619f&hash=100CFFE850E379EE87623E8B04064536",
        "userImageSrc": "/images/profile_image.png",
        "username": "User Three",
        "userDes": "Description for User Three",
        "description": "Securing AI Like a Boss",
        "date": "Sep. 11, 2024"
      }
    ],
    "news": [
      {
        "link": "https://blogs.microsoft.com/blog/2024/04/15/microsoft-and-g42-partner-to-accelerate-ai-innovation-in-uae-and-beyond/",
        "imageSrc": "https://blogs.microsoft.com/wp-content/uploads/prod/2023/10/MSCFS-graphic-2.png",
        "userImageSrc": "/images/profile_image.png",
        "username": "User One",
        "userDes": "Description for User One",
        "description": "Microsoft and G42 partner to accelerate AI innovation in UAE and beyond",
        "date": "Apr 15, 2024"
      },
      {
        "link": "https://blogs.microsoft.com/blog/2024/04/15/microsoft-and-g42-partner-to-accelerate-ai-innovation-in-uae-and-beyond/",
        "imageSrc": "https://blogs.microsoft.com/wp-content/uploads/prod/2023/10/MSCFS-graphic-2.png",
        "userImageSrc": "/images/profile_image.png",
        "username": "User Two",
        "userDes": "Description for User Two",
        "description": "RSA Conference 2024 Q&A: GitLab Will Showcase Its Comprehensive AI-powered DevSecOps Platform",
        "date": "May 6 - 9, 2024"
      },
      {
        "link": "https://vmblog.com/archive/2024/04/30/rsa-conference-2024-q-a-gitlab-will-showcase-its-comprehensive-ai-powered-devsecops-platform.aspx",
        "imageSrc": "https://vmblog.com/images/VMblog-RSA2024.jpg",
        "userImageSrc": "/images/profile_image.png",
        "username": "User Two",
        "userDes": "Description for User Two",
        "description": "RSA Conference 2024 Q&A: GitLab Will Showcase Its Comprehensive AI-powered DevSecOps Platform",
        "date": "May 6 - 9, 2024"
      }
    ],
    "case_study": [
      {
        "link": "https://www.example.com/case-studies/successful-marketing-campaign",
        "imageSrc": "/images/marketing.png",
        "userImageSrc": "/images/profile_image.png",
        "username": "Analyst One",
        "userDes": "Marketing Expert",
        "description": "How a Successful Marketing Campaign Increased Brand Awareness",
        "date": "Apr. 10, 2024"
      },
      {
        "link": "https://www.example.com/case-studies/effective-employee-training",
        "imageSrc": "/images/training.png",
        "userImageSrc": "/images/profile_image.png",
        "username": "Analyst Two",
        "userDes": "HR Specialist",
        "description": "Effective Employee Training Programs and Their Impact",
        "date": "May. 22, 2024"
      },
      {
        "link": "https://www.example.com/case-studies/sustainability-initiatives",
        "imageSrc": "/images/sus_cons.jpeg",
        "userImageSrc": "/images/profile_image.png",
        "username": "Analyst Three",
        "userDes": "Sustainability Consultant",
        "description": "Implementing Successful Sustainability Initiatives in Corporations",
        "date": "Jun. 30, 2024"
      }
    ]
  }





  const [activeContentType, setActiveContentType] = useState("blogs");
  const classActive = "text-xl border-b-2 md:px-6 border-[#FFAB2E] h-full items-center cursor-pointer flex";
  const classUnactive = "text-xl cursor-pointer md:px-6 h-full items-center flex hover:border-b-2 hover:border-[#FFAB2E]"
  return (
    <div className="h-min-[100vh] w-full bg-white">
      <PageStarterVideo tit1={"Solutions"} videoSrc={"videos/homepagebgVideo.mp4"} tit2={" & Services"} tit1Col={"#F19F1F"} desc={"Empowering businesses with agile, transparent, and innovative technology solutions, Intelli Vectra Technologies drives success through collaboration and passionate expertise."} descColor={"white"} link={"/solutionandservices"} />
      
      <div className="w-full md:px-4 md:py-8 p-4 lg:space-x-20 bg-white text-black justify-center flex lg:flex-row flex-col">
        <div className="flex lg:w-[40%] w-full">
          {/* First Image */}
          <div className="bg-white w-full">
            <div className="relative w-[100%] md:w-[350px] h-[400px]">
              <Image
                src="/images/homevert.jpg"
                alt="Team hands"
                layout='fill'
              />
            </div>
          </div>
          {/* Second Image */}
          <div className="p-4 w-full z-[100] bg-white rounded-lg  mt-[300px] ml-[-200px]">
            <div className="relative w-[100%] md:w-[400px] h-[200px] max-w-xs">
              <Image
                src="/images/homehorz.jpg"
                alt="Team meeting"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className="h-full items-center lg:w-[50%] w-full space-y-6">
          <div className="space-y-1">
            <h1 className="md:text-4xl text-2xl text-gray-800 mb-2 font-bold">About<span className="text-[#FFAB2E]"> Us</span></h1>
            <p className="text-black mb-6 md:text-xl text-sm italic">Building Bridges in the Digital Landscape</p>
          </div>


          <p className="md:text-[18px] text-normal text-[#3F444]">
            Intelli Vectra Technologies empower businesses through innovative technology solutions, our
            vision is to be the catalyst for digital transformation worldwide. With a commitment to
            excellence, integrity, and customer-centricity, we strive to redefine the possibilities of IT,
            delivering cutting-edge solutions that inspire progress, drive growth, and shape the future of
            industries. Our relentless pursuit of innovation, coupled with a passion for exceeding
            expectations, positions us as the ideal partner for organizations seeking to thrive in an ever-
            evolving digital landscape. Together, we envision a world where technology empowers,
            connects, and transforms lives, fostering a brighter, more inclusive future for all.
          </p>
          <div className="w-full h-6 bg-white"></div>
          <Link href="/about"><Button buttonText={"Read More"} /></Link>
        </div>
      </div>

      <div className="text-center bg-[#FFFAF2] p-8 space-y-4">
        <div className="space-y-4 ">
          <h1 className="md:text-4xl text-2xl text-gray-800 mb-2 font-bold">Solutions & <span className="text-[#FFAB2E]">Services</span></h1>
          <p className="text-black mb-6 md:text-xl text-sm italic">Empowering Your Digital Journey: Seamless Solutions for Every IT Need.</p>
        </div>


        <div className="flex items-center justify-center rounded-[50%]">
          <Link href={"/solutionandservices"}><Image className="rounded-[50%]" width={500} height={500} src="/images/solutionandservice.png" alt="Solutions & Services" /></Link>
        </div>
      </div>

      <div className="text-black space-y-8 p-4 pb-12 md:py-8 md:px-2 md:pb-20">
        <div className="w-full flex items-center flex-col justify-center space-y-4">
          <h1 className="text-center tracking-wide text-2xl font-bold md:text-4xl text-gray-600">Our Competitive<span className="text-[#FFAB2E]"> Edge</span></h1>
          <p className="font-normal text-sm md:text-xl tracking-wide italic text-center md:w-[70%] w-[100%]">Ahead of the Curve</p>
        </div>
        <div className="bg-white grid grid-cols-2 xl:grid-cols-4 justify-items-center gap-x-4 gap-y-12 md:gap-x-4 md:space-y-0">
          <BenifitCard
            imagesrc={"/images/bp2.png"}
            title={"CUSTOMER FOCUS"}
            description={"From the initial consultation to ongoing support, we listen intently, communicate transparently, and remain dedicated to delivering outcomes that exceed your expectations."} />
          <BenifitCard
            imagesrc={"/images/bp1.png"}
            title={"TRANSPARENCY"}
            description={"We are committed to upholding the highest standards of integrity and accountability in everything we do, ensuring that our relationships are built on trust and a shared commitment."} />
          <BenifitCard
            imagesrc={"/images/bp3.png"}
            title={"AGILITY & PASSION"}
            description={"We embrace agility to swiftly adapt to dynamic business landscapes, ensuring innovative solutions and efficient outcomes with our unwavering passion for technology that fuels creativity and dedication."} />
          <BenifitCard
            imagesrc={"/images/bp4.png"}
            title={"COLLABORATION"}
            description={" We cultivate teamwork internally and with clients and partners to achieve superior outcomes and lasting value through shared expertise and mutual respect."} />
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-full md:px-4 md:py-8 text-black space-y-10 bg-[#FFFAF2] flex flex-col">
          <div className="w-full space-y-4 flex-col flex items-center">
            <h1 className="text-2xl md:text-4xl font-bold text-center">Technology <span className="text-[#FFAB2E]">Partners</span></h1>
            <p className="font-normal italic text-sm md:text-xl tracking-wide text-center md:w-[70%] w-[100%]">Partnering with industry-leading manufacturers to deliver cutting-edge technology solutions<br /> tailored to your business needs.</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="md:w-[100%] flex flex-wrap justify-center items-center">
              {
                partners.map((partner, idx) => {
                  return (
                    <a href={partner.link} key={idx} target="_blank"><div className="p-2"><div className="border-2 bg-white rounded-md p-2 md:h-[90px] h-[60px] w-[150px] md:w-[200px] items-center justify-center"><div className="h-full relative w-full"><Image objectFit={partner.out ? "fill" : "cover"} alt="Technology Partner" layout='fill' src={partner.imageSrc} /></div></div></div></a>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex p-4 md:px-4 md:py-8 items-center px justify-center">
        <div className="bg-white w-full text-black flex items-center justify-center">
          <div className="w-full lg:w-[60%] space-y-8">
            <div className="space-y-4 flex flex-col justify-center items-center w-full">
              <h1 className="text-center text-2xl md:text-4xl font-bold">Accomplishments <span className="text-[#F19F1F]">that Define Us</span></h1>
              <p className="font-normal text-sm italic md:text-xl tracking-wide text-center md:w-[70vw] w-[95vw]">Our achievements at Intelli Vectra Technologies reflect our commitment to innovation, client satisfaction, and transformative impact in technology solutions.</p>
            </div>
            <div className="flex flex-row justify-center">
              <div className="md:p-8 p-4 text-center space-y-4 border-r">
                <h1 className="text-[#F19F1F] text-xl md:text-3xl font-bold">3+</h1>
                <p className="font-bold md:text-xl text-sm tracking-wider">Our Presence</p>
              </div>
              <div className="md:p-8 p-4 text-center space-y-4 border-r">
                <h1 className="text-[#F19F1F] text-xl md:text-3xl font-bold">50+</h1>
                <p className="font-bold md:text-xl text-sm tracking-wider">Clientele</p>
              </div>
              <div className="md:p-8 p-4 text-center space-y-4 border-r">
                <h1 className="text-[#F19F1F] text-xl md:text-3xl font-bold">80+</h1>
                <p className="font-bold md:text-xl text-sm tracking-wider">Projects Executed</p>
              </div>
              <div className="md:p-8 p-4 text-center space-y-4">
                <h1 className="text-[#F19F1F] text-xl md:text-3xl font-bold">10+</h1>
                <p className="font-bold md:text-xl text-sm tracking-wider">Accolades</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-black p-4 bg-[#FFFAF2] md:py-8 md:px-4 w-full space-y-6 flex flex-col justify-center items-center">
        <h1 className="md:text-4xl text-2xl text-center font-bold">Content <span className="text-[#FFAB2E]">Hub</span></h1>
        <ul className="lg:w-[60%] hidden md:flex md:justify-between space-x-6 text-[#FFAB2E] items-center justify-center bg-gradient-to-r  from-white via-[#F4F4F4] to-white h-[50px]">
          <li className={activeContentType === "blogs" ? classActive : classUnactive} onClick={() => setActiveContentType("blogs")}>Blog</li>
          <li className={activeContentType === "news" ? classActive : classUnactive} onClick={() => setActiveContentType("news")}>News</li>
          <li className={activeContentType === "case_study" ? classActive : classUnactive} onClick={() => setActiveContentType("case_study")}>Case Study</li>
          <li className={activeContentType === "events" ? classActive : classUnactive} onClick={() => setActiveContentType("events")}>Events</li>
        </ul>

        <div className='w-full md:hidden'>
          <select className='w-full bg-gray-100 text-center p-4 font-bold' onChange={(e) => setActiveContentType(e.target.value)}>
            <option className='w-full bg-gray-100 ' value={"blogs"}>Blogs</option>
            <option className='w-full bg-gray-100 ' value={'news'}>News</option>
            <option className='w-full bg-gray-100 ' value={'case_study'}>Case Study</option>
            <option className='w-full bg-gray-100 ' value={'events'}>Events</option>
          </select>
        </div>

        <div className="flex flex-col w-full px-4 py-4 space-y-4 md:px-10 md:flex-row md:space-y-0 md:space-x-12 items-center justify-between">
          {
            dataForContentHub[activeContentType].map((event, idx) => {
              return <ContentCard key={idx} content={event} />
            })
          }
        </div>

      </div>


    </div>
  );
}
