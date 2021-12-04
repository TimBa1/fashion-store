import React from 'react';
import './header.style.scss';
import { ReactComponent as ReactLogo } from '../../assets/crown.svg';
import {Link} from 'react-router-dom'

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <ReactLogo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='./shop'>SHOP</Link>
            <Link className='option' to='./shop'> CONTACT</Link>
        </div>
    </div>
)
export default Header 