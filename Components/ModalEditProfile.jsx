import React from "react";

const ModalEditProfile = () => {
    return (
        <div className="pt-2 pr-4 mt-5">
            <label htmlFor="modal-edit-profile" className="btn bg-stay-secondary text-white border-none cursor-pointer">
                Edit Profile
            </label>
            <input type="checkbox" id="modal-edit-profile" className="modal-toggle " />
            <div className="modal ">
                <div className="modal-box relative max-w-none w-[50vw]">
                    <div>
                        <div className="flex justify-between">
                            <span className="text-xl font-bold text-stay-primary">
                                Edit Property
                            </span>
                            <img className=" w-[100px]" src="/images/stay_logo.svg" alt="stay logo" />
                        </div>
                        <div className="flex flex-col text-lg pt-2">
                            <label htmlFor="" className="pb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
                            />
                        </div>
                        <div className="flex flex-col text-lg pt-2">
                            <label htmlFor="" className="pb-1">
                                Gender
                            </label>
                            <input
                                type="text"
                                className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
                            />
                        </div>
                        <div className="flex flex-col text-lg pt-2">
                            <label htmlFor="" className="pb-1">
                                Email
                            </label>
                            <input
                                type="text"
                                className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
                            />
                        </div>
                        <div className="flex flex-col w-full pt-2">
                            <label htmlFor="" className="mb-1">
                                Phone Number
                            </label>

                            <input
                                type="text"
                                className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
                            />
                        </div>

                        <div className="flex justify-end pt-5 gap-5">
                            <label htmlFor="modal-edit-profile" className="btn w-1/6 bg-orange-alta">
                                CANCEL
                            </label>
                            <label
                                htmlFor="" className="btn w-1/6 bg-dark-alta">
                                SAVE
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalEditProfile;
