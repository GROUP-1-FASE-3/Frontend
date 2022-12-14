import React, { useState } from 'react';
// import from 'reac'
import AuthPage from '../../Components/AuthPage';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import api from '../../services/api';
import * as Yup from 'yup';
import Router from 'next/router';

const Index = () => {
    const [email, setEmail] = useState('');
    const [user_name, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [phone_number, setPhone] = useState('');
    const [user_images, setUserImages] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const [errors, setErrors] = useState({});

    let schema = Yup.object().shape({
        user_name: Yup.string().required('username is required'),
        email: Yup.string().email('has an email').required('Email is required'),
        password: Yup.string().min(8, "Password has min 8 character").required('Password is required')
    });

    const onRegisterHandler = async () => {
        await api.register({ user_name, email, password, gender, phone_number, user_images })
            .then(response => {
                alert(response.data)
                setEmail('')
                setPassword('')
                setUsername('')
                Router.push({
                    pathname: `/login`
                })
            })
            .catch(error => {
                alert(error)
            })
    }

    const onSubmitRegisterHandler = (e) => {
        e.preventDefault();
        try {
            schema.validateSync(
                {
                    user_name: user_name,
                    email: email,
                    password: password
                },
                {
                    abortEarly: false
                }
            );
            onRegisterHandler();
        } catch (err) {
            const { inner } = err;
            let formErrors = {};

            if (inner && inner[0]) {
                inner.forEach(error => {
                    const { path, message } = error;

                    if (!formErrors[path]) {
                        formErrors[path] = message;
                    }
                });
            }
            setErrors(formErrors);
        }
    }

    return (
        <AuthPage>
            <form className='mt-12' onSubmit={(e) => onSubmitRegisterHandler(e)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <div className='relative'>
                        <input
                            type="text"
                            placeholder="your username"
                            value={user_name}
                            onChange={(e) => setUsername(e.target.value)}
                            className={`p-5 bg-[#3333330F] w-full ${errors.user_name === undefined ? `border-[#00000061] border-b` : `border-error border-b-2`}  placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary`}
                        />
                        <label htmlFor="" className='absolute text-2xl bottom-5 right-5 cursor-pointer text-[#00000061]' onClick={() => setHidePassword(!hidePassword)}>
                            <FaUser />
                        </label>
                    </div>
                    <small className='text-error'>{errors.user_name}</small>

                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email Address</span>
                    </label>
                    <div className='relative'>
                        <input
                            type="text"
                            placeholder="yourmail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`p-5 bg-[#3333330F] w-full ${errors.user_name === undefined ? `border-[#00000061] border-b` : `border-error border-b-2`}  placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary`}
                        />
                        <label htmlFor="" className='absolute bottom-5 right-5 cursor-pointer text-[#00000061]' onClick={() => setHidePassword(!hidePassword)}>
                            @gmail.com
                        </label>
                    </div>
                    <small className='text-error'>{errors.email}</small>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className='relative'>
                        <input type={`${hidePassword ? `password` : `text`}`}
                            placeholder="absdgr&#"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`p-5 bg-[#3333330F] w-full ${errors.user_name === undefined ? `border-[#00000061] border-b` : `border-error border-b-2`} placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary`}
                        />
                        {
                            password !== '' && (
                                <label htmlFor="" className='absolute bottom-5 right-5 cursor-pointer text-2xl' onClick={() => setHidePassword(!hidePassword)}>
                                    {hidePassword ? <IoEye /> : <IoEyeOff />}
                                </label>
                            )
                        }
                    </div>
                    <small className='text-error'>{errors.password}</small>
                </div>
                <div className="mt-6 w-full text-end">
                    <button type='submit' className="btn bg-stay-secondary w-52 border-none">Register</button>
                </div>
            </form>
        </AuthPage>
    );
}

export default Index;
