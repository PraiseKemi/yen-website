import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import blueLogo from './images/blue-yen-logo.svg';

export default function NavBar() {
    return (
        <div className='NavBar'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/'>
                        <img src={blueLogo} alt='YEN logo' className='yenBlueLogo img-fluid' />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/' className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/who-we-are' className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}>Who we are</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/ministries' className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}>Ministries</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/partner-with-us' className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}>Partner with us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/summer-camp' className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}>Summer camp</NavLink>
                            </li>
                            <NavLink className='nav-link-button' to='/'>
                                <button className='nav-button'>Join community</button>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}