import { useState } from "react";
import React from "react";

import ContactForm from "./contactForm";

const ContactPage = (props) => {
	const [formData, setFormData] = useState({});

	return (
		<div className="contact-wrapper">
			<div className="hero-wrapper">
				<div className="hero-container">
					<h3>Connect with me today.</h3>
				</div>

				<div className="home-mouse">
					<div className="mouse"></div>
				</div>
			</div>

			<ContactForm
				formData={formData}
				// emailSent={props.emailSent}
				// errors={props.errors}
				// formControls={props.formControls}
				// onChange={props.onChange}
				// onClick={props.onClick}
			/>
		</div>
	);
};

export default ContactPage;
