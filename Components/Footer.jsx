import React from 'react'
import { RiHomeLine } from 'react-icons/ri'

const Footer = () => {
    return (

        <footer className="footer p-10 bg-base-200 text-base-content mt-auto border-t border-[#E5E5E5]">
            <div className='flex ml-8'>
                <img src="/images/stay_logo.svg" alt="stay logo" className='w-[100px]' />
            </div>
            <div>
                <span className="footer-title text-blue-900">For Beginners</span>
                <a className="link link-hover text-slate-400">New Account</a>
                <a className="link link-hover text-slate-400">Start Booking a Room</a>
            </div>
            <div>
                <span className="footer-title text-blue-900">Explore Us</span>
                <a className="link link-hover text-slate-400">Our Careers</a>
                <a className="link link-hover text-slate-400">Privacy</a>
                <a className="link link-hover text-slate-400">Terms & Conditions</a>
            </div>
            <div>
                <span className="footer-title text-blue-900">Connect Us</span>
                <a className="link link-hover text-slate-400">support@stay.id</a>
                <a className="link link-hover text-slate-400">021 - 2208 - 1996</a>
                <a className="link link-hover text-slate-400">Stay, Ahmad Yani, Surabaya</a>
            </div>
        </footer>

    )
}

export default Footer
