import React from 'react'
import '../styles/modal.css';
import ButtonAgain from './ButtonAgain';

function Modal({visible, solution, win, playAgain, setModal}) {

    let classs = ['modal']
    if (visible){
        classs.push('modal__active')
    }
    return ( 
        <div className={classs.join(' ')} onClick={() => setModal(false)}>
            <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                {win ? 
                <h1 className='modal__result' color='rgb(0, 197, 43)'>Вы победили</h1>
                :
                <h1 className='modal__result' color='rgb(124, 33, 10)'>Вы проиграли</h1>
                }
                <p className='modal__info'>Было загадано слово</p>
                <div className='modal__solution'>
                    <div className='modal__square'>{solution[0].toUpperCase()}</div>
                    <div className='modal__square'>{solution[1].toUpperCase()}</div>
                    <div className='modal__square'>{solution[2].toUpperCase()}</div>
                    <div className='modal__square'>{solution[3].toUpperCase()}</div>
                    <div className='modal__square'>{solution[4].toUpperCase()}</div>
                </div>
                <ButtonAgain handleClick={playAgain}></ButtonAgain>
            </div>
        </div>
     );
}

export default Modal;