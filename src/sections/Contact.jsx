import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { baseUrl } from '../config';
import PropTypes from 'prop-types';

const Contact = ({ isSmall, isMobile, isTablet }) => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send('service_yupm87o', 'template_1k8zelu', {
        from_name: form.name,
        to_name: 'Ludovic',
        from_email: form.email,
        to_email: 'ludovicdechavagnac@gmail.com',
        message: form.message
      }, 'n_3Y21DPibrkbddss');
      setForm({
        name: '',
        email: '',
        message: ''
      })
      alert('Your message has been sent successfully');
    } catch (error) {
      console.log(error);
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  const terminalSrc = (isMobile || isSmall)
    ? `${baseUrl}assets/terminal/terminal1-phone.png`
    : isTablet
      ? `${baseUrl}assets/terminal/terminal1-tablet.png`
      : `${baseUrl}assets/terminal/terminal1.png`;

  return (
    <section className={(isMobile) ? "c-space mt-16" : "c-space mt-10"} id="contact">
      <div className="relative min-h-[85dvh] flex items-center justify-center flex-col py-16 sm:py-24">
        <img src={terminalSrc} alt="terminal background" className="absolute inset-0 h-full w-full object-contain object-center" />
        <div className={(isMobile) ? "contact-container-phone" : "contact-container"}>
          <h3 className="head-text">Contact Me</h3>
          <p className="text-lg text-white-600 mt-3">Whether you&apos;re looking to build a new website, improve your existing platfomr, or bring a unique project to life, I&apos;m here to help.</p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Hi, I wanna give you a job..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src={`${baseUrl}assets/tools/arrow-up.png`} alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

Contact.propTypes = {
  isSmall: PropTypes.bool,
  isMobile: PropTypes.bool,
  isTablet: PropTypes.bool,
};

export default Contact
