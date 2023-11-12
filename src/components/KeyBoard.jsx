import React from 'react'
import "../styles/keyBoard.css";
import { useState } from "react";

const keys = ['Й',"Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ"]
const keys2 = ["Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э"]
const keys3 = ["Я","Ч","С","М","И","Т","Ь","Б","Ю"]

function KeyBoard({words, solution}) {
    let arr = [].concat(words[0], words[1], words[2], words[3], words[4], words[5])
    const [usedletters, setUsedLetters] = useState(arr);
    if(arr.toString() !== usedletters.toString()){
        setUsedLetters(arr);
    }
    return ( 
        <div className='keyBoard'>
            <div className='keyBoard__row'>
                {keys.map((key, index) => {
                    return <div className={`key ${usedletters.includes(key) ? 'keyGrey' : ''}`} key={index}>{key}</div>
                })}
            </div>
            <div className='keyBoard__row'>
                {keys2.map((key, index) => {
                    return <div className={`key ${usedletters.includes(key) ? 'keyGrey' : ''}`} key={index}>{key}</div>
                })}
            </div>
            <div className='keyBoard__row'>
                {keys3.map((key, index) => {
                    return <div className={`key ${usedletters.includes(key) ? 'keyGrey' : ''}`} key={index}>{key}</div>
                })}
            </div>
        </div>
     );
}

export default KeyBoard;