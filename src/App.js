import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About/About";
import Education from "./pages/About/Education/Education";
import Apps from "./pages/Apps/Apps";
import Weather from "./pages/Apps/Weather/Weather";
import Contact from "./pages/Contact/Contact";
import Cats from "./pages/Apps/Cats/Cats";
import Home from "./pages/Home/Home";
import JokeForm from "./pages/Apps/Joke/JokeForm";
import { HashRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import WorkExp from "./pages/About/Work/WorkExp";
import Calisthenics from "./pages/About/Calisthenics/Calisthenics";

function App() {
	return (
		<>
			<HashRouter>
				<div className="flex flex-col bg-white min-h-screen justify-between">
					<Header />

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/about/education" element={<Education />} />
						<Route path="/about/work" element={<WorkExp />} />
						<Route path="/about/calisthenics" element={<Calisthenics />} />

						<Route path="/apps" element={<Apps />} />
						<Route path="/apps/weather" element={<Weather />} />
						<Route path="/apps/jokes" element={<JokeForm />} />
						<Route path="/apps/cats" element={<Cats />} />

						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<NotFound />} />
					</Routes>

					<Footer />
				</div>
			</HashRouter>
		</>
	);
}

export default App;
