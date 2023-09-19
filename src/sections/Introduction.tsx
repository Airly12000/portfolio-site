import React from 'react';

function Introduction() {
	return (
		<div className='container mx-4 mb-5 mt-6'>
			<h4 className='col-green mono mb-4 mt-5 fs-20'>Hi, my name is</h4>
			<h1 className='sans col-light fw-b fs-60 my-3'>
				Agbesi-Ntibrey Francis Jnr.
			</h1>
			<h1 className='sans col-other fw-b fs-60 my-3'>
				I build things for the web.
			</h1>
			<p className='sans w-50 fs-20 mt-3 mb-5'>
				I’m a software engineer specializing in building (and occasionally
				designing) exceptional digital experiences. Currently, I'm a freelancer
				looking for work...
			</p>
			<button type='button' className='btn w-25 fs-20 sans h-55' id='btn-green'>
				Contact Me
			</button>
		</div>
	);
}

export default Introduction;
