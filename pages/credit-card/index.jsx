import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import Layout from '../../Components/Layout';
import ModalCreditCard from '../../Components/ModalCreditCard';
import CardCreditCard from '../../Components/CardCreditCard';
import api from '../../services/api';

const CreditCard = () => {
    const currentUsers = useSelector((state) => state.users.currentUser)
    const [name, setName] = useState('');
    const [number, setNumber] = useState();
    const [cvv, setCVV] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [type, setType] = useState('');
    const [errors, setErrors] = useState({});
    const token = localStorage.getItem('userToken');
    const user_id = currentUsers.id;
    const newCVV = parseInt(cvv);
    const newMonth = parseInt(month);
    const newYear = parseInt(year);

    let schema = Yup.object().shape({
        name: Yup.string().required('name is required'),
        number: Yup.string().required('Number is required'),
        type: Yup.string().required('Password is required'),
        cvv: Yup.string().required('Password is required'),
        month: Yup.string().required('Password is required'),
        year: Yup.string().required('Password is required'),
    });

    const onAddCreditCard = async() => {
        await api.addCreate(token, {name, number, type, newCVV, newMonth, newYear, user_id})
        .then(response => {
            alert(response.data.message)
            setCVV('')
            setMonth('')
            setName('')
            setNumber('')
            setType('')
            setYear('')
        })
        .catch(error => {
            alert(error)
        })
    }

    const onSubmitAddCard = (e) => {
        e.preventDefault();
        try {
            schema.validateSync(
                {
                    name: name,
                    number: number,
                    type: type,
                    cvv: cvv,
                    month: month,
                    year: year
                },
                {
                    abortEarly: false
                }
            );
            onAddCreditCard();
        } catch (err) {
            const { inner } = err;
            let formErrors = {};

            if (inner && inner[0]) {
                inner.forEach(error => {
                    const { path, message } = error;

                    if (!formErrors[path]) {
                        formErrors[path] = message;
                    }
                });
            }
            setErrors(formErrors);
        }
    }

    return (
        <Layout page='credit-card'>
            <div className="flex mt-10 text-stay-primary content-center mx-12">
                <h1 className='text-3xl font-semibold flex-1'>List Payment</h1>
                <label htmlFor='modal-card' className='bg-stay-secondary text-white rounded px-14 py-2 cursor-pointer'>Add</label>
            </div>
            <div className='grid grid-cols-3 mt-10 mx-12'>
                <CardCreditCard cvv={234} month={12} number='00000-00000-0000' name='mitro' type='visa' year={2024} />
            </div>
            <ModalCreditCard
                errors={errors.length}
                onSubmitCard={onSubmitAddCard}
                cvv={cvv}
                onChangeCVV={setCVV}
                month={month}
                onChangeMonth={setMonth}
                name={name}
                onChangeName={setName}
                number={number}
                onChangeNumber={setNumber}
                type={type}
                onChangeType={setType}
                year={year}
                onChangeYear={setYear}
                errorNumber={errors.number}
                errorCVV={errors.cvv}
                errorMonth={errors.month}
                errorName={errors.name}
                errorType={errors.type}
                errorYear={errors.year}
            />
        </Layout>
    );
}

export default CreditCard;
