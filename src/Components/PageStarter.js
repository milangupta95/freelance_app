import * as React from 'react';
import { Button } from './ui/Button';

export const PageStarter = ({tit1Col,tit1,tit2,description,imageSrc,descColor,desc}) => {
    return (
        <div className="px-20 flex items-center h-[80vh] w-full bg-cover bg-center" style={{ backgroundImage: `url(${imageSrc})` }}>
            <div className="flex flex-col space-y-8">
                <div className="border-[#F19F1F] space-y-4 border-l-2 px-4">
                    <h1 className="text-4xl">
                        <span style={{color:tit1Col}}>{tit1}</span>
                        <span className="text-[#F19F1F]">{tit2}</span>
                    </h1>
                    <p className="w-[50%]" style={{color: descColor}}>
                        {desc}
                    </p>
                </div>
                <div>
                    <Button buttonText={"Explore"} functionToPerform={null} />
                </div>
            </div>
        </div>
    )
}
