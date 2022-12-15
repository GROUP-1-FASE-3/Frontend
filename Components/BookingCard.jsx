import React from 'react';
import Image from 'next/image';
import detail1 from '../../Frontend/src/images/img-booking.png';
const BookingCard = () => {
  return (
    <div className="card-compact w-full bg-base-100 mt-10">
      <figure className="relative w-full md:w-[280px] md:h-[150px] rounded-2xl">
        <Image src={detail1} alt="image 1 " />
        <div className="grid grid-rows-2">
          <h2 className="card-title font-bold text-sm mt-4">Villa Alterra Indah</h2>
          <h2 className=" font-thin text-secondary text-xs">Jl. Raya Tidar No.23, Karangbesuki, Kec. Sukun, Kota Malang, Jawa Timur 65146</h2>
        </div>
      </figure>
    </div>
  );
};

export default BookingCard;
