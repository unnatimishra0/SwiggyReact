import React from 'react'
import { LOGO_URL } from '../Utils/Constants';
const Header=()=>{
    return (
        <div className='header'>
        <div className='logo-container'> 
            <img className='logo'src={LOGO_URL}></img>
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home </li>
                <li>Abouts us </li>
                <li>Contact</li>
                <li>Cart</li>

            </ul>
        </div>
        </div>
    
    )
    }
export default Header;