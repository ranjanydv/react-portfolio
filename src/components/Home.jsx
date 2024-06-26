import heroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
	return (
		<div
			name="home"
			className="min-h-screen h-full w-full bg-gradient-to-b from-black via-black to-gray-800"
		>
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-4xl sm:text-7xl font-bold text-white">
						I am a Full Stack Developer
					</h2>
					<p className="text-gray-500 py-4 max-w-md">
						A self-taught skilled developer with experience in software system
						design, implementation, testing, and maintenance. with a diverse and
						promising skill set capable of working with a wide range of embedded
						systems, platforms. Capable of working independently on tasks as
						well as in a productive team.
					</p>
					<div>
						<a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
							<a className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
								Resume
								<span className="group-hover:rotate-90 duration-300">
									<MdKeyboardArrowRight size={25} className="ml-1" />
								</span>
							</a>
						</a>
					</div>
				</div>
				<div>
					<img
						src={heroImage}
						alt="Ranjan Yadav"
						className="rounded-2xl mx-auto w-2/3 md:w-full"
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
