import { useState } from 'react';

import { addition, subtraction, multiplication, division, power } from './calculator';


export default function Proj() {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [output, setOutput] = useState('Result will appear here');

    const handleAddition = () => {
        const result = addition(Number(firstNumber), Number(secondNumber));
        setOutput(`${result}`);
    };

    const handleSubtraction = () => {
        const result = subtraction(Number(firstNumber), Number(secondNumber));
        setOutput(`${result}`);
    };

    const handleMultiplication = () => {
        const result = multiplication(Number(firstNumber), Number(secondNumber));
        setOutput(`${result}`);
    };

    const handleDivision = () => {
        const result = division(Number(firstNumber), Number(secondNumber));
        if (result === null || result === Infinity) {
            setOutput('Error: Cannot divide by zero');
        } else {
            setOutput(`${result}`);
        }
    };

    const handlePower = () => {
        const result = power(Number(firstNumber), Number(secondNumber));
        setOutput(`${result}`);
    };

    const clear = () => {
        setFirstNumber('');
        setSecondNumber('');
        setOutput('Result');
    };

    return (
        <main>
            <h2>Projects</h2>
            <div className="about-container">

                <div className="calculator-container">
                    <h3>JavaScript Calculator</h3>
                    
                    <div className="calculator">
                        <div className="inputs">
                            <label htmlFor="first-number">First Number:</label>
                            <input 
                                type="number" 
                                id="first-number" 
                                placeholder="First number"
                                value={firstNumber}
                                onChange={(e) => setFirstNumber(e.target.value)}
                            />
                            
                            <label htmlFor="second-number">Second Number:</label>
                            <input 
                                type="number" 
                                id="second-number" 
                                placeholder="Second number"
                                value={secondNumber}
                                onChange={(e) => setSecondNumber(e.target.value)}
                            />
                        </div>
                        
                        <div className="buttons">
                            <button onClick={handleAddition}>+</button>
                            <button onClick={handleSubtraction}>-</button>
                            <button onClick={handleMultiplication}>*</button>
                            <button onClick={handleDivision}>/</button>
                            <button onClick={handlePower}>**</button>
                            <button onClick={clear}>Clear</button>
                        </div>
                        
                        <div className="output">
                            <h3 id={parseInt(output) < 0 ? "output2" : "output"}>
                                {output}
                            </h3>
                            </div>
                    </div>
                </div>
                
                <img src="github.png" alt="GitHub Logo" className="profile-photo" />
                <p>
                    <a href="https://github.com/alexcobblin" target="_blank" rel="noopener noreferrer">
                        Here's My GitHub!
                    </a>
                </p>
            </div>
        </main>
    );
}