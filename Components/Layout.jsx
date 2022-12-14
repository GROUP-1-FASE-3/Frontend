import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';

const Layout = ({ children, page }) => {
    return (
        <div className='bg-white'>
            <Navbar />
            <div className='xl:mx-autolg:mx-[150px] lg:my-[75px] xs:mx-[30px] xs:my-[30px] sm:mx-[100px]'>
                <Breadcrumbs page={page} />
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
