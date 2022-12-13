import React, { useState } from 'react';
// import from 'reac'
import AuthPage from '../../Components/AuthPage';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import api from '../../services/api';
import * as yup from 'yup';
import Router from 'next/router';

const Index = () => {
    const [email, setEmail] = useState('');
    const [user_name, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [phone_number, setPhone] = useState('');
    const [user_images, setUserImages] = useState('');
    const [hidePassword, setHidePassword] = useState(true);

    let schema = yup.object().shape({
        user_name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required('Password is required').min(8)
    });

    const onRegisterHandler = async () => {
        await schema
            .isValid({
                user_name: user_name,
                email: email,
                password: password
            })
            .then((valid) => {
                console.log(valid)
                if (valid) {
                    api.register({ user_name, email, password, gender, phone_number, user_images })
                        .then(response => {
                            console.log(response.data)
                            Router.push({
                                pathname: `/login`
                            })
                        })
                        .catch(error => {
                            alert(error)
                        })
                } else {
                    alert(valid)
                }
            })

    }

    const onSubmitRegisterHandler = (e) => {
        onRegisterHandler();
        e.preventDefault();
        setEmail('')
        setPassword('')
        setUsername('')
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
                            className="p-5 bg-[#3333330F] w-full border-b border-[#00000061] placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
                        />
                        <label htmlFor="" className='absolute text-2xl bottom-5 right-5 cursor-pointer text-[#00000061]' onClick={() => setHidePassword(!hidePassword)}>
                            <FaUser />
                        </label>
                    </div>
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
                            className="p-5  bg-[#3333330F] w-full border-b border-[#00000061] placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
                        />
                        <label htmlFor="" className='absolute bottom-5 right-5 cursor-pointer text-[#00000061]' onClick={() => setHidePassword(!hidePassword)}>
                            @gmail.com
                        </label>
                    </div>
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
                            className="p-5 w-full bg-[#3333330F] border-b border-[#00000061] placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
                        />
                        {
                            password !== '' && (
                                <label htmlFor="" className='absolute bottom-5 right-5 cursor-pointer text-2xl' onClick={() => setHidePassword(!hidePassword)}>
                                    {hidePassword ? <IoEye /> : <IoEyeOff />}
                                </label>
                            )
                        }
                    </div>
                </div>
                <div className="mt-6 w-full text-end">
                    <button type='submit' className="btn bg-stay-secondary w-52 border-none">Register</button>
                </div>
            </form>
        </AuthPage>
    );
}

export default Index;
