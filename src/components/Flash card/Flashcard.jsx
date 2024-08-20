import style from './Flashcard.module.css'
import { useState } from 'react'
import reactLogo from '../../assets/react.svg'

export default function Flashcard (props){

    return(
        <main>
            hello
            {props.flashBank.map((card) => {
                return (
                <article>
                    <button>X</button>
                    <img src={reactLogo} alt="React logo" />
                    <p>{card.q}</p>
                    <p>{card.a}</p>
                </article>)
            })}
        </main>

    )

}