import React, { useState } from 'react';
import Layout from '../../Components/Layout';
import ModalCreditCard from '../../Components/ModalCreditCard';
import CardCreditCard from '../../Components/CardCreditCard';
import api from '../../services/api';
import Cookies from 'js-cookie';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import Swal from "sweetalert2";

const CreditCard = ({ creditCards }) => {
    const currentUsers = useSelector((state) => state.users.currentUser)
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [type, setType] = useState('');
    const [cvv, setCVV] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [errors, setErrors] = useState({});

    let schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        number: Yup.string().required('Number is required'),
        type: Yup.string().required('Type is required'),
        cvv: Yup.number('CVV is number').required('CVV is required'),
        month: Yup.number('Month is number').required('Month is required'),
        year: Yup.number('Year is number').required('Year is required'),
    });

    const token = Cookies.get('userToken');
    const user_id = currentUsers.id;

    const onAddCard = async () => {
        await api.addCard(token, { user_id })
            .then(response => {
                const data = response.data.data;
                if (data) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        text: "Add Payment Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    })
                }
            })
            .catch(error => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Error Add Payment",
                    showConfirmButton: true,
                });
            })
    }

    const onSubmitAddCreditCard = (e) => {
        e.preventDefault();
        try {
            schema.validateSync(
                {
                    type: type,
                    name: name,
                    number: number,
                    cvv: cvv,
                    month: month,
                    year: year,
                    user_id: user_id
                },
                {
                    abortEarly: false
                }
            );
            onAddCard();
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
            <div className='grid grid-cols-3 mt-10 mx-8 gap-5'>
                {creditCards.map(card => (
                    <CardCreditCard
                        cvv={card.cvv}
                        month={card.month}
                        number={card.number}
                        name={card.name}
                        type={card.type}
                        year={card.year}
                    />
                ))}
            </div>
            <ModalCreditCard
                onSubmitCard={onSubmitAddCreditCard}
                errorCVV={err}
            />
        </Layout>
    );
}

export async function getServerSideProps({ req }) {
    const token = req.cookies.userToken;
    const user_id = req.cookies.user_id;
    const result = await api.getCard(token, user_id)
    const data = result.data.data
    return {
        props: {
            creditCards: data
        }
    }
}

export default CreditCard;
