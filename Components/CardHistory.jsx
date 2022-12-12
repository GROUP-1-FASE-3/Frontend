import React from 'react';

const CardHistory = ({ image, bookingId, totalPayment, nameVilla, locationVilla, date }) => {
    return (
        <div className="card w-full grid md:grid-cols-2 p-5 bg-white border border-[#D9D9D9] shadow-sm">
            <figure className='lg:border-r-2 rounded-none lg:border-[#D9D9D9] xl:pr-24 lg:pr-10 md:p-2 sm:m-0'>
                <img
                    src={image}
                    alt={nameVilla}
                    className='xl:w-[457px] xl:h-[264px] lg:w-[350px] lg:h-[250px] rounded-2xl md:w-full md:h-[250px] md:object-cover sm:w-full'
                />
            </figure>
            <div className="card-body lg:text-end xl:text-2xl lg:text-lg xs:p-2 sm:p-5 md:p-5">
                <div className='grid grid-cols-2 border-none lg:gap-2 md:gap-y-3 md:justify-evenly xs:gap-1'>
                    <p className='text-stay-primary'>Booking ID</p>
                    <p className='text-[#BBBBBB] text-end'>{bookingId}</p>
                    <p className='text-stay-primary'>Total Payment</p>
                    <p className='text-[#BBBBBB] text-end'>{totalPayment}</p>
                    <p className='text-stay-primary'>{nameVilla}</p>
                    <p className='text-[#BBBBBB] text-end'>{locationVilla}</p>
                    <p className='text-stay-primary'>Date</p>
                    <p className='text-[#BBBBBB] text-end'>{date}</p>
                </div>
                <div className="card-actions md:justify-end mt-6 sm:justify-center">
                    <button className="rounded-none bg-stay-secondary border-none px-16 xs:px-10 py-2.5 text-white text-base sm:w-full xs:w-full lg:w-auto md:w-auto">Add Review</button>
                </div>
            </div>
        </div>
    );
}

export default CardHistory;
