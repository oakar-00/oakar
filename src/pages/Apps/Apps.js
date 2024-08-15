import Card from "../../components/Card";

function Apps() {
	return (
		<>
			<p className="text-3xl font-bold text-center p-4">Summary</p>
			<div className="flex flex-row">
				<div className="w-1/4 " />
				<div className="w-1/2">
					<p className="text-center">
						Being a software engineer, I like to build apps{" "}
						<p className=" italic">(and also have fun while doing it)</p>
					</p>
				</div>
				<div className="w-1/4 " />
			</div>
			<p className="text-xl font-bold text-center p-4">Applications</p>
			<div className="flex flex-row">
				{/* <div className="w-1/4"></div> */}
				<div className="w-full flex justify-center">
					<div className="flex flex-col md:flex-row ">
						<Card image="weather.jpg" title="Weather" link="weather" />
						<Card image="joke.jpg" title="Jokes" link="jokes" />
						<Card image="cat.jpg" title="Cats" link="cats" />
					</div>
				</div>
				{/* <div className="w-1/4"></div> */}
			</div>
			<div className="p-2"></div>
		</>
	);
}

export default Apps;
