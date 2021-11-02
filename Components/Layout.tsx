import React from 'react';
import Navbar from './Header/Navbar';

const Layout = ({children}) => {
    return (
        <div className='content'>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default Layout;