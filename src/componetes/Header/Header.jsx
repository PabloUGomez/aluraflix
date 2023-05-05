import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <header>
            <img src="img/logo.png" alt="lolo aluraflix" className='logo' />
            <button className='nuevo-video'>Nuevo video</button>
        </header>
    );
}

export default Header;