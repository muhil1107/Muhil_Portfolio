import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');      // Message status
  const [sending, setSending] = useState(false); // Show loading

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);       // Start sending
    setStatus('Sending...');

    emailjs.sendForm(
      'muhilID_1107',
      'template_y1swebg',
      form.current,
      'nM2uBVtv-f1ra5bOI'
    )
    .then(() => {
      setSending(false);
      setStatus('✅ Message sent successfully!');
      form.current.reset();
    }, () => {
      setSending(false);
      setStatus('❌ Failed to send message. Please try again.');
    });
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>

        {/* Hidden field to send message to you */}
        <input type="hidden" name="to_email" value="muhilmanikandan@gmail.com" />

        <button type="submit" disabled={sending}>
          {sending ? 'Sending...' : 'Send Message'}
        </button>

        {/* Status Message */}
        {status && <p className="status-message">{status}</p>}
      </form>
    </section>
  );
}

export default Contact;
