import React, {useState} from "react";

const TimePeriod = ({ setTimer }) => {
	const [seconds, setSeconds] = useState(60);

	const numberChange = (event) => {
		const inputValue = event.target.value;
		setSeconds(inputValue);
		setTimer(inputValue);
	};
	return (
		<span>
			<span>Set countdown : </span>
			<input className='inputword' type='number' value={seconds} defaultValue={seconds} onChange={numberChange}/>
		</span>
	)
}

export default TimePeriod;