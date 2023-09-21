import React from 'react';

function Contact() {
	return (
		<div
			id='contact'
			className='pt-10 mt-6 mx-5 mb-10 d-flex justify-content-center align-items-center flex-column'>
			<h6 className='sans col-green fs-18 text-center'>04. What's Next?</h6>
			<h2 className='sans col-light fw-b fs-50 my-3 text-center'>
				Get In Touch
			</h2>
			<p className='w-50 text-center fs-18'>
				I’m currently looking for any new opportunities, my inbox is always
				open. Whether you have a question or just want to say hi, I’ll try my
				best to get back to you!
			</p>
			<a
				href='mailto:littlefrancis28@gmai.com'
				type='button'
				className='btn w-20 h-40 mt-5 d-flex align-items-center justify-content-center'
				id='btn-green'>
				<span className='mono fs-18'>Contact Me</span>
			</a>
		</div>
	);
}

export default Contact;
