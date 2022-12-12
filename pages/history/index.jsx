import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Breadcrumbs from '../../Components/Breadcrumbs';
import CardHistory from '../../Components/CardHistory';

const HistoryPage = () => {
    return (
        <div className='bg-white'>
            <Navbar />
            <div className='xl:mx-autolg:mx-[150px] lg:my-[75px] xs:mx-[30px] xs:my-[30px] sm:mx-[100px]'>
                <Breadcrumbs page={'History'} />
                <div className='lg:mt-20 xs:mt-10 grid grid-cols-1 gap-y-10'>
                    <CardHistory
                        bookingId='#8887hs6FF'
                        date='12/22/2022'
                        image='https://placeimg.com/400/225/arch'
                        locationVilla='Pujon, Malang'
                        nameVilla='Alterra Indah'
                        totalPayment='Rp. 30.000.000'
                    />
                    <CardHistory
                        bookingId='#8887hs6FF'
                        date='12/22/2022'
                        image='https://placeimg.com/400/225/arch'
                        locationVilla='Pujon, Malang'
                        nameVilla='Alterra Indah'
                        totalPayment='Rp. 30.000.000'
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HistoryPage;
