import React from 'react';

function Socials() {
	return (
		<div className='d-none d-md-flex flex-column-reverse position-fixed bottom-0 socials text-center'>
			<div className=''>|</div>
			<div className=''>|</div>
			<div className=''>|</div>
			<div className=''>|</div>
			<div className=''>|</div>
			<a href='https://www.instagram.com/air._.ly' className='mb-4 fs-20'>
				<i className='bi bi-instagram'></i>
			</a>
			<a
				href='https://www.linkedin.com/in/francis-jnr-agbesi-ntibrey-9762781a5/'
				className='mb-3 fs-20'>
				<i className='bi bi-linkedin'></i>
			</a>
			<a href='https://twitter.com/airlyyy_' className='mb-3 fs-20'>
				<i className='bi bi-twitter'></i>
			</a>
			<a href='https://web.facebook.com/diablo.noir.75' className='mb-3 fs-20'>
				<i className='bi bi-facebook'></i>
			</a>
			<a href='https://github.com/Airly12000' className='mb-3 fs-20'>
				<i className='bi bi-github'></i>
			</a>
		</div>
	);
}

export default Socials;
