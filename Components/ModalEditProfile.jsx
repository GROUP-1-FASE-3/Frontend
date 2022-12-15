import React, { useState } from 'react'
import api from '../services/api'
import { useSelector } from "react-redux";

const ModalEditProfile = ({ }) => {

    const [user_name, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [users_image, setUserImage] = useState()
    const currentUsers = useSelector((state) => state.users.currentUser)

    const updateUser = async () => {
        await api.editProfile(localStorage.getItem('userToken'), currentUsers.id, { user_name, email, password, users_image })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleUpdates = (e) => {
        e.preventDefault();
        updateUser()
    }

    return (
        <div className="pt-2 pr-4 mt-5">
            <label htmlFor="modal-edit-profile" className="btn bg-stay-secondary text-white border-none cursor-pointer">
                Edit Profile
            </label>
            <input type="checkbox" id="modal-edit-profile" className="modal-toggle " />
            <div className="modal ">
                <div className="modal-box relative max-w-none w-[50vw]">

                    <form onSubmit={handleUpdates}>
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
                                onChange={(e) => setUserName(e.target.value)}
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
                                onChange={(e) => setEmail(e.target.value)}
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
                        <div className="flex flex-col w-full pt-2">
                            <label htmlFor="" className="mb-1">
                                Password
                            </label>

                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="text"
                                className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
                            />
                        </div>

                        <div className="flex justify-end pt-5 gap-5">
                            <label htmlFor="modal-edit-profile" className="btn w-1/6 bg-orange-alta">
                                CANCEL
                            </label>
                            <button
                                type='submit'
                                className="btn w-1/6 bg-dark-alta">
                                SAVE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalEditProfile;
