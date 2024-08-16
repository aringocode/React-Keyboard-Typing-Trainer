import React, { useState } from 'react';
import {Input} from "reactstrap";
import Keyboard from "./keyboard/Keyboard";

function UserInput({ status, inputWord, handleInput, setInputWord }) {
	const [pressedKey, setPressedKey] = useState('');

	const handleKeyDown = (event) => {
		setPressedKey(event.key.toLowerCase()); // Save the currently pressed key
		handleInput(event);
	};

	const handleKeyUp = () => {
		setPressedKey(''); // Сбрасываем нажатую клавишу
	};

	return (
		<div className='inputSection'>
			<Input
				placeholder='Type word here and hit spacebar'
				disabled={status === 'disable'}
				type='text'
				onKeyDown={handleKeyDown}
				onKeyUp={handleKeyUp}
				value={inputWord}
				onChange={(event) => setInputWord(event.target.value)}
			/>
			<Keyboard pressedKey={pressedKey} />
		</div>
	);
}

export default UserInput;
