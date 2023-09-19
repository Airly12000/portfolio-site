import React from 'react';

function Socials() {
	return (
		<div className='d-none d-md-flex flex-column-reverse position-fixed bottom-0 socials text-center'>
			<div className=''>|</div>
			<div className=''>|</div>
			<div className=''>|</div>
			<div className=''>|</div>
			<div className=''>|</div>
			<div className='mb-4 fs-20'>
				<i className='bi bi-instagram'></i>
			</div>
			<div className='mb-3 fs-20'>
				<i className='bi bi-linkedin'></i>
			</div>
			<div className='mb-3 fs-20'>
				<i className='bi bi-twitter'></i>
			</div>
			<div className='mb-3 fs-20'>
				<i className='bi bi-facebook'></i>
			</div>
			<div className='mb-3 fs-20'>
				<i className='bi bi-github'></i>
			</div>
		</div>
	);
}

export default Socials;
