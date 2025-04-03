import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import SocialLinks from './components/SocialLinks'

function App() {
	return (
		<main className='max-w-screen max-h-screen overflow-hidden'>
			{/* <Navbar /> */}
			<Home />
			{/* <About />
			<Skills />
			<Contact /> */}
			{/* <Footer /> */}

			<SocialLinks />
		</main>
	)
}

export default App
