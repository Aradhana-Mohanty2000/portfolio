import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import './Contact.css';

function Contact() {
  const leftRef  = useRef();
  const rightRef = useRef();
  const formRef  = useRef();

  const [time, setTime]       = useState(new Date());
  const [isOpen, setIsOpen]   = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent]       = useState(false);

  /* Clock & availability */
  useEffect(() => {
    const tick = () => {
      const now  = new Date();
      const day  = now.getDay();
      const hour = now.getHours();
      setTime(now);
      setIsOpen(day >= 1 && day <= 5 && hour >= 9 && hour < 22);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  /* Scroll reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    if (leftRef.current)  observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isOpen) { alert('Currently unavailable. Please contact between 9 AM – 10 PM (Mon–Fri)'); return; }

    try {
      setLoading(true);
      await emailjs.sendForm(
        'service_3m3a45u',
        'template_fwb6kf9',
        formRef.current,
        'VU5_G5mcBg7m4AZuN'
      );
      setSent(true);
      formRef.current.reset();
      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      console.error(err);
      alert('Failed to send ❌ Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const timeStr = time.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">

        {/* ── Left ── */}
        <div className="reveal" ref={leftRef}>
          <div className="contact-header">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">Let's <span>Connect</span></h2>
          </div>

          <p className="live-time">🕒 {timeStr} IST</p>

          <div className="contact-availability">
            <div className={`avail-dot${isOpen ? '' : ' closed'}`} />
            <span>
              {isOpen
                ? 'Available now — Mon to Fri, 9 AM – 10 PM IST'
                : 'Unavailable right now (Mon–Fri, 9 AM–10 PM IST)'}
            </span>
          </div>

          <p className="contact-desc">
            I'm open to internships, collaborations, and exciting opportunities
            in Full Stack &amp; Cloud Development. Let's build something great together.
          </p>

          <div className="social-links">
            <a href="https://github.com/Aradhana-Mohanty2000" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aradhana-mohanty-96a635214/" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:aradhanamohanty247@gmail.com" className="social-link" title="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* ── Right: Form ── */}
        <div className="reveal" ref={rightRef}>
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input id="name" type="text" name="name"required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="What's on your mind?" required />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={!isOpen || loading}
            >
              {sent
                ? '✅ Message Sent!'
                : loading
                ? 'Sending...'
                : !isOpen
                ? 'Closed Right Now'
                : 'Send Message →'}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;