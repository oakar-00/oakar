import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<div className="flex flex-row font-bold text-lg justify-evenly border-2 border-black">
			<div className="w-1/4 p-2 hover:underline text-center ">
				<Link to="/">Home</Link>
			</div>
			<div className="w-1/4 p-2 hover:underline text-center">
				<div class="group relative cursor-pointer">
					<div class="">
						<Link class="menu-hover lg:mx-8" to="/about">
							About
						</Link>
					</div>

					<div class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible text-sm bg-opacity-100">
						<Link
							class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-800 hover:text-black hover:underline md:mx-2"
							to="/about/education"
						>
							Education
						</Link>

						<Link
							class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-800 hover:text-black hover:underline md:mx-2"
							to="/about/work"
						>
							Work Experience
						</Link>

						<Link
							class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-800 hover:text-black hover:underline md:mx-2"
							to="/about/calisthenics"
						>
							Calisthenics
						</Link>
					</div>
				</div>
			</div>

			<div className="w-1/4 p-2 hover:underline text-center">
				<div class="group relative cursor-pointer">
					<div class="">
						<Link class="menu-hover lg:mx-4" to="/apps">
							Apps
						</Link>
					</div>

					<div class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible text-sm bg-opacity-100">
						<Link
							class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-800 hover:text-black hover:underline md:mx-2"
							to="/apps/weather"
						>
							Weather
						</Link>

						<Link
							class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-800 hover:text-black hover:underline md:mx-2"
							to="/apps/jokes"
						>
							Jokes
						</Link>

						<Link
							class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-800 hover:text-black hover:underline md:mx-2"
							to="/apps/cats"
						>
							Cats
						</Link>
					</div>
				</div>
			</div>
			<div className="w-1/4 p-2 hover:underline text-center">
				<Link to="/contact">Contact</Link>
				{/* <a href="/contact">Contact</a> */}
			</div>
		</div>
	);
};

export default Menu;
