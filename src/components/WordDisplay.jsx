import React from 'react';

function WordDisplay({ words, charIndex, wordIndex, char }) {
	const getCharClass = (wordInd, CharInd) => {
		const isCurrentWord = wordInd === wordIndex;
		const isCorrect = char && words[wordIndex][CharInd] === char;

		if (isCurrentWord && CharInd === charIndex) {
			return isCorrect ? 'has-background-success' : 'has-background-danger';
		}

		return isCurrentWord && charIndex >= words[wordIndex].length ? 'has-background-danger' : '';
	};

	return (
		<div className='randomWords'>
			{words?.map((word, i) => (
				<span key={i}>
					{word.split('').map((char, idx) => (
			  			<span className={getCharClass(i, idx)} key={idx}>
              				{char}
            			</span>
					))}
				</span>
			))}
		</div>
	);
}

export default WordDisplay;
