import * as React from 'react';
import { Button } from '../ui/Button';
import Image from 'next/image'
export const ContentCard = ({ date, imageSrc, username, userDes, userImageSrc, description }) => {
    return (
        <div className='bg-[#FFF0DA] space-y-4 p-4 w-[300px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-lg'>
            <Image alt='' height={180} width={300} src={imageSrc}/>
            <div className='flex items-center space-x-4'>
                <Image alt='' height={40} width={40} src={userImageSrc} className='rounded-[50%]' />
                <div>
                    <p>{username}</p>
                    <p className='text-xs'>{userDes}</p>
                </div>
            </div>
            <div>
                {description}
            </div>

            <div>
                {date}
            </div>

            <Button buttonText={"Read More"}></Button>
        </div>
    )
}
