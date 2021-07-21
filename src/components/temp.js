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
					<button className='searchButton' type='button'></button>
				</div>
			</div>
			{/* Temprature Card */}
			<article className='widget'>
				<div className='weatherIcon'>
					<i className='wi wi-day-sunny'></i>
				</div>
				<div className='weatherInfo'>
					<div className='tempraure'>
						<span>25.5&deg;</span>
					</div>
					<div className='description'>
						<div className='weatherCondition'>Sunny</div>
						<div className='place'>Karachi, pakistan</div>
					</div>
				</div>

				<div className='date'>{new Date().toLocaleString()}</div>
				{/* four divided column */}

				<div className='extra-temp'>
					<div className='temp-info-minmax'>
						<div className='two-sided-section'>
							<p>
								<i className={"wi wi-sunset"}></i>
							</p>
							<p className='extra-info-leftside'>
								19:19 PM <br />
								Sunset
							</p>
						</div>
						<div className='two-sided-section'>
							<p>
								<i className={"wi wi-humidity"}></i>
							</p>
							<p className='extra-info-leftside'>
								19:19 PM <br />
								Humidity
							</p>
						</div>
					</div>
					<div className='weather-extra-info'>
						<div className='two-sided-section'>
							<p>
								<i className={"wi wi-rain"}></i>
							</p>
							<p className='extra-info-leftside'>
								19:19 PM <br />
								Pressure
							</p>
						</div>
						<div className='two-sided-section'>
							<p>
								<i className={"wi wi-wind"}></i>
							</p>
							<p className='extra-info-leftside'>
								19:19 PM <br />
								Speed
							</p>
						</div>
					</div>
				</div>
			</article>
		</>
	);
};

export default Temp;
