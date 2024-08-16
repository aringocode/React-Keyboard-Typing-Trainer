import React from 'react';
import { Button, Table } from 'reactstrap';

function GameResults({ correct, inCorrect }) {
	const totalWords = correct + inCorrect;
	const accuracy = totalWords ? Math.round((correct / totalWords) * 100) : 0;

	return (
		<div className='Result'>
			<h4 className='resultHeader'>Your Typing Test Results</h4>
			<Table striped bordered hover>
				<thead>
				<tr>
					<th>Metric</th>
					<th>Value</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>Words Typed (Total)</td>
					<td>{totalWords}</td>
				</tr>
				<tr>
					<td>Correct Words</td>
					<td>{correct}</td>
				</tr>
				<tr>
					<td>Incorrect Words</td>
					<td>{inCorrect}</td>
				</tr>
				<tr>
					<td>Accuracy</td>
					<td>{accuracy}%</td>
				</tr>
				</tbody>
			</Table>
			<div className='buttonRetry'>
				<Button color="primary" onClick={() => window.location.reload()}>Retry</Button>
			</div>
		</div>
	);
}

export default GameResults;
