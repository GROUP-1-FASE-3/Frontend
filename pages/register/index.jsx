import React, { useState } from 'react';
import AuthPage from '../../Components/AuthPage';
import {IoEye, IoEyeOff} from 'react-icons/io5';
import {FaUser} from 'react-icons/fa';

const Index = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <AuthPage>
            <form action="" className='mt-12'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <div className='relative'>
                        <input
                            type="text"
                            placeholder="your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="p-5 w-full bg-[#3333330F] w-full border-b border-[#00000061] placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
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
                            className="p-5 w-full bg-[#3333330F] w-full border-b border-[#00000061] placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
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
                    <button className="btn bg-stay-secondary w-52 border-none">Register</button>
                </div>
            </form>
        </AuthPage>
    );
}

export default Index;
