import React, { useState } from 'react'
import api from '../services/api'
import { useSelector } from "react-redux";

const FormProfile = ({ full_name, genders, emails, phone_numbers }) => {

    const [user_name, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [gender, setGender] = useState()
    const [phone_number, setPhone] = useState()
    const [user_image, setUserImage] = useState()
    const currentUsers = useSelector((state) => state.users.currentUser)

    const updateUser = async () => {
        await api.editProfile(localStorage.getItem('userToken'), currentUsers.id, { user_name, email, password, user_image, gender, phone_number })
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
        <div className='my-20 container mx-auto'>
            <h1 className='font-bold text-3xl text-stay-primary'>Personal Info</h1>
            <div className='mt-10'>
                <form>
                    <div>
                        <label className="label" htmlFor='fullName'>
                            <span className="label-text text-stay-primary text-xl">Full Name</span>
                        </label>
                        <input value={full_name} disabled type="text" placeholder="Type here" className="input input-bordered w-full lg:w-10/12 " />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-stay-primary text-xl">Gender</span>
                        </label>
                        <input value={genders} disabled type="text" placeholder="Type here" className="input input-bordered w-full lg:w-10/12 " />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-stay-primary text-xl">Email</span>
                        </label>
                        <input value={emails} disabled type="text" placeholder="Type here" className="input input-bordered w-full lg:w-10/12 " />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-stay-primary text-xl">Phone Number</span>
                        </label>
                        <input value={phone_numbers} disabled type="text" placeholder="Type here" className="input input-bordered w-full lg:w-10/12 " />
                    </div>
                </form>
                <form
                    className='my-10 px-10 py-8 bg-white rounded-lg border border-border-primary shadow-xl'
                    onSubmit={(e) => handleUpdates(e)}
                >
                    <div className="flex justify-between">
                        <span className="text-xl font-bold text-stay-primary">
                            Edit Personal Info
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
                            onChange={(e) => setGender(e.target.value)}
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
                            onChange={(e) => setPhone(e.target.value)}
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

                    <div className="flex pt-5 gap-5">
                        <button
                            type='submit'
                            className="btn w-1/6 bg-dark-alta">
                            SAVE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormProfile
