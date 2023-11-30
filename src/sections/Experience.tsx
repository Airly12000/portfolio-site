import React, { useState } from 'react';

function Experience() {
	const [tab, setTab] = useState(1);

	return (
		<div id='experience' className='pt-10 mx-lg-5 ps-lg-5'>
			<div className='px-lg-5 pt-lg-2'>
				<div className='d-flex flex-row text-center align-items-center'>
					<h1 className='sans col-light fw-b my-3 me-3 col-other'>
						<span className='col-green mono'>02.</span> Where I've Worked.
					</h1>
					<svg
						width='180'
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
							strokeWidth='0.5'
						/>
					</svg>
				</div>
				<div className='row mt-4 h-350'>
					<div className='col-lg-2 mono d-flex flex-lg-column flex-row fs-16 ps-3'>
						{tab === 1 ? (
							<div
								className='h-40 d-flex align-items-center active exp-tab justify-content-center ps-lg-3 justify-content-lg-start'
								onClick={() => setTab(1)}>
								Fusionelle
							</div>
						) : (
							<div
								className='h-40 d-flex align-items-center exp-tab justify-content-center ps-lg-3 justify-content-lg-start'
								onClick={() => setTab(1)}>
								Fusionelle
							</div>
						)}
						{tab === 2 ? (
							<div
								className='h-40 d-flex align-items-center active exp-tab justify-content-center ps-lg-3 justify-content-lg-start'
								onClick={() => setTab(2)}>
								QFace
							</div>
						) : (
							<div
								className='h-40 d-flex align-items-center exp-tab justify-content-center ps-lg-3 justify-content-lg-start'
								onClick={() => setTab(2)}>
								QFace
							</div>
						)}
					</div>
					<div className='col mt-4 mt-lg-0'>
						{tab === 1 && (
							<div className='col exp-details'>
								<h3 className='col-light fw-b'>
									FullStack Developer{' '}
									<span className='col-green'>
										@ Fusionelle Consult Limited
									</span>
								</h3>
								<h6 className='mono'>January 2020 - Present</h6>
								<ul>
									<li>
										Utilizing ReactJs to develop interactive and responsive user
										interfaces, leveraging this powerful library to create
										dynamic and efficient web applications that meet our
										project's specific requirements and deliver a seamless user
										experience.
									</li>
									<li>
										Programming with ExpressJs (NodeJs) to build robust and
										scalable server-side applications. I leveraged the features
										and capabilities of ExpressJs to create efficient APIs and
										web services, ensuring seamless data communication and
										optimal performance in our software projects.
									</li>
									<li>
										Thoroughly testing applications to guarantee their
										functionality, security, and performance, ensuring they meet
										both industry standards and user requirements.
									</li>
									<li>
										Employing the capabilities of React Native framework in mobile development, enabling me to craft versatile and powerful applications for various platforms efficiently and effectively.
									</li>
								</ul>
							</div>
						)}
						{tab === 2 && (
							<div className='col exp-details'>
								<h3 className='col-light fw-b'>
									Fronend Developer{' '}
									<span className='col-green'>@ QFace Group Ghana</span>
								</h3>
								<h6 className='mono'>March 2022 - May 2022</h6>
								<ul>
									<li>
										Programming with C# and Blazor to develop modern web
										applications. I used Blazor's component-based architecture
										and C# to create interactive and responsive web interfaces,
										ensuring a seamless and efficient user experience for our
										applications.
									</li>
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experience;
