import React from 'react';
import styled from 'styled-components';

const AppHeader = styled.header`
width: 100%;
height: 50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: rgb(0, 197, 43);
font-family: 'Arial', sans-serif;
border-bottom: solid 1px black;
box-shadow: 1px 6px 8px 0px rgba(34, 60, 80, 0.2);
`

function Header() {
    return ( 
        <AppHeader>
            <h1>Wordle</h1>
        </AppHeader>
     );
}

export default Header;