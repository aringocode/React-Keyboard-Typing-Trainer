import React from 'react';

function TimerDisplay({ status, timer }) {
	return (
		<div>
			{status !== 'disable' && <div className='timer'>Time Left: {timer}</div>}
		</div>
	);
}

export default TimerDisplay;
