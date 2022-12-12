import React from 'react';
import Image from 'next/image';


const AuthPage = ({children}) => {
    return (
        <div className="hero min-h-screen bg-bg-primary xs:max-lg:bg-login-pattern bg-left-bottom bg-cover">
            <div className="hero-overlay bg-opacity-60 lg:hidden"></div>
            <div className="hero-content xs:max-lg:flex-col">
                <div className="card w-1/2 xs:max-lg:bg-white md:w-96 sm:w-92 xs:w-80">
                    <div className="card-body flex">
                        <img src='/images/stay_logo.svg' alt='stay logos' className='sm:w-[1500px] xs:max-w-[110px] md:max-w-[150px]' />
                        {children}
                    </div>
                </div>
                <div className="text-center lg:text-left w-1/2 xs:max-lg:hidden">
                    <Image src='/images/login_banner.jpg' alt='login banner' width={666} height={734} />
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
