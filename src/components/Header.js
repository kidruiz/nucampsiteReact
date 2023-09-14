import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from '../app/assets/img/logo.png';

const Header = () => {
    return (
        <Navbar dark color='primary'>
            <div className='container'>
                <NavbarBrand href='/'>
                    <img src={NucampLogo} height='70' width='70' alt='NuCamp Logo' />
                </NavbarBrand>
            </div>
        </Navbar>
    );
}

export default Header;