import React from 'react';
import Logo from '../../assets/Logo.png';
import './Header.scss';

const Header: React.FC = (): JSX.Element => {
    return (
        <header className="header">
            <img src={Logo} alt="logo"/>
        </header>
    );
};

export default Header;