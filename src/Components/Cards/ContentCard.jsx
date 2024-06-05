import * as React from 'react';
import { Button } from '../ui/Button';

export const ContentCard = ({ date, imageSrc, username, userDes, userImageSrc, description }) => {
    return (
        <div className='bg-[#FFF0DA] space-y-4 p-4 w-[300px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-lg'>
            <img src={imageSrc} className='h-[180px] w-full' />
            <div className='flex items-center space-x-4'>
                <img src={userImageSrc} className='w-[40px] h-[40px] rounded-[50%]' />
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
