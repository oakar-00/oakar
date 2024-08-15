import EduDetails from "./EduDetails";

const Education = () => {
	return (
		<>
			<p className="text-3xl font-bold text-center p-4">Education</p>
			<div className="flex flex-row">
				<div className="w-1/4 " />
				<div className="w-1/2">
					<EduDetails />
				</div>
				<div className="w-1/4 " />
			</div>
			<div className="flex flex-row">
				{/* <div className="w-1/4"></div> */}
				<div className="w-full flex justify-center">
					<div className="flex flex-col md:flex-row ">
						{/* <Card image="edu.jpg" title="Education" link="education" />
						<Card image="workExp.png" title="Work Experience" link="work" />
						<Card image="calis.png" title="Calisthenics" link="calisthenics" /> */}
					</div>
				</div>
				{/* <div className="w-1/4"></div> */}
			</div>
			<div className="p-2"></div>
		</>
	);
};

export default Education;
