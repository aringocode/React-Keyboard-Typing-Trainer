import React, { useState } from 'react';
import randomWords from "random-words";
import './App.css';
import Timer from "./components/Timer.jsx";
import UserInput from './components/UserInput.jsx';
import WordDisplay from './components/WordDisplay.jsx';
import StatusControls from './components/StatusControls.jsx';
import GameResults from './components/GameResults.jsx';

function App() {
	const [wordNums, setWordNums] = useState(100);
	const [words, setWords] = useState(['means', 'perfect', 'simplest', 'audience', 'becoming']);
	const [timer, setTimer] = useState(60);
	const [inputWord, setInputWord] = useState('');
	const [wordIndex, setWordIndex] = useState(0);
	const [correct, setCorrect] = useState(0);
	const [charIndex, setCharIndex] = useState(-1);
	const [char, setChar] = useState('');
	const [inCorrect, setInCorrect] = useState(0);
	const [status, setStatus] = useState('start');


	const startTimer = () => {
		if (status === 'disable') {
			resetGame();
		}
		if (status === 'start') {
			setStatus('enable');
			setWords(generateWords());
			startCountdown();
		}
	};

	const resetGame = () => {
		setWords(generateWords());
		setWordIndex(0);
		setCorrect(0);
		setInCorrect(0);
		setStatus('enable');
		setCharIndex(-1);
		setChar('');
	};

	const startCountdown = () => {
		let time = setInterval(() => {
			setTimer((prevTimer) => {
				if (prevTimer === 0) {
					setStatus('disable');
					clearInterval(time);
					setInputWord('');
				} else {
					return prevTimer - 1;
				}
			});
		}, 1000);
	};

	const generateWords = () => {
		const wordsArray = [];
		while (wordsArray.length < wordNums) {
			const randomWord = randomWords();
			// const randomWord = generate(5)
			wordsArray.push(randomWord);
		}
		return wordsArray;
	};

	const handleInput = (event) => {
		if (event.key === ' ') {
			checkMatch();
			setInputWord('');
			setWordIndex(wordIndex + 1);
			setCharIndex(-1);
		} else if (event.key === 'Backspace') {
			setCharIndex(charIndex - 1);
			setChar('');
		} else {
			setCharIndex(charIndex + 1);
			setChar(event.key);
		}
	};

	const checkMatch = () => {
		const wordToCompare = words[wordIndex];
		if (inputWord.trim() === wordToCompare) {
			setCorrect(correct + 1);
		} else {
			setInCorrect(inCorrect + 1);
		}
	};

	return (
		<>
			<Timer status={status} timer={timer}/>
			{status === 'enable' && (
				<UserInput
					status={status}
					inputWord={inputWord}
					handleInput={handleInput}
					setInputWord={setInputWord}
				/>
			)}
			{status === 'enable' && <WordDisplay words={words} charIndex={charIndex} wordIndex={wordIndex} char={char} />}
			<StatusControls
				status={status}
				wordNums={wordNums}
				setWordNums={setWordNums}
				startTimer={startTimer}
				setTimer={setTimer}
			/>
			{status === 'disable' && <GameResults correct={correct} inCorrect={inCorrect} />}
		</>
	);
}

export default App;
