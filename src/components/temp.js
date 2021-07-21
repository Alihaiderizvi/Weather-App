import React, { useState, useEffect } from "react";
import "./temp.css";
const Temp = () => {
	const [searchVal, setSearchVal] = useState("Karachi");

	const getWeatherInfo = async () => {
		try {
			let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&units=metric&appid=7a9c455553265c1f19c2156453d6a1c9`;

			const res = await fetch(url);
			const data = await res.json();

			const { temp, humidity, pressure } = data.main;
			const { main: weatherMood } = data.weather[0];
			console.log(temp);
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		getWeatherInfo();
	}, []);

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
					<button
						className='searchButton'
						type='button'
						onClick={getWeatherInfo}
						value={searchVal}
						onChange={(e) => setSearchVal(e.target.value)}
					>
						Search
					</button>
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
