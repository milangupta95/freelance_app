import * as React from 'react';

export const BenifitCard = ({title,description,imagesrc}) => {
    return (
        <div className='relative'>
            <div className='w-[200px] border-4 border-[#F19F1F] bg-[#FFFFFF] z-[1001] tracking-wide py-2 mx-[70px]'><p className='text-center'>{title}</p></div>
            <div className='space-y-6 w-[330px] h-[350px] flex flex-col items-center justify-center mt-[-15px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg'>
                <img src={imagesrc}/>
                <div className='text-center'>
                    {description}
                </div>
            </div>
        </div>
    )
}
