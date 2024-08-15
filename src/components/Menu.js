const Menu = () => {
	return (
		<div className="flex flex-row font-bold text-lg justify-evenly border-2 border-black">
			<div className="w-1/4 p-2 hover:underline text-center ">
				<a href="/">Home</a>
			</div>
			<div className="w-1/4 p-2 hover:underline text-center">
				<div class="group relative cursor-pointer">
					<div class="">
						<a class="menu-hover lg:mx-8" href="/about">
							About
						</a>
					</div>

					<div class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible text-sm bg-opacity-100">
						<a
							class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-800 hover:text-black hover:underline md:mx-2"
							href="/about/education"
						>
							Education
						</a>

						<a
							class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-800 hover:text-black hover:underline md:mx-2"
							href="/about/work"
						>
							Work Experience
						</a>

						<a
							class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-800 hover:text-black hover:underline md:mx-2"
							href="/about/calisthenics"
						>
							Calisthenics
						</a>
					</div>
				</div>
			</div>

			<div className="w-1/4 p-2 hover:underline text-center">
				<div class="group relative cursor-pointer">
					<div class="">
						<a class="menu-hover lg:mx-4" href="/apps">
							Apps
						</a>
					</div>

					<div class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible text-sm bg-opacity-100">
						<a
							class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-800 hover:text-black hover:underline md:mx-2"
							href="/apps/weather"
						>
							Weather
						</a>

						<a
							class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-800 hover:text-black hover:underline md:mx-2"
							href="/apps/jokes"
						>
							Jokes
						</a>

						<a
							class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-800 hover:text-black hover:underline md:mx-2"
							href="/apps/cats"
						>
							Cats
						</a>
					</div>
				</div>
			</div>
			<div className="w-1/4 p-2 hover:underline text-center">
				<a href="/contact">Contact</a>
				{/* <a href="/contact">Contact</a> */}
			</div>
		</div>
	);
};

export default Menu;
