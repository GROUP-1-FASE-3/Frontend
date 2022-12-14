import React from 'react';
import Link from 'next/link';

const Breadcrumbs = ({ page, href }) => {
    return (
        <div>
            <div className="text-[18px] flex gap-3 font-bold text-[#B0B0B0]">
                <Link href='/'>Home</Link>
                <p>/</p>
                <p className='text-stay-primary'>{page}</p>
            </div>
        </div>
    );
}

export default Breadcrumbs;
