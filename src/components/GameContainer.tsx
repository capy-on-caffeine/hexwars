"use client"

import React, { useEffect, useState } from 'react'
import ColorContainer from './ColorContainer'
import generateRandomColor from '@/utils/generateRandomColor'
import InputField from './InputField'
import PreviousGuessContainer from './PreviousGuessContainer'
import calculateScore from '@/utils/calculateScore'

const GameContainer = () => {
    const [userColor, setUserColor] = useState("#99a1af");
    const [targetColor, setTargetColor] = useState("");
    const [guesses, setGuesses] = useState<string[]>([]);
    const [hasGameEnded, setHasGameEnded] = useState(false);
    const [turnsLeft, setTurnsLeft] = useState(3);

    useEffect(() => {
        setTargetColor(generateRandomColor());
    }, []);

    useEffect(() => {
        if (hasGameEnded) {
            const score = calculateScore(targetColor, userColor);
            alert(`Score: ${score}`);
        }
    }, [hasGameEnded, targetColor, userColor]);

    const handleGuessSubmit = (guess: string) => {
        console.log(guess);
        
        setGuesses((prevGuesses) => {
            const updatedGuesses = [guess, ...prevGuesses];
            console.log(updatedGuesses);
            return updatedGuesses;
        });
        setUserColor(() => guess);
        console.log(userColor);
    };
    
  return (
    <div className='w-1/3 h-5/6 bg-white rounded-2xl'>
        <div className='relative flex flex-col items-center p-8 gap-8'>
            <div className='relative flex flex-col items-center gap-4'>
                <div className='relative flex items-center justify-center gap-8'>
                    <ColorContainer title='Target' color={ targetColor } />
                    <ColorContainer title='Your guess' color={ userColor } />
                </div>
                
                <div className='relative flex gap-2'>
                    <InputField handleGuessSubmit={handleGuessSubmit} hasGameEnded={hasGameEnded} setTurnsLeft={setTurnsLeft} turnsLeft={turnsLeft} targetColor={targetColor} setHasGameEnded={setHasGameEnded} />
                    
                </div>
            </div>

            <div className='relative flex flex-col gap-1 items-center'>
                <p className='text-lg'>Your guesses, chances left: { turnsLeft }</p>
                <div className='flex flex-col gap-4'>
                    {
                        guesses.map((guess, index) => (
                            <PreviousGuessContainer key={index} guess={guess} />
                        ))
                    }
                </div>
            </div>


        </div>
    </div>
  )
}

export default GameContainer