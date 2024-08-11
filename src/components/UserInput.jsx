import React from 'react';

function UserInput({ status, inputWord, handleInput, setInputWord }) {
	return (
		<div className='inputSection'>
			<input
				placeholder='Type word here and hit spacebar'
				disabled={status === 'disable'}
				type='text'
				onKeyDown={handleInput}
				value={inputWord}
				onChange={(event) => setInputWord(event.target.value)}
			/>
		</div>
	);
}

export default UserInput;
