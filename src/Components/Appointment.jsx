 
 import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
export default function Appointment() {


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
      };
  return (
   <>
   <div>
               <button className='talk-button' onClick={() => setShowOverlay(true)}>Book Appointment</button>
             </div>
   
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
                     <label style={{ textAlign: 'left', width: '100%', color: '#333', fontWeight: 'bold' }}>
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
                       <button type="submit" style={styles.submitBtn}>Submit</button>
                       <button type="button" style={styles.cancelBtn} onClick={() => setShowOverlay(false)}>Cancel</button>
                     </div>
                   </form>
                 </div>
               </div>
             )}
   </>
  )
}
