import React from 'react';
// import {bootstrap} from 'bootstrap'

function Navbar() {
	window.addEventListener('resize', () => {
		const myOffcanvas = document.getElementById('offcanvasNavbar');
		myOffcanvas?.classList.remove('show');
	});
	return (
		<nav className='navbar fixed-top d-flex px-2 px-md-5 py-3 bg-color text-white top-nav'>
			<div className='flex-grow-1'>
				<a href='/'>
					<img src='assets/img/logo.svg' alt='Logo' height={50} width={50} />
				</a>
			</div>
			<div className='d-none d-md-flex flex-direction-row align-items-center text-center col-dark-text'>
				<div className='link-width mono'>
					<a href='#about' className='nav-links'>
						<span className='col-green'>01.</span> About
					</a>
				</div>
				<div className='link-width mono'>
					<a href='#experience' className='nav-links'>
						<span className='col-green'>02.</span> Experience
					</a>
				</div>
				<div className='link-width mono'>
					<a href='#projects' className='nav-links'>
						<span className='col-green'>03.</span> Projects
					</a>
				</div>
				<div className='link-width mono'>
					<a href='#contact' className='nav-links'>
						<span className='col-green'>04.</span> Contact
					</a>
				</div>
				<div className='link-width mono'>
					<a
						href='assets/Resume.pdf'
						target='__blank'
						className='btn'
						id='btn-green'>
						Resume
					</a>
				</div>
			</div>
			<button
				className='d-block d-md-none border border-0 bg-transparent'
				type='button'
				data-bs-toggle='offcanvas'
				data-bs-target='#offcanvasNavbar'
				aria-controls='offcanvasNavbar'
				aria-label='Toggle navigation'>
				{/* <span className='navbar-toggler-icon'></span> */}
				<img
					src='assets/img/toggler.svg'
					alt='Toggler'
					height={50}
					width={50}
				/>
			</button>
			<div
				className='offcanvas offcanvas-end vh-100 w-350 bg-color'
				tabIndex={-1}
				id='offcanvasNavbar'
				aria-labelledby='offcanvasNavbarLabel'>
				<div className='offcanvas-header d-flex'>
					<div className='flex-grow-1'></div>
					<button
						type='button'
						className='btn-close fs-20'
						id='col-green'
						data-bs-dismiss='offcanvas'
						aria-label='Close'></button>
				</div>
				<div className='offcanvas-body text-center'>
					<ul className='navbar-nav d-flex justify-content-center align-items-center flex-grow-1 pe-3'>
						<li
							className='link-width mono mb-4 fs-20'
							data-bs-dismiss='offcanvas'>
							<a href='#about' className='nav-links'>
								<div className='col-green'>01.</div> About
							</a>
						</li>
						<li
							className='link-width mono mb-4 fs-20'
							data-bs-dismiss='offcanvas'>
							<a href='#experience' className='nav-links'>
								<div className='col-green'>02.</div> Experience
							</a>
						</li>
						<li
							className='link-width mono mb-4 fs-20'
							data-bs-dismiss='offcanvas'>
							<a href='#projects' className='nav-links'>
								<div className='col-green'>03.</div> Projects
							</a>
						</li>
						<li
							className='link-width mono mb-4 fs-20'
							data-bs-dismiss='offcanvas'>
							<a href='#contact' className='nav-links'>
								<div className='col-green'>04.</div> Contact
							</a>
						</li>
						<li
							className='link-width mono mb-4 h-55 mt-3 fs-20'
							data-bs-dismiss='offcanvas'>
							<a
								href='assets/Resume.pdf'
								target='__blank'
								className='btn w-100 h-100 d-flex align-items-center justify-content-center'
								id='btn-green'>
								Resume
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
