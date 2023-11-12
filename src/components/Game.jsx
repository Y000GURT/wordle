import React from 'react';
import RowSquare from './RowSquare';
import KeyBoard from './KeyBoard';
import '../styles/game.css';
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import data from '../api/words.json'
import Modal from './Modal';


function Game() {
    const [isEnd, setIsEnd] = useState(false);
    const [word, setWord] = useState(Array(5).fill(null))
    const [activeRow, setActiveRow] = useState(0)
    const solution = useRef(getWord())
    const colorsLetter = useRef([])
    const posLetter = useRef(0)
    const isWin = useRef(false)
    const words = useRef([...Array(6)].map(() => Array(5).fill(null)))
    useEffect(() => {
        document.addEventListener("keyup", handleClick);
        document.addEventListener("keyup", handleBackSpace);
        document.addEventListener("keyup", handleEnter);
        return () => {
            document.removeEventListener("keyup", handleClick);
            document.removeEventListener("keyup", handleBackSpace);
            document.removeEventListener("keyup", handleEnter);
        };
    });
    function getWord() {
        const arrWords = Object.values(data);
        let rand = String(Math.floor(Math.random() * arrWords.length))
        return arrWords[rand];
    }
    function handleClick(e) {
        if (/[а-я]/i.test(e.key) && posLetter.current <= 4){
            let nextWord = word.map((item,index) => {
                if(posLetter.current === index){
                    return e.key.toUpperCase();
                }else{ return item}
            })
            posLetter.current++;
            setWord(nextWord)
        }
    }
    function handleBackSpace(e){
        if(e.code === 'Backspace' && posLetter.current >= 1){
            posLetter.current--;
            setWord(word.map((item,index) => {
                if(index === posLetter.current){return null}
                return item
            }))
        }
    }
    function handleEnter(e){
        let strWord = word.join('').toLowerCase();
        if(e.code === 'Enter' && !word.includes(null) && Object.values(data).includes(strWord)){
            posLetter.current = 0;
            checkWord()
            words.current[activeRow] = word
            setActiveRow(activeRow + 1);
            setWord(Array(5).fill(null));
        }
    }
    function checkWord() {
        colorsLetter.current.push([]);
        let strWord = word.join('').toLowerCase();
        if(Object.values(data).includes(strWord)){
            if(solution.current === strWord){
                isWin.current = true;
                setIsEnd(true);
            }
            if(activeRow === 5){
                setIsEnd(true);
            }
            let i = 0;
            while(i < 5){
                if(solution.current[i] === strWord[i]){
                    colorsLetter.current[activeRow].push('squareGreen');
                    i++;
                    continue;
                }
                if(solution.current.includes(strWord[i])){
                    colorsLetter.current[activeRow].push('squareYellow')
                    i++;
                    continue;
                }else{
                    colorsLetter.current[activeRow].push('squareGrey')
                    i++;
                }
            }
        }
    }
    function playAgain() {
        solution.current = getWord();
        colorsLetter.current = [];
        posLetter.current = 0;
        isWin.current = false;

        words.current = [...Array(6)].map(() => Array(5).fill(null));

        setActiveRow(0);
        setIsEnd(false);
    }
    return ( 
        <div className='game'>
            <Modal setModal={setIsEnd} visible={isEnd} solution={solution.current} win={isWin.current} playAgain={playAgain}></Modal>
            <RowSquare colorClass={colorsLetter.current[0]}>{activeRow === 0 ? word : words.current[0]}</RowSquare>
            <RowSquare colorClass={colorsLetter.current[1]}>{activeRow === 1 ? word : words.current[1]}</RowSquare>
            <RowSquare colorClass={colorsLetter.current[2]}>{activeRow === 2 ? word : words.current[2]}</RowSquare>
            <RowSquare colorClass={colorsLetter.current[3]}>{activeRow === 3 ? word : words.current[3]}</RowSquare>
            <RowSquare colorClass={colorsLetter.current[4]}>{activeRow === 4 ? word : words.current[4]}</RowSquare>
            <RowSquare colorClass={colorsLetter.current[5]}>{activeRow === 5 ? word : words.current[5]}</RowSquare>
            <KeyBoard words={words.current} solution={solution}></KeyBoard>
        </div>
     );
}

export default Game;