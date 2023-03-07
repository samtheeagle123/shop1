import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../style/NavBar.css';
// import { BsCart3 } from 'react-icons/bs';
// import { VscAccount } from 'react-icons/vsc'
import { Spin as Hamburger } from 'hamburger-react'
import { logout } from '../../app/store'
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button'

const NavbarAdmin = () => {
    const [isOpen, setOpen] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className='navbar'>
    <a href='/'><img src='../../../images/iconic.png' alt='' /></a>
    <div>
        
        <ul id='links'
            className={isOpen ? 
            '#links' : '#links active'}>
            <li>
                <Link to='/users' 
                >Users</Link></li>
            <li>
                <Link to='/home' 
                >Home</Link></li>
            <li>
                <Link to='/about' 
                >About</Link></li>
            <li>
                <Link to='/products'
                >Products</Link></li>
            <li>
                <Link to='/contact'
                >Contact</Link></li>
            <li>
                <Link to='/cart' 
                >Cart</Link></li>
            <li>
                <Button 
                    variant="outlined" 
                    sx={{ color: "#5f9ea0" }}
                    onClick={logoutAndRedirectHome}>
                    Logout</Button>
            </li>
        </ul>
    </div>
    <div className='mobile-phone'>
    <Hamburger 
        className='mobile'
        toggled={isOpen} 
        toggle={setOpen}
        direction='left'
        color='white'
        duration={0.8}
        size={20}
        rounded
         />
    </div>
</nav>
  )
}

export default NavbarAdmin