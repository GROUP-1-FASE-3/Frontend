import React from 'react';
import BookingCard from '../../Components/BookingCard';
import Navbar from '../../Components/Navbar';
import FormBooking from '../../elements/Stepper/FormComponent/FormBooking';
function index() {
  return (
    <div className="max-w-screen flex-wrap ">
      <div className=" m-20">
        <Navbar />
        <div>
          <h1 className="text-primary text-xl font-bold text-center mt-5"> Booking Information</h1>
          <h5 className="text-secondary text-md font-thin text-center mt-3"> Please fill up the blank fields below</h5>
        </div>

        <section className=" grid grid-cols-2 gap-6 my-10">
          <div>
            <BookingCard />
          </div>
          <FormBooking />
        </section>
      </div>
    </div>
  );
}

export default index;
