import React from "react";

const WordsCount = ({ wordNums, setWordNums }) => {
	return (
		<span>
            <span>Words Count : </span>
            <input className='inputword' type='number' defaultValue={wordNums} value={wordNums} onChange={(e) => setWordNums(e.target.value)} />
		</span>
	);
};

export default WordsCount;