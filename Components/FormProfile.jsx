import React from 'react'
import ModalEditProfile from './ModalEditProfile'

const FormProfile = () => {
    return (
        <div className='my-20 container mx-auto'>
            <h1 className='font-bold text-3xl text-stay-primary'>Personal Info</h1>
            <div className='mt-10'>
                <form>
                    <div>
                        <label className="label" htmlFor='fullName'>
                            <span className="label-text text-stay-primary text-xl">Full Name</span>
                        </label>
                        <input value="Gilang" disabled type="text" placeholder="Type here" className="input input-bordered w-full lg:w-5/12 " />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-stay-primary text-xl">Gender</span>
                        </label>
                        <input value="Laki-Laki" disabled type="text" placeholder="Type here" className="input input-bordered w-full lg:w-5/12 " />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-stay-primary text-xl">Email Address</span>
                        </label>
                        <input value="gilang@gmail.com" disabled type="text" placeholder="Type here" className="input input-bordered w-full lg:w-5/12 " />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-stay-primary text-xl">Phone Number</span>
                        </label>
                        <input value="08211139454" disabled type="text" placeholder="Type here" className="input input-bordered w-full lg:w-5/12 " />
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
