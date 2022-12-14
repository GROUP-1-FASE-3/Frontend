import Link from 'next/link'
import React, { useCallback } from 'react'
import { FaUserCircle } from 'react-icons/Fa'
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { clearUser } from '../store/slice/userSlice';
import Swal from "sweetalert2";

const Navbar = () => {

    const [cookie, removeCookie] = useCookies(["userToken"]);
    const router = useRouter()
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        Swal.fire({
            title: "Are you sure?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes",
            cancelButtonColor: "#d33",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    text: "Logout successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                dispatch(clearUser());
                localStorage.removeItem("userToken");
                router.push('/login')
            }
        });
    }, []);

    return (
        <div className=" bg-white border-b border-[#E5E5E5]">
            <div className='navbar px-12 lg:px-28'>
                <div className="flex-1">
                    <Link href="/home">
                        <img src="/images/stay_logo.svg" alt="stay logo" className='w-[100px]' />
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 z-10">
                        <li><Link href='/home' >Home</Link ></li>
                        <li><Link href='/property/add'>Add Villa</Link></li>
                        <li tabIndex={0}>
                            <a>
                                <FaUserCircle size={25} className='text-[#C3CAD9]' />
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-[#F5F6F7]">
                                <li><Link href="/profile">Profile</Link></li>
                                <li><Link href='/history'>History</Link></li>
                                <button onClick={() => onLogout()}>LogOut</button>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
