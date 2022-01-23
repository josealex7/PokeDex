import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../actions/actionLogin';
import '../styles/navbarPrincipal.css'
import { Typography } from '@mui/material';

const NavBarPrincipal = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
        navigate("/login")
    }

    return (
      <div>
          <header className='header'>
              <div className='container'>
                <div className='btn-menu'>
                    <label htmlFor='btn-menu' className='icon-menu'>
                        <img src="https://img.icons8.com/ios-filled/25/FFFFFF/menu--v1.png"/>
                    </label>
                </div>
              </div>
          </header>
          <input type='checkbox' id='btn-menu' />
          <div className='container-menu'>
            <div className='cont-menu'>
                <nav className='contenedorNav'>
                    <Typography variant='h5' sx={{mb:2}}>Pokedex</Typography>
                    <div className='hrDiv'></div>
                    <div className='divOpciones'>
                        <Link to="/home" className='links'>
                            <Typography variant='h6'>
                                Pokémon
                            </Typography>
                        </Link>
                    </div>
                    <div className='divOpciones'>
                        <Link to="/about" className='links'>
                            <Typography variant='h6'>
                                Acerca
                            </Typography>
                        </Link>
                    </div>
                    <div className='divOpciones'>
                        <Typography variant='h6' onClick={() => handleLogout()} className='logoutNavbar'>
                            logout
                        </Typography>
                    </div>
                </nav>
                <label htmlFor='btn-menu' className='icon-equis'>
                    <img src="https://img.icons8.com/material-outlined/24/000000/close-window.png"/>
                </label>
            </div>
          </div>
      </div>
    )
}

export default NavBarPrincipal
