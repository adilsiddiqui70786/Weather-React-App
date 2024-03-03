import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
	let [city, setCity] = useState("");

	const API_URL = "https://api.openweathermap.org/data/2.5/weather";
	const API_KEY = "4572422f9e843747c237077848393bb9";

	const getWeatherInfo = async () => {
		let response = await fetch(
			`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
		);
		let jsonResponse = await response.json();
		console.log(jsonResponse);
		let result = {
			city: city,
			temp: jsonResponse.main.temp,
			tempMin: jsonResponse.main.temp_min,
			tempMax: jsonResponse.main.temp_max,
			humidity: jsonResponse.main.humidity,
			feelsLike: jsonResponse.main.feels_like,
			weather: jsonResponse.weather[0].description,
		};
		console.log(result);
	};

	let handleChange = (event) => {
		setCity(event.target.value);
	};

	let handleSubmit = (event) => {
		event.preventDefault();
		console.log(city);
		setCity("");
		getWeatherInfo();
	};

	return (
		<div className="SearchBox">
			<h2>SEARCH FOR THE WEATHER</h2>
			<form onSubmit={handleSubmit}>
				<TextField
					id="city"
					onChange={handleChange}
					label="City name"
					variant="outlined"
					required
					value={city}
				/>
				<br /> <br />
				<Button type="submit" variant="contained">
					Search
				</Button>
			</form>
		</div>
	);
}
