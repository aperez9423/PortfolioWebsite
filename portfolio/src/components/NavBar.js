import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const NavBar = () => {
    return (
        <Navigation>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact Me</Link>
            <Link to='/projects'>Projects</Link>
        </Navigation>
    )
}

export default NavBar;

const Navigation = styled.div`
    background-color: black;
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;

    a {
        text-decoration: none;
        color: white;
        font-size: 2rem;
    }
`
