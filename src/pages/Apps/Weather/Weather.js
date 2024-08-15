import { useState } from "react";
import countriesServices from "./services/countries";
import { useEffect } from "react";
import Search from "./Search";

const Weather = () => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		countriesServices.getAll().then((response) => {
			console.log(response.data);
			setCountries(response.data);
		});
	}, []);
	return (
		<div className="flex flex-col justify-center items-center ">
			<Search countries={countries} />
		</div>
	);
};

export default Weather;
