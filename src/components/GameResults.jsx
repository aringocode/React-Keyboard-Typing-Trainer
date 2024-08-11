import React from 'react';

function GameResults({ correct, inCorrect }) {
	const totalWords = correct + inCorrect;
	const accuracy = totalWords ? Math.round((correct / totalWords) * 100) : 0;

	return (
		<div className='Result'>
			<div className='resultportion'>
				<p className='resultText'>Words Per Minute : </p>
				<p className='ResultValue'>{totalWords}</p>
			</div>
			<div className='resultportion'>
				<p className='resultText'>Accuracy : </p>
				<p className='ResultValue'>{accuracy}%</p>
			</div>
			<div className='resultportion'>
				<p className='resultText'>Correct Words : </p>
				<p className='ResultValue'>{correct}</p>
			</div>
			<div className='resultportion'>
				<p className='resultText'>Incorrect words : </p>
				<p className='ResultValue'>{inCorrect}</p>
			</div>
			<div className='buttonRetry'>
				<button onClick={() => window.location.reload()}>Click here to retry</button>
			</div>
		</div>
	);
}

export default GameResults;
