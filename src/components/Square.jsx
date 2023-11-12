import React from 'react'
import '../styles/square.css'
import { useState } from "react";
import { Transition } from 'react-transition-group';
import { useRef } from "react";

function Square({colorClass, children}) {
    const [onAnimation, setOnAnimation] = useState(false);
    const isAnimation = useRef(false)
    if(children && isAnimation.current === false){
        isAnimation.current = true
        setOnAnimation(true)
    }
    if(children == null && isAnimation.current === true){
        isAnimation.current = false;
        setOnAnimation(false)
    }
    return (
        <Transition
        in = {onAnimation}
        timeout={500}
        >
            {state => <div className={`square ${colorClass !== undefined ? colorClass : '' } ${state}`}>{children}</div>}
        </Transition>
    )
}

export default Square;