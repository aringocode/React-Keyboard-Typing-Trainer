import React from 'react'

const Timer = ({ status, timer }) => {
	return (
		<div className='timer'>
			{status === 'enable' && (
				<span className='timerText'>Time left</span>)}
			{(status === 'enable' || status === 'start') && (
				<>
					<span className='timerCount'>{timer}</span>
					<span className='timerText'>seconds</span>
				</>)}
			{status === 'disable' && (
				<>
					<span className='Oops'>Oops, Time Up</span>
					<span className='timerText'>Check your results, and hit retry</span>
				</>)}
		</div>
	)
}

export default Timer;
