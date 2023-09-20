import React, { useState } from 'react';

function Experience() {
	const [tab, setTab] = useState(1);

	return (
		<div id='experience' className='pt-10 mx-5 ps-5'>
			<div className='container px-5 pt-2'>
				<div className='d-flex flex-row text-center align-items-center'>
					<h1 className='sans col-light fw-b fs-26 my-3 me-md-3 col-other'>
						<span className='col-green mono fs-26'>02.</span> Where I've Worked.
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
				<div className='row mt-4 h-350'>
					<div className='col-2 mono fs-16'>
						{tab === 1 ? (
							<div
								className='col h-40 d-flex align-items-center ps-3 active exp-tab'
								onClick={() => setTab(1)}>
								Fusionelle
							</div>
						) : (
							<div
								className='col h-40 d-flex align-items-center ps-3 exp-tab'
								onClick={() => setTab(1)}>
								Fusionelle
							</div>
						)}
						{tab === 2 ? (
							<div
								className='col h-40 d-flex align-items-center ps-3 active exp-tab'
								onClick={() => setTab(2)}>
								QFace
							</div>
						) : (
							<div
								className='col h-40 d-flex align-items-center ps-3 exp-tab'
								onClick={() => setTab(2)}>
								QFace
							</div>
						)}
					</div>
					<div className='col'>
						{tab === 1 && (
							<div className='col'>
								<h3 className='fs-20'>
									FullStack Developer{' '}
									<span className='col-green'>
										@ Fusionelle Consult Limited
									</span>
								</h3>
								<h6 className='mono'>January 2020 - Present</h6>
								<ul>
									<li>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Aliquam voluptate corporis quod facilis commodi doloribus
										cumque odio quaerat! Error temporibus, itaque dicta
										reiciendis ut enim distinctio molestiae obcaecati
										consequatur facere.
									</li>
									<li>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Aliquam voluptate corporis quod facilis commodi doloribus
										cumque odio quaerat! Error temporibus, itaque dicta
										reiciendis ut enim distinctio molestiae obcaecati
										consequatur facere.
									</li>
									<li>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Aliquam voluptate corporis quod facilis commodi doloribus
										cumque odio quaerat! Error temporibus, itaque dicta
										reiciendis ut enim distinctio molestiae obcaecati
										consequatur facere.
									</li>
								</ul>
							</div>
						)}
						{tab === 2 && (
							<div className='col'>
								<h3 className='fs-20'>
									Fronend Developer{' '}
									<span className='col-green'>@ QFace Group Ghana</span>
								</h3>
								<h6 className='mono'>January 2020 - Present</h6>
								<ul>
									<li>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Itaque porro enim repellendus id ipsa repellat illo
										cupiditate, placeat similique quasi asperiores velit aperiam
										rerum incidunt accusantium omnis, dicta neque fugit.
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
