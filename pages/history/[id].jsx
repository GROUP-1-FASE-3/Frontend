import React, { useState } from 'react';
import Layout from '../../Components/Layout';
import Rating from '../../Components/RatingComponents/rating';

const AddReview = () => {
    const [ratingValue, setRatingValue] = useState(undefined);

    const handleRatingAction = (value) => {
        setRatingValue(value);
    };
    return (
        <Layout page='Add Review'>
            <div className="card border-[#D9D9D9] border lg:p-5 md:p-1 lg:mt-16 md:mt-10 sm:mt-10 xs:mt-10">
                <div className="card-body grid md:grid-cols-2 sm:grid-cols-1 lg:gap-20 md:gap-10">
                    <div className='lg:w-[357px] xl:w-[457px]'>
                        <img src="https://placeimg.com/400/225/arch" alt="car!" className='w-full rounded' />
                        <div className='grid grid-cols-2 border-none lg:gap-5 md:gap-y-3 md:justify-evenly xs:gap-1 lg:text-2xl md:text-lg mt-10'>
                            <p className='text-stay-primary'>Booking ID</p>
                            <p className='text-[#BBBBBB] text-end'>#88823j2</p>
                            <p className='text-stay-primary'>Total Payment</p>
                            <p className='text-[#BBBBBB] text-end'>Rp. 30.000.000</p>
                            <p className='text-stay-primary'>Alterra Indah</p>
                            <p className='text-[#BBBBBB] text-end'>Pujon, Malang</p>
                            <p className='text-stay-primary'>Date</p>
                            <p className='text-[#BBBBBB] text-end'>22/12/2022</p>
                        </div>
                    </div>
                    <div className='text-stay-primary md:mt-0 sm:mt-10 xs:mt-10'>
                        <h1 className='sm:text-2xl xs:text-xl mb-5'>Give Stars</h1>
                        <Rating
                            iconSize="l"
                            showOutOf={true}
                            enableUserInteraction={true}
                            onClick={handleRatingAction}
                        />
                        <form action="">
                            <input type="hidden" value={ratingValue} />
                            <div className="form-control w-full">
                                <label className="label sm:text-2xl xs:text-xl">
                                    Add Feedback
                                </label>
                                <textarea
                                    // value={username}
                                    // onChange={(e) => setUsername(e.target.value)}
                                    className="p-5 h-[200px] bg-[#F8F8F880] w-full shadow-md placeholder:text-black rounded focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
                                ></textarea>
                            </div>
                            <div className='text-end lg:mt-14 xs:mt-8'>
                                <button className='py-2.5 bg-stay-secondary text-white lg:w-[210px] md:w-[210px] xl:w-[210px] xs:w-full rounded'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default AddReview;
