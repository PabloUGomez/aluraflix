import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/"><img src="img/logo.png" alt="logo aluraflix" className='logo' /></Link>
            <Link className="nuevo-video" to="/NuevoVideo">Nuevo Video</Link>
        </header>
    );
}

export default Header;