import git from "../../assets/git.png";
import linkedin from "../../assets/linkedin.png";

const Contact = () => {
	return (
		<>
			<p className="text-3xl font-bold text-center p-4">Contact me</p>
			<div className="flex flex-row">
				<div className="w-1/4 " />
				<div className="w-1/2">
					<p className="text-center">
						You can reach me through these channels{" "}
					</p>
				</div>
				<div className="w-1/4 " />
			</div>
			<p className="text-xl font-bold text-center"></p>
			<div className="flex flex-row">
				{/* <div className="w-1/4"></div> */}
				<div className="w-full flex justify-center">
					<div className="flex flex-col md:flex-row space-y-4 md:space-x-20">
						<div className="w-32 justify-center  rounded-lg">
							<a href="mailto:oakkarrr00@gmail.com">
								<img
									className="w-full object-fit  rounded"
									src="https://static.vecteezy.com/system/resources/previews/020/964/377/non_2x/gmail-mail-icon-for-web-design-free-png.png"
									alt="me"
								/>
								<p className="p-2 text-lg text-center font-semibold">Mail</p>
								<p className="px-2 text-md "></p>
							</a>
						</div>
						<div className="w-32 justify-center rounded-lg">
							<a href="https://github.com/oakar-00" target="_blank">
								<img className="w-full object-fit rounded" src={git} alt="me" />
								<p className="p-2 text-lg text-center font-semibold">Github</p>
								<p className="px-2 text-md "></p>
							</a>
						</div>
						<div className="w-32 justify-center rounded-lg">
							<a href="https://www.linkedin.com/in/oakarmin/" target="_blank">
								<img
									className="w-full object-fit  rounded"
									src={linkedin}
									alt="me"
								/>
								<p className="p-2 text-lg text-center font-semibold">
									LinkedIn
								</p>
								<p className="px-2 text-md "></p>
							</a>
						</div>
					</div>
				</div>
				{/* <div className="w-1/4"></div> */}
			</div>
			<div className=""></div>
		</>
	);
};

export default Contact;
