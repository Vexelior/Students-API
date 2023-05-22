import { React, Outlet } from 'react';
import Navbar from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Footer';
import './Layout.css';

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;