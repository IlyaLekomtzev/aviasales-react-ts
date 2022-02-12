import { FC } from 'react';
import Logo from '../../assets/Logo.png';
import './Header.scss';

const Header: FC = (): JSX.Element => {
    return (
        <header className="header">
            <img src={Logo} alt="logo"/>
        </header>
    );
};

export default Header;