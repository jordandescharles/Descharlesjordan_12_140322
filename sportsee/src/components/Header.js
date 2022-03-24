import logo from '../img/logo.png'

import React from 'react';

const Header = () => {
    return (<>
        <nav id="navHori">
        <img src={logo} alt="logo SportSee"/>
        <ul>
            <li>Accueil</li>
            <li>Profil</li>
            <li>Réglage</li>
            <li>Communauté</li>
         </ul>
        </nav>
        </>
    );
};

export default Header;