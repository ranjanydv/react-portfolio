const About = () => {
	function getAge() {
		const dateString = '1999-09-13'
		let today = new Date()
		let birthDate = new Date(dateString)
		let age = today.getFullYear() - birthDate.getFullYear()
		let m = today.getMonth() - birthDate.getMonth()
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--
		}
		return age
	}
	return (
		<div
			name="about"
			className="w-full min-h-[100dvh] h-screen bg-gradient-to-b from-gray-800 via-gray-800 to-black text-white "
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						About
					</p>
				</div>
				<div>
					<p className="">
                        As a {getAge()}-year-old programmer living in Nepal's capital, I excel in system design and problem-solving. I'm passionate about sharing ideas and creating innovative solutions. When not coding, I enjoy reading to unwind and stay creative.
					</p>
					<br />
					<p className="">
                        I kickstarted my programming journey as a backend developer, diving deep into the world of NodeJS and NestJS. These powerful technologies allowed me to build robust and scalable server-side applications. As I progressed, I expanded my skill set to include frontend development, particularly with NextJS and AngularJS. This combination of backend expertise and frontend capabilities opened up new horizons for me. The seamless integration between NodeJS-based backends and NextJS frontends, along with the structured approach of AngularJS, provided a comprehensive and innovative development experience. This full-stack approach not only broadened my perspective but also solidified my passion for creating end-to-end web solutions.
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
