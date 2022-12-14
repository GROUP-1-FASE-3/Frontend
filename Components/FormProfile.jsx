import React from 'react'
import ModalEditProfile from './ModalEditProfile'

const FormProfile = ({ full_name, gender, email, phone_number }) => {
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
                        <input disabled type="text" placeholder="Type here" className="input input-bordered w-full lg:w-10/12 " />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-stay-primary text-xl">Email</span>
                        </label>
                        <input disabled type="text" placeholder="Type here" className="input input-bordered w-full lg:w-10/12 " />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-stay-primary text-xl">Phone Number</span>
                        </label>
                        <input disabled type="text" placeholder="Type here" className="input input-bordered w-full lg:w-10/12 " />
                    </div>
                    <div>
                        <ModalEditProfile />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormProfile
