import React from 'react';
import Layout from '../../Components/Layout';
import ModalCreditCard from '../../Components/ModalCreditCard';
import CardCreditCard from '../../Components/CardCreditCard';

const CreditCard = () => {
    return (
        <Layout page='credit-card'>
            <div className="flex mt-10 text-stay-primary content-center mx-12">
                <h1 className='text-3xl font-semibold flex-1'>List Payment</h1>
                <label htmlFor='modal-card' className='bg-stay-secondary text-white rounded px-14 py-2 cursor-pointer'>Add</label>
            </div>
            <div className='grid grid-cols-3 mt-10 mx-12'>
                <CardCreditCard cvv={234} month={12} number='00000-00000-0000' name='mitro' type='visa' year={2024} nu />
            </div>
            <ModalCreditCard />
        </Layout>
    );
}

export default CreditCard;
