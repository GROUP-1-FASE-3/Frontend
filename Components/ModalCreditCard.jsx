import React from 'react';

const ModalCreditCard = ({
    onSubmitCard, number, onChangeNumber, type,
    onChangeType, cvv, onChangeCVV, month,
    onChangeMonth, name, onChangeName, year, onChangeYear,
    errorNumber, errors, errorCVV, errorMonth, errorName,
    errorType, errorYear }) => {

    return (
        <>
            <input type="checkbox" id="modal-card" className="modal-toggle" />
            <label htmlFor="modal-card" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <label htmlFor="modal-card" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Add New Card</h3>
                    <form onSubmit={(e) => onSubmitCard(e)}>
                        <div className="flex gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Card Number</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="00000000-000000-000000"
                                    value={number}
                                    onChange={(e) => onChangeNumber(e.target.value)}
                                    className="p-5 w-full border-b border-[#00000061] placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
                                />
                                <small className='text-error'>{errorNumber}</small>
                            </div>
                            <div className="form-control w-72">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <select
                                    className="select w-full max-w-xs select-bordered select-lg text-sm"
                                    value={type}
                                    onChange={(e) => onChangeType(e.target.value)}
                                >
                                    <option>Choose Type</option>
                                    <option value='Visa'>Visa</option>
                                    <option value='Master Card'>Master Card</option>
                                    <option value='Genius'>Genius</option>
                                </select>
                                <small className='text-error'>{errorType}</small>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Month</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="03"
                                    value={month}
                                    onChange={(e) => onChangeMonth(e.target.value)}
                                    className="p-5 w-full border-b border-[#00000061] placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
                                />
                                <small className='text-error'>{errorMonth}</small>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Year</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="2022"
                                    value={year}
                                    onChange={(e) => onChangeYear(e.target.value)}
                                    className="p-5 w-full border-b border-[#00000061] placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
                                />
                                <small className='text-error'>{errorYear}</small>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">CVV</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="345"
                                    value={cvv}
                                    onChange={(e) => onChangeCVV(e.target.value)}
                                    className="p-5 w-full border-b border-[#00000061] placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
                                />
                                <small className='text-error'>{errorCVV}</small>
                            </div>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Yourname"
                                value={name}
                                onChange={(e) => onChangeName(e.target.value)}
                                className="p-5 w-full border-b border-[#00000061] placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
                            />
                            <small className='text-error'>{errorName}</small>
                        </div>
                        <div className='flex justify-end mt-5'>
                            <button type='submit' className='bg-stay-secondary text-white rounded py-2 px-5'>
                                {/* <label htmlFor={`${errors === 0 && 'modal-card'}`} className='cursor-pointer'> */}
                                    Save Card
                                {/* </label> */}
                            </button>
                        </div>
                    </form>
                </label>
            </label>
        </>
    );
}

export default ModalCreditCard;
