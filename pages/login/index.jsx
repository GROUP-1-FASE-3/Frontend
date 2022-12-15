import React, { useEffect, useState } from 'react';
import AuthPage from '../../Components/AuthPage';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import api from '../../services/api';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import { updateUser } from '../../store/slice/userSlice';
import Swal from "sweetalert2";

const LoginPage = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const router = useRouter()
    const dispatch = useDispatch()

    const onLoginHandler = async () => {
        await api.login({ email, password })
            .then(response => {
                const data = response.data.data
                if (data) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        text: "Signed successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    })
                }
                setEmail('')
                setPassword('')
                Cookies.set('userToken', data.token)
                localStorage.setItem('userToken', data.token)
                dispatch(updateUser(data))
                router.push('/home')
            })
            .catch(error => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Email or Password incorrect",
                    showConfirmButton: true,
                });
            })
    }


    const onLoginSubmitHandler = (e) => {
        onLoginHandler();
        e.preventDefault();
    }
    useEffect(() => {
         if (localStorage.getItem('userToken')) {

         } else {
             console.log('kosong')
         }
    }, [Cookies.userToken])

    return (
        <AuthPage>
            <form className='mt-12' onSubmit={(e) => onLoginSubmitHandler(e)}>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text">Email Address</span>
                    </label>
                    <div className='relative'>
                        <input
                            type="text"
                            placeholder="yourmail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-5 bg-[#3333330F] w-full border-t-0 border-l-0 border-r-0 border-[#00000061] placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
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
                            className="p-5 w-full bg-[#3333330F] border-t-0 border-l-0 border-r-0 border-[#00000061] placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
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
                    <button type='submit' className="btn bg-stay-secondary w-52 border-none">Login</button>
                </div>
            </form>
        </AuthPage>
    );
}
export default LoginPage;
