const EduDetails = () => {
	return (
		<>
			<div className="flex flex-col md:flex-row md:justify-evenly items-center justify-center py-4 border-t-2 border-b-2 border-black">
				{/* <h1 className="flex flex-col text-start text-3xl py-4">About Me</h1> */}
				<div>
					<img
						className="flex object-cover h-60 border-2 justify-center"
						src={require("../../../assets/edu.jpg")}
						alt="image_not_available"
					/>
				</div>
				<div className="text-center md:text-start md:ml-4">
					<span className="font-bold text-lg">
						Singapore University of Technology and Design (SUTD)
					</span>
					<br />
					<br />
					Bachelor of Engineering (Computer Science and Design)
					<br />
					Honours with MERIT
					<br />
					Minor in Artificial Intelligence
					<br />
					<br />
					SUTD Merit Scholarship
					<br />
					<br />
					<span className="font-bold ">Courses</span>
					<br />
					Machine Learning, Information Retrieval, <br />
					Computer Vision, Database Systems
				</div>
			</div>
			<div className="flex flex-col md:flex-row md:justify-evenly items-center justify-center py-4  border-b-2 border-black">
				{/* <h1 className="flex flex-col text-start text-3xl py-4">About Me</h1> */}

				<div className="text-center md:text-start md:ml-4">
					<span className="font-bold text-lg">
						Aalto University, Espoo Finland
					</span>
					<br />
					<br />
					Exchange Studies
					<br />
					<br />
					Wilmar Global Exchange Award
					<br />
					<br />
					<span className="font-bold ">Courses</span>
					<br />
					Deep Learning, Artificial Intelligence, <br />
					Data Visualization, Fullstack Development
				</div>
				<div>
					<img
						className="flex object-cover h-60 border-2 justify-center"
						src={require("../../../assets/finland.jpg")}
						alt="image_not_available"
					/>
				</div>
			</div>
		</>
	);
};

export default EduDetails;
