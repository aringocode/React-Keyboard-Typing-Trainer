import React from 'react';

function Instructions({ status }) {
	return (
		<div className='instructions'>
			{(status === 'start' || status === 'disable') && (
				<>
					<div className='about'>
						<p>
							Your typing speed and accuracy will be put to the test in this entertaining and engaging game. The aim of the game is to type as many words as you can in a predetermined amount of time while maintaining accuracy. It's a terrific approach to increase your typing speed, sharpen your skills, and set a goal for yourself to type more quickly.
						</p>
					</div>
					<div className='HowToPlay'>
						<ol>
							<center><strong> How to Play:</strong></center>
							<li>
								<strong>Game Initialization:</strong> At the commencement of the game, a countdown timer will be initiated, and a random assortment of words will be displayed on the screen.
							</li>
							<li>
								<strong>Word Typing:</strong> Engage in rapid and error-free typing of the presented words. Each word should be entered accurately and followed by a space.
							</li>
							<li>
								<strong>Tracking Accuracy and Speed:</strong> The game diligently monitors your typing accuracy and speed. Successfully entered words contribute to your score, while any inaccuracies are counted as errors.
							</li>
							<li>
								<strong>Time Limit:</strong> The game imposes a specific time constraint within which you must strive to type as many words as possible. Make an effort to complete as many words as you can before the timer expires.
							</li>
							<li>
								<strong>Performance Feedback and Results:</strong> Once the game concludes, you will receive detailed feedback on your performance, including your words per minute (WPM) score and accuracy percentage.
							</li>
							<li>
								<strong>Retry Option:</strong> If you wish to improve your score or engage in another challenge, you have the option to retry the game and aim for a higher WPM and increased accuracy.
							</li>
						</ol>
					</div>
					{status === 'disable' && (
						<div className='HowToPlay'>
							<p>
								Tips for Success:
								<ul>
									<li>
										<strong>Focus on Accuracy:</strong> Prioritize accuracy over speed when typing. It is preferable to type correctly rather than making errors in an attempt to type quickly. Accuracy is paramount.
									</li>
									<li>
										<strong>Regular Practice:</strong> Consistently practicing the speed typing game will yield substantial improvements in your typing skills over time. Make it a habit to play regularly.
									</li>
									<li>
										<strong>Utilize Proper Techniques:</strong> Employ proper typing techniques and utilize all your fingers while typing. This will enhance your typing speed and efficiency.
									</li>
									<li>
										<strong>Maintain Good Posture:</strong> Sit upright and maintain a comfortable typing posture to prevent any discomfort or strain while typing.
									</li>
								</ul>
							</p>
						</div>
					)}
				</>
			)}
		</div>
	);
}

export default Instructions;
