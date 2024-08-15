import { Link } from "react-router-dom";

const Card = (props) => {
	return (
		<div className="w-64 justify-center border-4 border-black rounded-lg m-6">
			<Link to={`${props.link}`}>
				<img
					className="w-full object-fit border-b-2 border-black rounded"
					src={require(`../assets/${props.image}`)}
					alt="me"
				/>
				<p className="p-2 text-lg text-center font-semibold">{props.title}</p>
				<p className="px-2 text-md ">{props.description}</p>
			</Link>
		</div>
	);
};

export default Card;
