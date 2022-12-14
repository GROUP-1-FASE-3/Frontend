import Link from 'next/link'
import React from 'react'
import { FaUserCircle } from 'react-icons/Fa'

const Navbar = () => {
    return (
        <div className=" bg-white border-b border-[#E5E5E5]">
            <div className='navbar px-12 lg:px-28'>
                <div className="flex-1">
                    <Link href="/home">
                        <img src="/images/stay_logo.svg" alt="stay logo" className='w-[100px]' />
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Browse by</a></li>
                        <li tabIndex={0}>
                            <a>
                                <FaUserCircle size={25} className='text-[#C3CAD9]' />
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-[#F5F6F7]">
                                <li><a>Login</a></li>
                                <li><a>Register</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
