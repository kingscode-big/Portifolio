 import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FaBug, FaDatabase, FaPaintBrush, FaCode, FaLaptopCode } from 'react-icons/fa';
import { VscDebug, VscCode } from 'react-icons/vsc';
import { RiLayoutGridFill } from 'react-icons/ri';

import designing from '../Image/designing.jpg';
import webdev from '../Image/webdev.jpg';
import testing from '../Image/testing.jpg';
import tutoria from '../Image/tutoria.jpg';
import output from '../Image/output-onlinegiftools (1).gif';

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  };

  const relativeText = {
    position: 'relative',
    zIndex: 2,
  };

  return (
    <>
      <div style={{ width: '100%', height: '100px', backgroundColor: '#052543' }}></div>

      <section className='skills-animated-output'>
        <p style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
          <img src={output} alt="Developer Animation" style={{ width: '100%', height: '100%' }} />
        </p>

        <section className="skills-section" style={{ height: '160rem', paddingTop: '2rem', paddingBottom: '2rem',   }}>
          <h1 className="skills-section1" style={{backgroundColor:'white', color:'black'}}>
            <h3 style={{ fontSize: '2rem', textAlign: 'center' }}>
              Services Offer
              <br />
              <ul style={{
                listStyleType: 'none',
                padding: '0.5rem',
                margin: 0,
                fontSize: '18px',
                paddingTop: '2rem',
                textAlign: 'center'
              }}>
                {[
                  { icon: <FaLaptopCode size={20} style={{ color: '#00bcd4' }} />, text: 'Web Development' },
                  { icon: <FaPaintBrush size={20} style={{ color: '#00bcd4' }} />, text: 'Web Designing' },
                  { icon: <RiLayoutGridFill size={20} style={{ color: '#00bcd4' }} />, text: 'CMS & Tutoria' },
                  { icon: <FaBug size={20} style={{ color: '#00bcd4' }} />, text: 'App Testing & Debugging' }
                ].map((item, index) => (
                  <li key={index} style={{ padding: '1.5rem' }}>
                    <p style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingBottom: '0.5rem'
                    }}>
                      {item.icon}
                    </p>
                    {item.text}
                  </li>
                ))}
              </ul>
            </h3>
          </h1>

          {/* Skill Cards */}
          {[
            {
              bg: designing,
              title: 'Website Design',
              description: 'I craft modern, responsive, and user-focused web interfaces using a blend of HTML, CSS, JavaScript, and React. My approach to web design goes beyond aesthetics —'
            },
            {
              bg: webdev,
              title: 'Web Development',
              description: 'I build dynamic, responsive web applications using technologies like HTML, CSS, JavaScript, and frameworks such as React, Node.js, and MongoDB.'
            },
            {
              bg: testing,
              title: 'App Testing & Debugging',
              description: 'I build dynamic, responsive web applications and test them before deployment using technologies like Jest, Mochia, React Testing Library.'
            },
            {
              bg: tutoria,
              title: 'CMS & Tutoria',
              description: 'I design, develop, deploy and teach my expertise, from zero to master including CMS using WordPress.'
            }
          ].map((card, index) => (
            <div
              key={index}
              className="skill-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{
                position: 'relative',
                backgroundImage: `url(${card.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '450px',
                marginBottom: '2rem',
                boxShadow: index === 0 ? '0 8px 20px rgba(0, 0, 0, 0.30)' : undefined
              }}
            >
              <div style={overlayStyle}></div>
              <h3 style={{
                marginTop: '210px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '25px',
                textAlign: 'start',
                ...relativeText
              }}>{card.title}</h3>
              <p style={{
                fontSize: '15px',
                color: 'white',
                opacity: '0.7',
                textAlign: 'start',
                paddingTop: '10px',
                ...relativeText
              }}>{card.description}</p>
              <br />
              <hr style={relativeText} />
              <p style={{
                color: '#ffc107',
                textAlign: 'start',
                paddingTop: '3px',
                ...relativeText
              }}>
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
              </p>
            </div>
          ))}
        </section>
      </section>
    </>
  );
}
