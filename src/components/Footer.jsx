const Footer = () => {
	const date = new Date().getFullYear()

	return (
		<div>
			<div className="flex flex-col p-4 justify-center max-w-screen text-center mx-auto h-full bg-gradient-to-b from-black to-gray-900 text-white">
				&copy;{date} Ranjan Yadav | All Rights Reserved.
			</div>
		</div>
	)
}

export default Footer
