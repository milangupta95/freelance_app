'use client'
import { BenifitCard } from "@/Components/Cards/BenifitCard";
import { ContentCard } from "@/Components/Cards/ContentCard";
import { PageStarter } from "@/Components/PageStarter";
import { Button } from "@/Components/ui/Button";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const events = [
    {
      "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSliF3XoIDPLq9MzY4adp9caGN98v3axTGMA&s",
      "userImageSrc": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC",
      "username": "User One",
      "userDes": "Description for User One",
      "description": "The Biggest Technical AI conference in San Francisco",
      "link": "https://www.ai.engineer/worldsfair?wt.mc_id=eventscatalog",
      "date": "June 25-27 2024"
    },
    {
      "link": "https://devopscon.io/new-york/",
      "imageSrc": "https://devopscon.io/wp-content/uploads/2024/04/Header_Image-13.jpg",
      "userImageSrc": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC",
      "username": "User Two",
      "userDes": "Description for User Two",
      "description": "The Conference for CI/CD, Kubernetes Ecosystem, Agile & Lean Business",
      "date": "October 8 – 9, 2024"
    },
    {
      "link": "https://www.rsaconference.com/library/webcast/176-securing-ai",
      "imageSrc": "https://www.teksystems.com/cdn-cgi/image/height=605,width=813,quality=95,format=webp/https://www.teksystems.com/-/media/teksystems/images/blogs/blog%20images/microlearning.png?iar=0&rev=a52dbfa380ad4523877d74bfacbf619f&hash=100CFFE850E379EE87623E8B04064536",
      "userImageSrc": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC",
      "username": "User Three",
      "userDes": "Description for User Three",
      "description": "Securing AI Like a Boss",
      "date": "Sep. 11, 2024"
    }
  ]
  const classActive = "border-b-2 px-6 border-[#FFAB2E] h-full items-center flex";
  return (
    <div className="h-min-[100vh] space-y-[40px] md:space-y-[60px] bg-white">
      {
        // Starter Layout
      }
      <PageStarter tit1={"BUSINESS"} imageSrc={"images/frontpageimage.jpg"} tit2={" & ENTERPRISE HUB"} tit1Col={"#F19F1F"} desc={"Simplify complexity and drive digital transformation with Intelli Vectra Technologies’ innovative IT solutions for sustainable business growth."} descColor={"white"} />
      {
        // About Layout
      }

      <div className="w-full px-10 md:space-x-20 bg-white text-black justify-center items-center flex md:flex-row flex-col">
        <div className="flex md:w-[40%] w-full">
          {/* First Image */}
          <div className="w-full max-w-sm">
            <Image
              src="/images/image-1.jpg"
              alt="Team hands"
              width={300}
              height={440}
            />
          </div>
          {/* Second Image */}
          <div className="w-full max-w-xs mt-[350px] ml-[-200px]">
            <Image
              src="/images/image-2.jpg"
              alt="Team meeting"
              width={400}
              height={222}
            />
          </div>
        </div>
        <div className="h-full items-center md:w-[50%] w-full space-y-6">
          <h1 className="px-2 border-l-2 text-black text-[20px] font-bold border-[#F19F1F]">ABOUT US</h1>
          <p className="text-[#F19F1F] md:text-4xl text-2xl tracking-wide">Empowering Digital Transformation with Innovative IT Solutions</p>

          <p className="md:text-[18px] text-normal text-[#3F444]">
            Intelli Vectra Technologies is a leading IT solutions provider dedicated to helping clients harness technology innovation and simplify IT complexities. Our mission is to enable digital transformation and maximize return on IT investment. By leveraging cutting-edge technologies and delivering tailored solutions, Intelli Vectra Technologies empowers businesses to stay ahead in the rapidly evolving digital landscape. Our expertise spans across various domains, ensuring that our clients achieve operational efficiency, enhanced security, and sustainable growth
          </p>
          <div className="w-full h-6 bg-white"></div>
          <Link href="/about"><Button buttonText={"Learn More"} /></Link>
        </div>
      </div>

      <div className="text-center min-h-[70vh] bg-[#FFFAF2] p-8">
        <h1 className="md:text-4xl text-2xl text-gray-800 mb-2 font-bold">Solutions & <span className="text-[#FFAB2E]">Services</span></h1>
        <p className="text-gray-600 mb-6 font-light md:text-2xl text-xl">Empowering Your Digital Journey: Seamless Solutions for Every IT Need.</p>

        <div className="flex items-center justify-center rounded-[50%]">
          <Image className="rounded-[50%]" width={500} height={500} src="/images/solutionandservices.jpg" alt="Solutions & Services" />
        </div>
      </div>
      <div className="text-black space-y-2">
        <div className="w-full flex items-center justify-center flex-col">
          <h1 className="text-center tracking-wide text-2xl font-bold md:text-4xl text-gray-600">Key <span className="text-[#FFAB2E]">Benefits</span></h1>
          <p className="font-extralight text-sm md:text-xl tracking-wide text-center md:w-[70%] w-[100%]">Tailored IT Solutions for Seamless Operations, Reliable Support, Cybersecurity Expertise, Innovation-driven Approach, Client-Centric Services, Proven Results.</p>
        </div>
        <div className="bg-white grid grid-cols-2 xl:grid-cols-4 justify-items-center gap-x-4 gap-y-12 md:gap-x-4 md:space-y-0 p-4">
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
      <div className="w-full text-gray-600 space-y-10 bg-[#FFFAF2] py-12 flex flex-col">
        <div className="w-full space-y-2">
          <h1 className="text-2xl md:text-4xl font-bold text-center">Technology <span className="text-[#FFAB2E]">Partners</span></h1>
          <p className="text-center text-xl tracking-wide">Partnering with industry-leading manufacturers to deliver cutting-edge technology solutions<br /> tailored to your business needs.</p>
        </div>

        <div className="flex md:space-y-16 space-y-8 p-2 flex-col justify-center">
          <div className="md:space-x-32 gap-2 md:flex grid grid-cols-4 justify-items-center w-full md:justify-center">
            <Image alt="Technology Partner" height={100} width={100} src="/images/tp1.png" />
            <Image alt="Technology Partner" height={100} width={100} src="/images/tp2.png" />
            <Image alt="Technology Partner" height={100} width={100} src="/images/tp3.png" />
            <Image alt="Technology Partner" height={100} width={100} src="/images/tp4.png" />
          </div>
          <div className="md:space-x-32 gap-2 md:flex grid grid-cols-5 justify-items-center w-full md:justify-center">
            <Image alt="Technology Partner" height={100} width={100} src="/images/tp5.png" />
            <Image alt="Technology Partner" height={100} width={100} src="/images/tp6.png" />
            <Image alt="Technology Partner" height={100} width={100} src="/images/tp7.png" />
            <Image alt="Technology Partner" height={100} width={100} src="/images/tp8.png" />
            <Image alt="Technology Partner" height={100} width={100} src="/images/tp9.png" />
          </div>
          <div className="md:space-x-32 gap-2 md:flex grid grid-cols-4 justify-items-center w-full md:justify-center">
            <Image alt="Technology Partner" height={100} width={100} src="/images/tp10.png" />
            <Image alt="Technology Partner" height={100} width={100} src="/images/tp11.png" />
            <Image alt="Technology Partner" height={100} width={100} src="/images/tp12.png" />
            <Image alt="Technology Partner" height={100} width={100} src="/images/tp13.png" />
          </div>
        </div>
      </div>
      <div className="bg-[#FFFAF2] py-8 p-4 w-full text-black flex items-center justify-center">
        <div className="w-full md:w-[45%] space-y-8">
          <h1 className="text-center text-2xl md:text-4xl font-bold">Our <span className="text-[#F19F1F]">Achievements</span></h1>
          <p className="text-[#676767] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <div className="flex flex-row justify-center">
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
      <div className="text-gray-600 w-full space-y-6 flex flex-col justify-between items-center">
        <h1 className="text-4xl text-center font-bold">Content <span className="text-[#FFAB2E]">Hub</span></h1>
        <ul className="w-full flex md:space-x-40 space-x-6 text-[#FFAB2E] items-center justify-center bg-gradient-to-r  from-white via-[#F4F4F4] to-white h-[50px]">
          <li className={classActive}>Blog</li>
          <li>News</li>
          <li>Case Study</li>
          <li>Events</li>
        </ul>

        <div className="flex flex-col p-4 md:flex-row space-y-2 md:space-y-0 md:space-x-10 items-center justify-center">
          {
            events.map((event, idx) => {
              return <ContentCard key={idx} content={event} />
            })
          }
        </div>
        <div className="w-full flex items-center justify-center">
          <Link href="/blogs"><button className="bg-[#FFAB2E] p-4 rounded">See More</button></Link>
        </div>
      </div>
    </div>
  );
}
