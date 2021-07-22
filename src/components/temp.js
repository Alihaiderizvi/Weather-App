import React, { useState, useEffect } from "react";
import "./temp.css";
import WeatherCard from "./WeatherCard";
const Temp = () => {
	const [searchVal, setSearchVal] = useState("Lahore");
	const [tempInfo, setTempInfo] = useState({});

	const getWeatherInfo = async () => {
		try {
			let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&units=metric&appid=7a9c455553265c1f19c2156453d6a1c9`;

			const res = await fetch(url);
			const data = await res.json();

			const { temp, humidity, pressure } = data.main;
			const { main: weatherMood } = data.weather[0];
			const { name } = data;
			const { speed } = data.wind;
			const { country, sunset } = data.sys;

			const metaWeatherData = {
				temp,
				humidity,
				pressure,
				weatherMood,
				name,
				speed,
				country,
				sunset,
			};

			setTempInfo(metaWeatherData);
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
						autocomplete='off'
						placeholder='search...'
						id='search'
						className='search'
						value={searchVal}
						onChange={(e) => setSearchVal(e.target.value)}
					/>
					<button
						className='searchButton'
						type='button'
						onClick={getWeatherInfo}
					>
						Search
					</button>
				</div>
			</div>
			{/* Temprature Card */}
			<WeatherCard tempInfo={tempInfo} />
		</>
	);
};

export default Temp;
