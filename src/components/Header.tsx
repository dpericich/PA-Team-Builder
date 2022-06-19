import React from 'react';
import styled from 'styled-components';

const Header = () => {
    const HeaderContainer = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        background-color: var(--primary-color);
        color: white;
        font-size: 2rem;
        padding: 1rem .5rem 1rem .5rem;
        width: 100%;
        text-shadow: 2px 2px black;
    `

    return(
        <HeaderContainer>Pokemon Arceus Team Builder</HeaderContainer>
    )
};

export default Header;