import React from 'react';
import Image from 'next/image';
// import detail1 from '../../Frontend/src/images/img-booking.png';
const BookingCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="mx-10 mt-10">
          {/* <Image src={detail1} alt="image 1 " /> */}
        </figure>
        <div className="card-body ">
          <div className="grid grid-cols-2 mt-2 ">
            <p className="col">Booking ID</p>
            <p className="col text-end"> #B2578110AA</p>
          </div>
          <div className="grid grid-cols-2 mt-2 ">
            <p className="col">Purchase Date</p>
            <p className="col text-end ">31/12/22</p>
          </div>
          <div className="grid grid-cols-2 mt-2 ">
            <p className="col">Room Price</p>
            <p className="col text-end ">1.945.000</p>
          </div>
          <div className="grid grid-cols-2  mt-2 ">
            <p className="col">Number of Nights</p>
            <p className="col text-end ">2</p>
          </div>
          <div className="grid grid-cols-2  mt-2 ">
            <p className="col">Number of Rooms</p>
            <p className="col text-end ">1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
