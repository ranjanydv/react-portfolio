import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import heroImage from "../assets/heroImage.png";

const Home = () => {
	const heroText = `Crafting Digital Solutions from the Roof of the World 🇳🇵 🇳🇵. I wrestle with software – designing its guts, building its body, testing its reflexes, and keeping it in fighting shape. Embedded systems are my playground. Whether I'm a lone wolf or part of the pack, I get things done.`
	return (
		<div
			name="home"
			className="bg-gradient-to-b from-black via-black to-gray-800 pt-[10vh] w-full h-screen min-h-[100dvh]"
		>
			<div className="flex md:flex-row flex-col-reverse justify-center items-center mx-auto px-4 max-w-screen-lg h-full">
				<div className="flex flex-col justify-center h-full">
					<h2 className="font-bold text-white text-4xl sm:text-7xl">
						I am a Full Stack Developer
					</h2>
					<p className="py-4 max-w-md text-gray-500">
						{heroText}
					</p>
					<div className="flex items-center gap-4">
						<a href="https://github.com/ranjanydv" target="_blank" rel="noopener noreferrer">
							<a className="group flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 my-2 px-6 py-3 rounded-md w-fit text-white cursor-pointer">
								See Works
								<span className="group-hover:scale-90 duration-300">
									<MdKeyboardArrowRight size={25} className="ml-1" />
								</span>
							</a>
						</a>
						<div className="md:hidden flex gap-4 text-white">
							<a href="https://www.linkedin.com/in/theranzanydv" target="_blank" rel="noopener noreferrer">
								<FaLinkedin size={25} />
							</a>
							<a href="https://x.com/theranzanydv" target="_blank" rel="noopener noreferrer">
								<FaTwitter size={25} />
							</a>
						</div>
					</div>
				</div>
				<div>
					<img
						src={heroImage}
						alt="Ranjan Yadav"
						className="mx-auto rounded-2xl w-4/5 md:w-full"
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
