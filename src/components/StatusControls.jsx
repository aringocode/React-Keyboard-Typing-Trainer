import React from 'react';
import TimePeriod from "./keyboard-settings/TimePeriod.jsx";

function StatusControls({ status, wordNums, setWordNums, startTimer, isChecked, handleCheckboxChange, setTimer }) {
	return (
		<>
			{status === 'start' && (
				<div className='selectTimeWord'>
					<TimePeriod setTimer={setTimer} />
					<span>
            			<span>Words Count : </span>
						<input
							className='inputword'
							type='number'
							value={wordNums}
							onChange={(event) => setWordNums(event.target.value)}
						/>
          			</span>
					<span>
						<span>Keyboard Sound : </span>
						<input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
						<label> ON</label>
          			</span>
				</div>
			)}
			{status === 'start' && (
				<div className='buttonStart'>
					<span>Set countdown and number of words, then hit Start</span>
					<button onClick={startTimer}>click to start</button>
				</div>
			)}
			{status === 'enable' && (
				<div className='buttonStop'>
					<button onClick={() => window.location.reload()}>click here to stop</button>
				</div>
			)}
		</>
	);
}

export default StatusControls;
