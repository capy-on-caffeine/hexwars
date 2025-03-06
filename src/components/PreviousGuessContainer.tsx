import { rgbToHex } from '@/utils/colors';
import React from 'react';

interface PreviousGuessContainerProps {
    guess: string;
    target: string;
}

const PreviousGuessContainer = ({ guess, target }: PreviousGuessContainerProps) => {
    if (guess.startsWith('#')) guess = guess.slice(1);

    let targetHex = rgbToHex(target);
    if (targetHex.startsWith('#')) targetHex = targetHex.slice(1);

    const decideBoxBackgroundColor = () => {
        return guess.split('').map((char, index) => {            
            const emoji = char === targetHex[index] ? '✅' : '❌';

            return (
                <div
                    key={index}
                    className="relative h-16 w-12 flex flex-col justify-center items-center text-2xl rounded-lg border-4"
                    style={{ borderColor: `#${guess}` }}
                >
                    <span>{char}</span>
                    <span className='text-sm'>{emoji}</span>
                </div>
            );
        });
    };

    return (
        <div className="flex gap-2">
            {
                decideBoxBackgroundColor()
            }
        </div>
    );
};

export default PreviousGuessContainer;
