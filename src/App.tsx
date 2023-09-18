import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className='postition-relative bg-color col-dark-text vh-100'>
			<Navbar />
			<div className='d-flex flex-column-reverse position-absolute bottom-0 vh-100 socials text-center'>
				<div className=''>|</div>
				<div className=''>|</div>
				<div className=''>|</div>
				<div className=''>|</div>
				<div className=''>|</div>
				<div className='mb-4'>
					<i className='bi bi-instagram'></i>
				</div>
				<div className=''>
					<i className='bi bi-linkedin'></i>
				</div>
				<div className=''>
					<i className='bi bi-twitter'></i>
				</div>
				<div className=''>
					<i className='bi bi-github'></i>
				</div>
			</div>
			<div className='d-flex flex-column-reverse position-absolute bottom-0 email vh-100 text-center'>
				<div className=''>|</div>
				<div className=''>|</div>
				<div className=''>|</div>
				<div className=''>|</div>
				<div className=''>|</div>
				<div className='rot-90'>littlefrancis28@gmail.com</div>
			</div>
			<div className='container pt-100'>
				<div className='col'>Hello</div>
				<div className='col'>Hello</div>
				<div className='col'>Hello</div>
			</div>
			<nav className='d-flex'>Copyright &copy;</nav>
		</div>
	);
}

export default App;
