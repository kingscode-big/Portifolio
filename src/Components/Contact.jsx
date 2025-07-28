 import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import walking from '../Image/walking.png';
import kingii from '../Image/kingii.png';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

export default function Contact() {
  const [userDetail, setUserDetail] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserDetail((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
  };

  const isFormValid = userDetail.name && userDetail.email && userDetail.message;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!isFormValid) {
      toast.warn('Please fill in all required fields.');
      return;
    }

    if (!emailRegex.test(userDetail.email)) {
      toast.warn('Please enter a valid email address.');
      return;
    }

    // Instant feedback to user
    toast.success('Your message has been sent!');
    setIsSent(true);

    try {
      const response = await fetch('https://portifolioback.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetail),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Server returned an error');
      }

      // Clear form only after backend confirms success
      setUserDetail({ name: '', email: '', message: '' });

      // Re-enable button after 3 seconds
      setTimeout(() => setIsSent(false), 3000);
    } catch (error) {
      toast.error(`Something went wrong: ${error.message}`);
      setIsSent(false); // allow retry if error
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100px',
          backgroundColor: '#052543',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: '#00d4ff',
            borderRadius: '50%',
            position: 'absolute',
            top: '25px',
            animation: 'moveBackAndForth 3s infinite alternate ease-in-out',
          }}
        ></div>
        <style>{`
          @keyframes moveBackAndForth {
            0% { left: 0; }
            100% { left: calc(100% - 50px); }
          }
        `}</style>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <section
        id="contact"
        className="contact-section"
        data-aos="none"
        data-aos-delay="100"
      >
        <div
          className="contact-info-container"
          style={{ display: 'block', gap: '20px' }}
        >
          <div className="contact-image-container" style={{ flex: '1' }}>
            <img
              className="contact-image"
              src={kingii}
              alt="Contact"
              style={{
                width: '300px',
                borderRadius: '30px',
                borderBottomRightRadius: '200px',
                borderTopLeftRadius: '200px',
                border: '1px solid gray',
                marginLeft: '100px',
              }}
            />
            <p className="contactAni">
              <img
                src={walking}
                alt="Loading Animation"
                style={{ width: '100%', height: '100%' }}
              />
            </p>
          </div>

          <div className="contact-details">
            <p
              className="contact-label"
              style={{
                fontWeight: 'bold',
                opacity: '0.5',
                paddingTop: '2rem',
                fontFamily: 'sans-serif',
                fontSize: '1.5rem',
              }}
            >
              WRITE AN E-MAIL
            </p>
            <p className="contact-email" style={{ fontSize: '1.5rem' }}>
              kingsblog9ja@gmail.com
            </p>
            <br />
            <p
              className="contact-label"
              style={{
                fontWeight: 'bold',
                paddingTop: '0.3rem',
                fontFamily: 'sans-serif',
                opacity: '0.5',
                fontSize: '1.5rem',
              }}
            >
              CALL ME
            </p>
            <p
              className="contact-phone"
              style={{ fontSize: '1.5rem', paddingTop: '0.5rem' }}
            >
              +234 (8029190802)
            </p>
            <p
              className="contact-phone"
              style={{ fontSize: '1.5rem', paddingTop: '0.5rem' }}
            >
              +237 (652631823)
            </p>
          </div>

          <div
            className="social-share-buttons contact-social-buttons"
            style={{ display: 'flex', gap: '10px', marginLeft: '6rem', paddingTop: '1rem' }}
          >
            <FacebookShareButton>
              <FacebookIcon
                size={40}
                round
                bgStyle={{ fill: '#1877F2', stroke: '#ffffff', strokeWidth: 3 }}
              />
            </FacebookShareButton>
            <TwitterShareButton>
              <TwitterIcon
                size={40}
                round
                bgStyle={{ fill: '#1877F2', stroke: '#ffffff', strokeWidth: 3 }}
              />
            </TwitterShareButton>
            <LinkedinShareButton>
              <LinkedinIcon
                size={40}
                round
                bgStyle={{ fill: '#1877F2', stroke: '#ffffff', strokeWidth: 3 }}
              />
            </LinkedinShareButton>
            <WhatsappShareButton>
              <WhatsappIcon
                size={34}
                round
                bgStyle={{ fill: '#25D366', stroke: '#ffffff', strokeWidth: 3 }}
              />
            </WhatsappShareButton>
          </div>
        </div>

        <div className="container-header-form">
          <div
            className="App-contact-info"
            style={{ color: 'white', marginTop: '20px', fontFamily: 'sans-serif' }}
          >
            <h2
              className="section-title contact-section-title"
              style={{ color: 'white', textAlign: 'start' }}
            >
              Let’s Discuss Your Project
            </h2>
            <p
              className="section-description contact-section-description"
              style={{ color: 'white', textAlign: 'start' }}
            >
              Always available for freelancing if the right project comes along,
              <br />
              Feel free to contact me.
            </p>
          </div>

          <br />
          <hr />

          <div className="container">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label
                  className="contact-form-label"
                  style={{ color: 'white' }}
                  htmlFor="name"
                >
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  required
                  className="contact-form-input"
                  id="name"
                  onChange={handleInput}
                  value={userDetail.name}
                />
              </div>

              <div className="form-group">
                <label
                  className="contact-form-label"
                  style={{ color: 'white' }}
                  htmlFor="email"
                >
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  required
                  className="contact-form-input"
                  id="email"
                  onChange={handleInput}
                  value={userDetail.email}
                />
              </div>

              <div className="form-group">
                <label
                  className="contact-form-label"
                  style={{ color: 'white' }}
                  htmlFor="message"
                >
                  Your message*
                </label>
                <textarea
                  name="message"
                  placeholder="Message*"
                  rows="5"
                  required
                  className="contact-form-textarea"
                  id="message"
                  onChange={handleInput}
                  value={userDetail.message}
                />
              </div>

              <button
                type="submit"
                className={`contact-form-button ${isSent ? 'sent' : ''}`}
                disabled={!isFormValid || isSent}
                style={{
                  backgroundColor: !isFormValid ? '#ccc' : '#00d4ff',
                  color: !isFormValid ? '#666' : '#fff',
                  cursor: !isFormValid ? 'not-allowed' : 'pointer',
                  fontWeight: isFormValid ? 'bold' : 'normal',
                  transition: '0.3s ease',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                }}
              >
                {isSent ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
