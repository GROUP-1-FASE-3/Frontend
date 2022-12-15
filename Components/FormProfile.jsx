import React, { useState } from 'react'
import api from '../services/api'
import { useSelector } from "react-redux";
import axios from 'axios'
import Swal from "sweetalert2";
import { useRouter } from 'next/router'

const FormProfile = ({ full_name, genders, emails, phone_numbers, images }) => {

    const [user_name, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [gender, setGender] = useState()
    const [phone_number, setPhone] = useState()
    const [users_image, setUserImage] = useState()
    const currentUsers = useSelector((state) => state.users.currentUser)
    const router = useRouter()





    // const updateUser = async () => {
    //     const data = new FormData();

    //     data.append('name', user_name)
    //     data.append('email', email)
    //     data.append('password', password)
    //     data.append('gender', gender)
    //     data.append('phone', phone_number)
    //     data.append('image', users_image)

    //     await api.editProfile(localStorage.getItem('userToken'), currentUsers.id, { data })
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    const updateUser = async () => {
        const data = new FormData();

        data.append('user_name', user_name)
        data.append('email', email)
        data.append('password', password)
        data.append('gender', gender)
        data.append('phone_number', phone_number)
        data.append('user_images', users_image)

        await axios.put(`https://rubahmerah.site/users/${currentUsers.id}`, data, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NzEyMDkyMjYsInVzZXJJZCI6NX0.JUtvBQa5WS3E7MnVG19nBdJKY4THcj8ImHrw0-WbhEc`,
                'content-type': 'multipart/form-data',
            }
        })
            .then(response => {
                if (data) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        text: "Updated successfully",
                        showConfirmButton: false,
                        timer: 800,
                    })
                    router.reload(window.location.pathname)
                }
                console.log(response)
            })
            .catch(error => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: { error },
                    showConfirmButton: true,
                });
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
                        <img src={images} alt="profileImg" className='h-[100px] my-6' />
                    </div>
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
                    className='my-10 px-10 py-8 bg-white'
                    onSubmit={(e) => handleUpdates(e)}
                >
                    <div className="flex justify-between">
                        <span className="text-xl font-bold text-stay-primary">
                            Edit Personal Info
                        </span>
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
                    <div className="flex flex-col w-full pt-2">
                        <label htmlFor="" className="mb-1">
                            Choose File
                        </label>
                        <input
                            onChange={(e) => setUserImage(e.target.files)}
                            type="file"
                            className="file-input w-full max-w-xs" />
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
