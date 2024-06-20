import * as React from 'react';
import Image from 'next/image'

export const BenifitCard = ({title,description,imagesrc}) => {
    return (
        <div className='w-full md:w-fit relative'>
            <div className='md:w-[200px] w-[75%] border-4 border-[#F19F1F] bg-[#FFFFFF] z-[1001] tracking-wide py-2 mx-[15%] md:mx-[22%]'><p className='text-center'>{title}</p></div>
            <div className='space-y-6 md:w-[330px] w-full md:h-[350px] h-full flex flex-col items-center justify-center mt-[-15px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg'>
                <Image alt='' height={100} width={100} src={imagesrc}/>
                <div className='text-center text-sm p-2 md:text-lg'>
                    {description}
                </div>
            </div>
        </div>
    )
}
