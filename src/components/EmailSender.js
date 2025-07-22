import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';
import './EmailSender.css';

const EmailSender = () => {
  const recaptchaRef = useRef();
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
	
	const recaptchaToken = recaptchaRef.current.getValue();
	  if (!recaptchaToken) {
		alert("Please prove you are not a bot.");
		return;
	  }

	  try {		
		const verifyResponse = await fetch("https://script.google.com/macros/s/AKfycbz5Z3g2u8LWfHgcRBqAW4GWmSGGQmTpA1-JjP_ZGM4xU9uPwNqr4SfAWhSGYha3BDqJ/exec", {
		  method: "POST",
		  body: recaptchaToken,
		  headers: { "Content-Type": "text/plain" },
		});

		const verifyResult = await verifyResponse.json();

		if (!verifyResult.success) {
		  alert("reCAPTCHA verification failed.");
		  return;
		}

/*
		const form = e.target;
		form.time.value = new Date().toLocaleString();

		await emailjs.sendForm(
		  process.env.REACT_APP_EMAILJS_SERVICE_ID,
		  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
		  formRef.current,
		  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
		);

		setStatus("Your message is sent.");
		formRef.current.reset();
		recaptchaRef.current.reset();*/

	  } catch (error) {
		console.error(error);
		setStatus("Failed!! Please retry.");
	  }
	  
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'sans-serif' }}>
      <h2>Send Email</h2>
      <form ref={formRef} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="your name" required />
        <input type="email" name="email" placeholder="your email" required />
        <textarea name="message" placeholder="message" required />
		
		<input type="hidden" name="title" value="Fullstack Portfolio - Contact" />
		<input type="hidden" name="time" />
		
		<ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LcmHHcrAAAAALq1ZFXScQndsIhe-tHDkOnrh5DZ"
        />
	  
        <button type="submit" className="submit">Send</button>
      </form>
      {status && <p style={{ marginTop: '10px' }}>{status}</p>}
    </div>
  );
};

export default EmailSender;
