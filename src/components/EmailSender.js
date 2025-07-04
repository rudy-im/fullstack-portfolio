import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';
import './EmailSender.css';

const EmailSender = () => {
  const recaptchaRef = useRef();
  const [captchaValid, setCaptchaValid] = useState(false);
  const formRef = useRef();
  const [status, setStatus] = useState('');
  
  
  const handleCaptchaChange = (value) => {
    setCaptchaValid(!!value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
	
	if (!captchaValid) {
      alert("Please prove you are not a bot.");
      return;
    }
	
	const form = e.target;
	form.time.value = new Date().toLocaleString();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
	  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        setStatus('Your message is sent.');
        formRef.current.reset();
		recaptchaRef.current.reset();
      },
      (error) => {
        setStatus('Failed!! Please retry.');
        console.error(error);
      }
    );
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
          onChange={handleCaptchaChange}
        />
	  
        <button type="submit" className="submit">Send</button>
      </form>
      {status && <p style={{ marginTop: '10px' }}>{status}</p>}
    </div>
  );
};

export default EmailSender;
