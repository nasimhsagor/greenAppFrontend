import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';
import NavbarBottom from '../pages/Shared/NavbarBottom';

const Main = () => {
    return (
        <div>
        <Navbar></Navbar>
        <NavbarBottom></NavbarBottom>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Main;