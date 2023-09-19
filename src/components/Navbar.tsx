import React from 'react';

function Navbar() {
	return (
		<nav className='navbar fixed-top d-flex px-2 px-md-5 py-3 bg-color text-white top-nav'>
			<div className='flex-grow-1'>
				<img src='assets/img/logo.svg' alt='Logo' height={50} width={50} />
			</div>
			<div className='d-none d-md-flex flex-direction-row align-items-center text-center col-dark-text'>
				<div className='link-width mono'>
					<span className='col-green'>01.</span> About
				</div>
				<div className='link-width mono'>
					<span className='col-green'>02.</span> Experience
				</div>
				<div className='link-width mono'>
					<span className='col-green'>03.</span> Work
				</div>
				<div className='link-width mono'>
					<span className='col-green'>04.</span> Contact
				</div>
				<div className='link-width mono'>
					<button className='btn' id='btn-green'>
						Resume
					</button>
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
				className='offcanvas offcanvas-end'
				tabIndex={-1}
				id='offcanvasNavbar'
				aria-labelledby='offcanvasNavbarLabel'>
				<div className='offcanvas-header d-flex'>
					<div className='flex-grow-1'></div>
					<button
						type='button'
						className='btn-close'
						data-bs-dismiss='offcanvas'
						aria-label='Close'></button>
				</div>
				<div className='offcanvas-body text-center'>
					<ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
						<li className='nav-item'>
							<a className='nav-link active' aria-current='page' href='#'>
								Home
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Link
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
