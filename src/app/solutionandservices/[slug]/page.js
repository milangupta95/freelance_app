'use client'
import { useRouter } from 'next/router'
import { jsonforServices } from '@/data';
import { Button } from '@/Components/ui/Button';
import Image from 'next/image';

export default function Page({ params }) {
    const id = parseInt(params.slug);
    const service = jsonforServices.find((serv) => serv.service_id === id);
    console.log(jsonforServices)
    console.log(service)
    return (
        <div className='bg-white w-full'>
            <div className="px-20 flex h-[80vh] w-full bg-cover bg-center" style={{ backgroundImage: `url(${service.heading_pic_url})` }}>
                <div className="flex w-full flex-col justify-center space-y-8">
                    <div className="border-[#F19F1F] w-[75%] px-4 space-y-4 border-l-2">
                        <h1 className="text-4xl">
                            <span className="text-white">{service.service_name}</span>
                        </h1>
                        <p className="w-full text-white">
                            {service.short_description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full px-10 space-x-20 bg-white text-black items-center justify-center flex flex-col md:flex-row">
                <div className="flex md:w-[40%] w-[100%] items-center">
                    {/* First Image */}
                    <div className="max-w-sm mb-6">
                        <Image
                            src={service.image1}
                            alt="Team hands"
                            width={500}
                            height={700}
                        />
                    </div>
                    {/* Second Image */}
                    <div className="max-w-xs align-bottom ml-[-100px] mt-[200px]">
                        <Image
                            src={service.image2}
                            alt="Team meeting"
                            width={600}
                            height={800}
                        />
                    </div>
                </div>
                <div className="h-full items-center md:w-[45%] w-[100%] space-y-6">
                    <h1 className="px-2 text-[#F19F1F] text-[30px]">{service.service_name}</h1>

                    <p className="text-[18px] text-[#3F444]">
                        {service.description}
                    </p>
                </div>


            </div>

            <div className="h-[60px] bg-white">

            </div>

            <div className="gap-8 md:p-0 p-2 grid md:grid-cols-2 grid-cols-1 justify-items-center">
                {
                    service.points.map((point,idx) => {
                        return (
                            <div key={idx} className="md:w-[80%] w-[100%] group  border-l-8 hover-box hover:text-white  transition duration-1000 ease-in-out  hover:bg-[#F19F1F] text-[#F19F1F] border-[#F19F1F] space-y-4 p-8">
                                <div>{point.logo}</div>
                                <div className=" text-black group-hover:text-white space-y-4">
                                    <h1 className="text-2xl font-extralight">{point.heading}</h1>
                                    <p>{point.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}