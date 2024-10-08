import { useState } from "react";
import InputField from "./InputField";

function Cats() {
	const [code, setCode] = useState("");
	const [render, setRender] = useState(false);
	const [source, setSource] = useState("");

	const httpStatusCodes = [
		100, 101, 102, 103, 200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300,
		301, 302, 303, 304, 305, 306, 307, 308, 400, 401, 402, 403, 404, 405, 406,
		407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423,
		424, 425, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507,
		508, 510, 511,
	];
	const codeChangeHandler = (event) => {
		setCode(event);
	};
	return (
		<div className="flex flex-col justify-center text-center">
			<div className="pt-4 text-sm focus:border-fuchsia-600 focus:ring-pink-500 focus:outline-none ">
				<p className="text-md">Enter a Http Status code</p>
				<div className="flex flex-col items-center justify-center">
					<div className="text-lg focus:border-fuchsia-600 focus:ring-pink-500 focus:outline-none">
						<input
							className="rounded-full h-10 focus:outline-fuchsia-600 focus:outline text-black p-4 border-2 border-slate-400 focus:border-none"
							value={code}
							onChange={(e) => codeChangeHandler(e.target.value)}
						></input>
					</div>
				</div>
				<p className="text-xs">and I will give you picture of a cat.</p>
			</div>
			<div className="flex justify-center pt-2">
				{render ? <img className=" w-80" src={source}></img> : <></>}
			</div>
			<div className="flex flex-row justify-center space-x-8">
				<div className="">
					<button
						className="bg-gradient-to-r from-white to-gray-200 hover:from-purple-500 hover:to-pink-500 hover:text-white font-semibold mt-6 py-2 px-4 border border-b-4 border-r-4 border-gray-300 rounded"
						onClick={() => {
							setRender(true);
							setCode("");
							let tem =
								httpStatusCodes[
									Math.floor(Math.random() * httpStatusCodes.length)
								];
							setSource(`https://http.cat/${tem}`);
							console.log(httpStatusCodes.length);
						}}
					>
						<p>Generate a Random Cat</p>
					</button>
				</div>
				<div className="">
					<button
						className="bg-gradient-to-r from-white to-gray-200 hover:from-purple-500 hover:to-pink-500 hover:text-white font-semibold mt-6 py-2 px-4 border border-b-4 border-r-4 border-gray-300 rounded"
						onClick={() => {
							setRender(true);
							setSource(`https://http.cat/${code}`);
							console.log(httpStatusCodes.length);
						}}
					>
						<p>Submit</p>
					</button>
				</div>
			</div>
			<p className="pt-4 text-xs">
				Made using:{" "}
				<a
					className="hover:underline"
					href="https://http.cat/"
					rel="noopener noreferrer"
					target="_blank"
				>
					https://http.cat/
				</a>
			</p>
		</div>
	);
}

export default Cats;
