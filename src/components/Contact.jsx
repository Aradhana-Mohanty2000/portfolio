import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const [time, setTime] = useState(new Date());
  const [status, setStatus] = useState("open");
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now);
      const day = now.getDay();
      const hour = now.getHours();

      if (day === 0 || day === 6) {
        setStatus("closed");
      } else if (hour >= 9 && hour < 23) {
        setStatus("open");
      } else {
        setStatus("closed");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "closed") {
      alert("Currently unavailable. Please contact between 9 AM – 11 PM (Mon–Fri)");
      return;
    }

    try {
      setLoading(true);

      await emailjs.sendForm(
        "service_3m3a45u",
        "template_fwb6kf9",
        formRef.current,
        "VU5_G5mcBg7m4AZuN"
      );

      alert("Message sent successfully ✅");
      formRef.current.reset();

    } catch (err) {
      console.error(err);
      alert("Failed to send ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact Me</h2>

      <p className="live-clock">🕒 {time.toLocaleTimeString()}</p>

      <p className={`status ${status}`}>
        {status === "open"
          ? "🟢 Available Now"
          : "🔴 Closed (9AM–10PM | Mon–Fri)"}
      </p>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Let's Connect 💜</h3>
          <p>
            I'm open to internships, collaborations, and exciting opportunities in
            Full Stack & Cloud Development.
          </p>
          <div className="social-links">
            <a href="https://github.com/Aradhana-Mohanty2000" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aradhana-mohanty-96a635214/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:aradhanamohanty247@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <input type="text"  name="name"    placeholder="Your Name"       required />
          <input type="email" name="email"   placeholder="Your Email"      required />
          <textarea           name="message" placeholder="Your Message..." rows="5" required></textarea>

          <button
            type="submit"
            disabled={status === "closed" || loading}
          >
            {loading
              ? "Sending..."
              : status === "closed"
              ? "Closed Now"
              : "Send Message"}
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
