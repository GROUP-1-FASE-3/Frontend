import React from 'react';

const ModalCreditCard = ({onSubmitCard}) => {
    return (
        <>
            <input type="checkbox" id="modal-card" className="modal-toggle" />
            <label htmlFor="modal-card" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <label htmlFor="modal-card" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Add New Card</h3>
                    <form onSubmit={onSubmitCard}>
                        <div className="flex gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Card Number</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="00000000 000000 000000"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="p-5 w-full border-b border-[#00000061] placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
                                />
                            </div>
                            <div className="form-control w-72">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <select className="select w-full max-w-xs select-bordered select-lg text-sm">
                                    <option disabled selected>Choose type card</option>
                                    <option>Visa</option>
                                    <option>Master Card</option>
                                    <option>Bart</option>
                                    <option>Lisa</option>
                                    <option>Maggie</option>
                                </select>
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
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="p-5 w-full border-b border-[#00000061] placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Year</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="2022"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="p-5 w-full border-b border-[#00000061] placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">CVV</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="345"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="p-5 w-full border-b border-[#00000061] placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
                                />
                            </div>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Yourname"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                className="p-5 w-full border-b border-[#00000061] placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
                            />
                        </div>
                        <div className='flex justify-end mt-5'>
                            <button type='submit' className='bg-stay-secondary text-white rounded py-2 px-5'>Save Card</button>
                        </div>
                    </form>
                </label>
            </label>
        </>
    );
}

export default ModalCreditCard;
