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
			className="w-full h-screen bg-gradient-to-b from-gray-800 via-gray-800 to-black text-white "
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						About
					</p>
				</div>
				<div>
					<p className="text-xl mt-20">
						I'm {getAge()} years old, a programmer and and I currently live in
						Nepal's capital. At the same time that I work to identify better
						approaches to issues, I also enjoy expressing my thoughts to others.
						Besides gaming and poetry, I like both of those things.
					</p>
					<br />
					<p className="text-xl">
						As a PHP developer, I began my programming career. Over time, I
						discovered working with Flutter to design and develop apps.
						Nevertheless, working with flutter and creating the backend of
						projects using NodeJS was a novel and forward-thinking experience,
						which made me want to stick with it.
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
