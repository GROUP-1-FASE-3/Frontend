import React from 'react';
import CardHistory from '../../Components/CardHistory';
import Layout from '../../Components/Layout';

const HistoryPage = () => {
    return (
        <Layout page={'History'}>
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
        </Layout>
    );
}

export default HistoryPage;
