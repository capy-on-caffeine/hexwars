import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { rgbToHex } from '@/utils/colors';

interface InputFieldProps {
    hasGameEnded: boolean;
    turnsLeft: number;
    targetColor: string;
    handleGuessSubmit: (guess: string) => void;
    setTurnsLeft: React.Dispatch<React.SetStateAction<number>>;
    setHasGameEnded: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputField = ({ hasGameEnded, turnsLeft, targetColor, setTurnsLeft, handleGuessSubmit, setHasGameEnded }: InputFieldProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    // add validation function here

    const handleSubmit = () => {
        if (!hasGameEnded) {
            const guess = inputRef.current?.value.trim();
            
            if (!guess) {
                throw new Error('No guess provided');
            }
    
            handleGuessSubmit(`#${guess}`);
            if (inputRef.current) inputRef.current.value = '';
    
            setTurnsLeft((prev) => {
                const updatedTurns = prev - 1;
                console.log(`Turns left: ${updatedTurns}, target: ${rgbToHex(targetColor)}, guess: ${guess}`);
                
                if (updatedTurns === 0 || guess === rgbToHex(targetColor).slice(1)) {
                    setHasGameEnded(true);
                }
    
                return updatedTurns;
            });
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }
    

    return (
        <div className='relative flex gap-2'>
            <input
                ref={inputRef}
                className='relative border-2 rounded-sm px-2 py-1 w-40 text-2xl'
                placeholder='#'
                disabled={hasGameEnded}
                onKeyDown={handleKeyDown}
            />

            <button
                className={`relative text-white p-2 rounded-md ${hasGameEnded ? 'bg-gray-400 cursor-default' : 'bg-green-700 cursor-pointer'}`}
                onClick={handleSubmit} 
                disabled={hasGameEnded}
            >
                <ArrowRight />
            </button>
        </div>
    );
};

export default InputField;
