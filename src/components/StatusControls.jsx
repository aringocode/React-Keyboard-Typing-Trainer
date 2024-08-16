import React, {useState} from 'react';
import {Button, Row, Col, FormGroup, Input, Label} from "reactstrap";

function StatusControls({ status, wordNums, setWordNums, startTimer, setTimer }) {
	const [seconds, setSeconds] = useState(60);

	const numberChange = (event) => {
		const inputValue = event.target.value;
		setSeconds(inputValue);
		setTimer(inputValue);
	};

	return (
		<>
			{status === 'start' && (
				<FormGroup className='justify-content-center'>
					<Row>
						<Col xs='1'>
							<Label className='text-nowrap'>Set countdown : </Label>
							<Input
								type='number'
								value={seconds}
								defaultValue={seconds}
								onChange={numberChange}
							/>
						</Col>
						<Col xs='1'>
							<Label>Words Count : </Label>
							<Input
								type='number'
								value={wordNums}
								onChange={(event) => setWordNums(event.target.value)}
							/>
						</Col>
					</Row>

				</FormGroup>
			)}
			{status === 'start' && (
				<div className='buttonStart'>
					<span>Set countdown and number of words, then hit Start</span>
					<Button onClick={startTimer}>Start</Button>
				</div>
			)}
			{status === 'enable' && (
				<div className='buttonStop'>
					<Button onClick={() => window.location.reload()}>Stop</Button>
				</div>
			)}
		</>
	);
}

export default StatusControls;
