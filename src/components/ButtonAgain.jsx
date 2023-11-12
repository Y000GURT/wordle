import React from 'react'
import '../styles/buttonAgain.css';

function ButtonAgain({handleClick}) {
    return ( 
        <button onClick={handleClick} className='btn'>ИГРАТЬ ЕЩЕ</button>
     );
}

export default ButtonAgain;