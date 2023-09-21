import React from 'react';

function About() {
	return (
		<div id='about' className='mx-5 ps-5 pt-6'>
			<div className='d-flex flex-row text-center align-items-center'>
				<h1 className='sans col-light fw-b fs-26 my-3 me-md-3 col-other'>
					<span className='col-green mono fs-26'>01.</span> About Me
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
			<div className='row mt-4'>
				<div className='col pe-4'>
					<p className='fs-18 sans about-p'>
						Highly motivated, dedicated with ambitions to pursue careers in
						Software Engineering, Artificial Intelligence, Web Development,
						Cyber Security and Network Administration.
					</p>
					<p className='fs-18 sans about-p'>
						My ability to collaborate effectively within cross-functional teams,
						coupled with a keen problem-solving aptitude, allows me to tackle
						challenges head-on and deliver high-quality results. With a passion
						for staying updated on emerging technologies, I am committed to
						continuous learning and applying innovative approaches to drive
						software excellence.
					</p>
					<p className='fs-18 sans about-p'>
						Here are some of the technologies I'm familiar with:
					</p>
					<div className='row ps-3 mono'>
						<ul className='col-4'>
							<li>JavaScript (ES6+)</li>
							<li>React</li>
							<li>Express (NodeJs)</li>
						</ul>
						<ul className='col-4'>
							<li>Typescript</li>
							<li>WordPress</li>
							<li>Python</li>
						</ul>
						<ul className='col-4'>
							<li>SQL (Mongo & MySQL)</li>
							<li>Figma</li>
						</ul>
					</div>
				</div>
				<div className='col-md-5 position-relative'>
					<img
						src='assets/img/photo.jpg'
						alt='myPhoto'
						className='position-absolute top-0 left-0 rounded about-img'
					/>
					<div className='position-absolute rounded about-border'></div>
				</div>
			</div>
		</div>
	);
}

export default About;
