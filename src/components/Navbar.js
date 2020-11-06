import React, {setState} from 'react';
import Logo from './Logo'

const Navbar = () => {
    // const [burger, setBurger] = setState({isOpen: false});
    return (
        <nav class="navbar">

            <Logo />
        </nav>
    );
}

export default Navbar