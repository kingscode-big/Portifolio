 import React, { useState, useEffect, useRef } from 'react';
 import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import DownloadVC from './DownloadVC';
import 'react-datepicker/dist/react-datepicker.css';

export default function Menu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    phone: '',
    date: new Date(),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowOverlay(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    },
    modal: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '30px',
      width: '90%',
      maxWidth: '400px',
      boxShadow: '0 0 20px rgba(0,0,0,0.3)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      width: '100%',
    },
    btnGroup: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '10px',
    },
    submitBtn: {
      padding: '10px 20px',
      backgroundColor: '#0072ff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    cancelBtn: {
      padding: '10px 20px',
      backgroundColor: '#ccc',
      color: '#333',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    appointmentBtn: {
      marginBottom: '20px',
      backgroundColor: '#596df3',
      padding: '1rem',
      marginTop: '0.8rem',
      outline: 'none',
      color: 'white',
      borderRadius: '0.5rem',
      border: '0.5rem solid transparent',
      fontFamily: 'sans-serif',
      marginLeft: '1rem',
      cursor: 'pointer',
    },
  };

  return (
    <div className="hamburger-menu" ref={menuRef}>
      <h2 onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faBars} className="App-hamburger" />
      </h2>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="dropdown-list"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <motion.li whileHover={{ scale: 1.05 }}>
              <Link to="/">Home</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <Link to='/servicepage'>Services</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <Link to="/projectspage">Projects</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <Link to="/contactpage">Contact</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <button
                className="btn-appointment"
                onClick={() => setShowOverlay(true)}
                style={styles.appointmentBtn}
              >
                Book an Appointment
              </button>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} style={{ marginTop: '0.5rem',marginLeft:'1rem' }}>
            <DownloadVC />
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>

      {showOverlay && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h2 style={{ marginBottom: '20px' }}>Book a Session</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                style={styles.input}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
                required
              />
              <label
                style={{
                  textAlign: 'left',
                  width: '100%',
                  color: '#333',
                  fontWeight: 'bold',
                }}
              >
                Pick a Date:
              </label>
              <DatePicker
                selected={formData.date}
                onChange={(date) => setFormData({ ...formData, date })}
                dateFormat="MMMM d, yyyy"
                className="date-picker"
                required
              />
              <div style={styles.btnGroup}>
                <button type="submit" style={styles.submitBtn}>
                  Submit
                </button>
                <button
                  type="button"
                  style={styles.cancelBtn}
                  onClick={() => setShowOverlay(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
