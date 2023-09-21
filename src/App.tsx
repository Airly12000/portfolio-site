import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Socials from './components/Socials';
import Email from './components/Email';
import About from './sections/About';
import Experience from './sections/Experience';
import Work from './sections/Projects';
import Contact from './sections/Contact';
import Introduction from './sections/Introduction';

function App() {
	return (
		<div className='postition-relative bg-color col-dark-text'>
			<Navbar />
			<Socials />
			<Email />
			<div className='container pt-100'>
				<Introduction />
				<About />
				<Experience />
				<Work />
				<Contact />
				<nav className='d-flex justify-content-center flex-column text-center bg-color h-55 align-items-center mt-5'>
					<span>Design by Brittany Chiang.</span>
					<span>
						Built by{' '}
						<span className='col-green'>Agbesi-Ntibrey Francis Jnr</span>
					</span>
				</nav>
			</div>
		</div>
	);
}

export default App;
