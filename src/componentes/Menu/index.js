import React from 'react';
import PressaoLogo from '../../assents/img/PressaoLogo.png'
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
         <nav className="Menu">
            <a href="/">
                <img className="Logo" src={PressaoLogo} alt="PressaoLogo" />
            </a>

            <Button as="a" className="ButtonLink" href = "/">
                Novo vídeo
            </Button>
         </nav>
    );
}

export default Menu;