import React from "react";
import "./temp.css";
const Temp = () => {
	return (
		<>
			<div className='wrap'>
				<div className='search'>
					<input
						type='search'
						placeholder='search...'
						autoFocus
						id='search'
						className='search'
					/>
					<button></button>
				</div>
			</div>
		</>
	);
};

export default Temp;
