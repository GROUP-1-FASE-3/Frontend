import React from "react";
import { BiEditAlt } from 'react-icons/bi';

const ModalEditProperty = () => {
    return (
        <div className="pt-2 pr-4">
            <label htmlFor="my-modal-4" className="cursor-pointer">
                <BiEditAlt />
            </label>
            <input type="checkbox" id="my-modal-4" className="modal-toggle " />
            <div className="modal ">
                <div className="modal-box relative max-w-none w-[50vw]">
                    <form action="">
                        <div className="flex justify-between">
                            <label htmlFor="" className="text-xl font-bold text-stay-primary">
                                Edit Property
                            </label>
                            <img className=" w-[100px]" src="/images/stay_logo.svg" alt="stay logo" />
                        </div>
                        <div className="flex flex-col text-lg pt-2">
                            <label htmlFor="" className="pb-1">
                                Which of these best describes your place?
                            </label>
                            <input
                                type="text"
                                className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
                            />
                        </div>
                        <div className="flex flex-col text-lg pt-2">
                            <label htmlFor="" className="pb-1">
                                What type of place will guests have?
                            </label>
                            <input
                                type="text"
                                className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
                            />
                        </div>
                        <div className="flex flex-col text-lg pt-2">
                            <label htmlFor="" className="pb-1">
                                Where's your place located?
                            </label>
                            <input

                                type="text"
                                className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
                            />
                        </div>
                        <div className="flex flex-col w-full pt-2">
                            <label htmlFor="" className="mb-1">
                                Detail Properties
                            </label>

                            <input
                                placeholder="How many guests  your property can provide?"
                                type="text"
                                className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
                            />
                            <input
                                placeholder="How many bedrooms  your property can provide?"
                                type="text"
                                className="mt-3 input input-bordered max-w-2xl w-full bg-white border border-gray-400"
                            />
                            <input
                                placeholder="How many beds  your property can provide?"
                                type="text"
                                className="mt-3 input input-bordered max-w-2xl w-full bg-white border border-gray-400"
                            />
                        </div>

                        <div className="flex justify-end pt-5 gap-5">
                            <label htmlFor="my-modal-4" className="btn w-1/6 bg-orange-alta">
                                CANCEL
                            </label>
                            <label
                                htmlFor="" className="btn w-1/6 bg-dark-alta">
                                SAVE
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalEditProperty;
