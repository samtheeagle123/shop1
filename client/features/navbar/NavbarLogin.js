import React, { useState } from 'react'
import '../style/NavBar.css';
// import { BsCart3 } from 'react-icons/bs';
// import { VscAccount } from 'react-icons/vsc'
import { Spin as Hamburger } from 'hamburger-react'
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { logout } from '../../app/store';

const NavbarLogin = () => {
    const [isOpen, setOpen] = useState(false)
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const logoutAndRedirectHome = () => {
//     dispatch(logout());
//     navigate('/login');
//   };


    return (
        <nav className='navbar'>
            <a href='/'><img src='../../../images/iconic.png' alt='' /></a>
            <div>
                
                <ul id='links'
                    className={isOpen ? 
                    '#links' : '#links active'}>
                    <li>
                        <Link to='/' 
                        >Home</Link></li>
                    <li>
                        <Link to='/signup' 
                        >Sign-Up</Link></li>
                    <li>
                        <Link to='/login'
                        >Login</Link></li>
                    {/* <li>
                        <button 
                            type="button" 
                            onClick={logoutAndRedirectHome}>
                        Logout</button>
                    </li> */}
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

export default NavbarLogin;