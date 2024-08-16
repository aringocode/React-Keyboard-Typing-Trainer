import React from 'react';
import './Keyboard.css'; // Импорт CSS для стилизации клавиатуры

const Keyboard = ({ pressedKey }) => {
	const keys = [
		['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
		['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
		['z', 'x', 'c', 'v', 'b', 'n', 'm']
	];

	return (
		<div className='keyboard'>
			{keys.map((row, rowIndex) => (
				<div key={rowIndex} className='keyboard-row'>
					{row.map((key) => (
						<div
							key={key}
							className={`key ${pressedKey === key ? 'active' : ''}`}
						>
							{key}
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default Keyboard;
