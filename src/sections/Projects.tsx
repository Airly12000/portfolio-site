import React from 'react';

function Projects() {
	return (
		<div id='projects' className='pt-10 mx-5 ps-5'>
			<div className='d-flex flex-row text-center align-items-center mb-4'>
				<h1 className='sans col-light fw-b fs-26 my-3 me-md-3 col-other'>
					<span className='col-green mono fs-26'>03.</span> Some Projects I've
					Worked On.
				</h1>
				<svg
					width='307'
					height='1'
					viewBox='0 0 307 1'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<line
						x1='-0.000854492'
						y1='0.25'
						x2='307.001'
						y2='0.25'
						stroke='#8892b0'
						stroke-width='0.5'
					/>
				</svg>
			</div>
			<div className='position-relative h-350'>
				<img
					src='assets/img/invoiceapp.png'
					alt='invoiceapp'
					className='left-img rounded'
				/>
				<div className='position-absolute end-0 top-0 text-end'>
					<div className='col mb-2 mt-4'>
						<h6 className='mono fs-14 col-green'>Featured Project</h6>
					</div>
					<div className='col mb-2'>
						<h4 className='fs-24 fw-b'>Invoice App</h4>
					</div>
					<div className='col mb-2 proj-card rounded mt-4'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio
						dignissimos, debitis, accusantium rem omnis consequuntur at
						distinctio animi quae illum, laboriosam sapiente aperiam itaque
						blanditiis ullam. Libero, deserunt consequuntur?
					</div>
					<div className='col mb-2 mt-4 mono row justify-content-end fs-12 text-end'>
						<div className='col-2'>React</div>
						<div className='col-3'>Bootsrap Icons</div>
						<div className='col-2'>JavaScript</div>
						<div className='col-2'>Bootstrap</div>
					</div>
					<div className='col mb-2 mt-3 row justify-content-end text-end'>
						<div className='col-1'>
							<a
								href='https://github.com/Airly12000/amalitech-invoice-app'
								className='proj-link'>
								<i className='bi bi-github'></i>
							</a>
						</div>
						<div className='col-1'>
							<a
								href='http://amalitech-invoice-app-production.up.railway.app'
								className='proj-link'>
								<i className='bi bi-box-arrow-up-right'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='position-relative h-350 mt-6'>
				<img
					src='assets/img/adminox.png'
					alt='invoiceapp'
					className='right-img rounded'
				/>
				<div className='position-absolute start-0 top-0 text-start'>
					<div className='col mb-2 mt-4'>
						<h6 className='mono fs-14 col-green'>Featured Project</h6>
					</div>
					<div className='col mb-2'>
						<h4 className='fs-24 fw-b'>MyHostel GH</h4>
					</div>
					<div className='col mb-2 proj-card rounded mt-4'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio
						dignissimos, debitis, accusantium rem omnis consequuntur at
						distinctio animi quae illum, laboriosam sapiente aperiam itaque
						blanditiis ullam. Libero, deserunt consequuntur?
					</div>
					<div className='col mb-2 mt-4 mono row justify-content-start fs-12 text-start'>
						<div className='col-2'>JavaScript</div>
						<div className='col-2'>Bootstrap</div>
						<div className='col-3'>Bootsrap Icons</div>
						<div className='col-2'>React</div>
					</div>
					<div className='col mb-2 mt-3 row justify-content-start text-start'>
						<div className='col-1'>
							<a
								href='https://github.com/Airly12000/MySite-frontend'
								className='proj-link'>
								<i className='bi bi-github'></i>
							</a>
						</div>
						<div className='col-1'>
							<a href='http://github.com' className='proj-link'>
								<i className='bi bi-box-arrow-up-right'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
