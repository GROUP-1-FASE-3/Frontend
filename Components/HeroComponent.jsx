import React from 'react';
import Image from 'next/image';

const HeroComponent = ({button, imgSrc, title, desc}) => {
    return (
        <div className='mt-10'>
            <div className='flex justify-center items-center'>
                <div className='pr-20 mr-20 w-[572px]'>
                    {title}
                    {desc}
                    <button className='btn bg-stay-secondary border-none mt-5 mb-5 w-[210px]'>{button}</button>
                </div>
                <div className='pl-20 pb-10'>
                    <Image className='border-none rounded-2xl' src={imgSrc} alt='home' width={560} height={443} />
                </div>
            </div>
        </div>
    );
}

export default HeroComponent;
