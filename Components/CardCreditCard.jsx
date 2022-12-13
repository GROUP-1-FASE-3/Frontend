import React from 'react';
import {FiTrash2} from 'react-icons/fi';

const CardCreditCard = ({ number, type, name, cvv, month, year, onClickDelete }) => {
    return (
        <div className="card w-96 bg-stay-primary text-white">
            <div className="card-body relative">
                <h2 className="card-title">{type}</h2>
                <p>{name}</p>
                <p className='text-4xl'>{number}</p>
                <div className='flex gap-5 w-full justify-end'>
                    <div>
                        <p>CVV</p>
                        <p>{cvv}</p>
                    </div>
                    <div>
                        <p>Expired</p>
                        <p>{month} / {year}</p>
                    </div>
                </div>
            </div>
            <div className="absolute top-3 right-10">
                <button className="text-white" onClick={onClickDelete}><FiTrash2 size={30} /></button>
            </div>
        </div>
    );
}

export default CardCreditCard;
