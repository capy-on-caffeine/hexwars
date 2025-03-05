import React, { useState } from 'react'

interface PreviousGuessContainerProps {
    key: number,
    guess: string
}


const PreviousGuessContainer = ({guess} : PreviousGuessContainerProps) => {
    const color = guess;

    console.log("Insdie prev guess contaibner" + guess)
    if (guess.startsWith('#')) {
        guess = guess.slice(1);
    }

  return (
    <div className='flex gap-2'>
        {
            guess.split('').map((char, index) => (
                <div key={index} className='relative h-16 w-12 flex justify-center items-center text-2xl rounded-lg border-3' style={{borderColor: color}}>{ char }</div>
            ))
        }
    </div>
  )
}

export default PreviousGuessContainer