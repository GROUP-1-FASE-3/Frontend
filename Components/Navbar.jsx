import React from 'react'
import { RiHomeLine } from 'react-icons/Ri'
import { FaRegUserCircle } from 'react-icons/Fa'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1 ml-14">
                    <a className="btn btn-ghost normal-case text-xl"><RiHomeLine /> Stay</a>
                </div>
                <div className="flex-none mr-14">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Browse by</a></li>
                        <li tabIndex={0}>
                            <a>
                                <FaRegUserCircle />
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-base-100">
                                <li><a>Login</a></li>
                                <li><a>Register</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Navbar
