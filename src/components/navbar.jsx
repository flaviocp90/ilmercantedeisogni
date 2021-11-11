import React from 'react';
import '../style/App.css';

const Navbar = () => {
    return (
        <div className='Navbar container'>
            <h3><a href='/'>Il Mercante dei Sogni</a></h3>
            <ul className='list-item'>

                <li><a href="/about">About</a></li>
                <li><a href="/vetrina">Vetrina</a></li>
            </ul>

        </div>
    )
};

export default Navbar;