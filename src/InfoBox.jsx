import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox() {
	const INIT_IMG =
		"https://images.unsplash.com/photo-1423209086112-cf2c8acd502f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

	let weatherInfo = {
		city: "Allahabad",
		temp: 24.0,
		Humidity: 45,
		Min_Temp: 25.03,
		Max_Temp: 23.04,
		feels_like: 20.0,
		weather: "haze",
	};

	return (
		<div>
			<h1>Weather Info : {weatherInfo.weather} </h1>
			<div className="InfoBox">
				<Card sx={{ maxWidth: 345 }}>
					<CardMedia component="img" alt="City" height="140" image={INIT_IMG} />
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{weatherInfo.city}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							<p>Temperature = {weatherInfo.temp}&deg;C</p>
							<p>Min Temperature = {weatherInfo.Max_Temp}&deg;C</p>
							<p>Max Temperature = {weatherInfo.Max_Temp}&deg;C</p>
							<p>Humidity = {weatherInfo.Humidity}</p>
							<p>
								The Weather can be described as{" "}
								<b>
									<i>{weatherInfo.weather} </i>{" "}
								</b>{" "}
								and feels like {weatherInfo.feels_like}
								&deg;C
							</p>
						</Typography>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
