import Router from 'next/router';
import React, { useEffect } from 'react';
import CardHistory from '../../Components/CardHistory';
import Layout from '../../Components/Layout';
import api from '../../services/api';

const HistoryPage = () => {

    const addReviewHandler = (id) => {
        Router.push({
            pathname: `/history/${id}`
        })
    }

    const getReservations = async () => {
        await api.getReservation(localStorage.getItem('userToken'))
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getReservations()
    }, [])


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
                    onClickReview={() => addReviewHandler(1)}
                />
                <CardHistory
                    bookingId='#8887hs6FF'
                    date='12/22/2022'
                    image='https://placeimg.com/400/225/arch'
                    locationVilla='Pujon, Malang'
                    nameVilla='Alterra Indah'
                    totalPayment='Rp. 30.000.000'
                    onClickReview={() => addReviewHandler(2)}
                />
            </div>
        </Layout>
    );
}

export default HistoryPage;
