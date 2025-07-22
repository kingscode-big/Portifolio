import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar  } from '@fortawesome/free-solid-svg-icons';
import designing from '../Image/designing.jpg'
import webdev from '../Image/webdev.jpg'
import testing from '../Image/testing.jpg'
import tutoria from '../Image/tutoria.jpg'

export default function Skills() {

    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <>
    <div style={{
        width:'100%',
        height:'100px',
        backgroundColor:'#052543'
      }}></div>
   
    <section className="skills-section">
        <h1 className="skills-section1" >    <h3>We provide
          <br></br>
          <p>We provide</p>
        </h3>
                
        </h1>
         
      <div className="skill-card" style={{
        backgroundImage:`url(${designing})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        height:'450px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.30)',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        
        
        
      }} data-aos="fade-up">
       
        <h3 style={{
          marginTop:'210px',
          color:'white',
          textAlign:'start',
          fontWeight:'bold',
          fontSize:'25px',
          zIndex:2
         
        }}>Website Design</h3>
        <p style={{
          fontSize:'15px',
          color:'white',
          opacity:'0.7',
          textAlign:'start',
          paddingTop:'10px'
        }}>I craft modern, responsive, and user-focused web interfaces
           using a blend of HTML, CSS, JavaScript, and React. My approach
            to web design goes beyond aesthetics — 
          </p><br></br>
          <hr></hr>
          <p style={{
            color:'#ffc107',
            textAlign:'start',
            paddingTop:'3px'
          }}>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        
          </p>
           
      </div>
      <div className="skill-card" data-aos="fade-up" data-aos-delay="100"
      style={{
        backgroundImage:`url(${webdev})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100%',
      width: '100%',
      
      top: 0,
      left: 0,
      zIndex: 1,

      }}
      
      
      >
        <h3 style={{
          marginTop:'210px',
          color:'white',
          textAlign:'start',
          fontWeight:'bold',
          fontSize:'25px',
          zIndex:3
         
        }}>Web Development</h3>
        <p style={{
          fontSize:'15px',
          color:'white',
          opacity:'0.7',
          textAlign:'start',
          paddingTop:'10px'
        }}> I  build dynamic,
         responsive web applications using technologies 
         like HTML, CSS, JavaScript, and frameworks such as React, Node.js,
         and MongoDB.</p>
      
          <hr></hr>

            <p style={{
            color:'#ffc107',
            textAlign:'start',
            paddingTop:'3px'
          }}>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        
          </p>
           
      
         
        
      </div>
      <div className="skill-card" data-aos="fade-up" data-aos-delay="200"
           style={{
        backgroundImage:`url(${testing})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        height:'450px',
        opacity:0.9,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 3,

      }}>
          <h3 style={{
          marginTop:'210px',
          color:'white',
          textAlign:'start',
          fontWeight:'bold',
          fontSize:'25px',
          zIndex:3
         
        }}>App Testing &  Debugging</h3>
         
        <p style={{
          fontSize:'15px',
          color:'white',
          opacity:'0.7',
          textAlign:'start',
          paddingTop:'10px'
        }}> I  build dynamic,
         responsive web applications  and test them before deployment using technologies 
         like  Jest ,mochia ,React Testing Library .
         </p>
         <br></br>
      
          <hr></hr>

            <p style={{
            color:'#ffc107',
            textAlign:'start',
            paddingTop:'3px'
          }}>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        
          </p>
      
      </div>
      <div className="skill-card" data-aos="fade-up" data-aos-delay="300"
        style={{
        backgroundImage:`url(${tutoria})`,
        backgroundSize:'cover',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
        backgroundPosition:'center',
        height:'450px',
       
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        

      }}
      >
        <h3 style={{
          marginTop:'210px',
          color:'white',
          textAlign:'start',
          fontWeight:'bold',
          fontSize:'25px',
          zIndex:3
         
        }}>CMS & Tutoria</h3>

         <p style={{
          fontSize:'15px',
          color:'white',
          opacity:'0.7',
          textAlign:'start',
          paddingTop:'30px'
        }}> I design , develop ,deploy and as well teach my expertise ,
          from zero to master including CMS using Wordpress.
         </p>
         <br></br>
         <br></br>
      
          <hr></hr>

            <p style={{
            color:'#ffc107',
            textAlign:'start',
            paddingTop:'3px'
          }}>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        
          </p>
        
      
      </div>
    </section>
     
    
    </>
  )
}
