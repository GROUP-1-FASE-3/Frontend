import React from 'react';

const Breadcrumbs = ({page}) => {
    return (
        <div>
            <div class="text-[18px] flex gap-3 font-bold text-[#B0B0B0]">
                <p>Home</p>
                <p>/</p>
                <p className='text-stay-primary'>{page}</p>
            </div>
        </div>
    );
}

export default Breadcrumbs;
