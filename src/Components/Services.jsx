import React from 'react'
import { Code, MonitorCheck, Database, Layers3 } from "lucide-react";
  import Lottie from 'lottie-react';
 import developerAnimation from  '../assets/Developer Presentation (1).json';


export default function Services() {

    const services = [
  {
    icon: <Code size={32} />,
    title: 'Frontend Development',
    description: 'Responsive, interactive UIs built with React, Tailwind CSS, and modern JavaScript.',
  },
  {
    icon: <Database size={32} />,
    title: 'Backend APIs',
    description: 'Robust RESTful and GraphQL APIs using Node.js, Express, and MongoDB.',
  },
  {
    icon: <MonitorCheck size={32} />,
    title: 'Full-Stack Integration',
    description: 'Seamless integration of front and back end using the full MERN stack.',
  },
  {
    icon: <Layers3 size={32} />,
    title: 'UI/UX Design',
    description: 'Clean, user-friendly designs with Figma, responsiveness, and accessibility in mind.',
  },
];
  return (


   <>

   
   
 <div style={{
  width: '100%',
  height: '100px',
  backgroundColor: '#052543',
  position: 'relative',
  overflow: 'hidden'
}}>
  <div style={{
    width: '50px',
    height: '50px',
    backgroundColor: '#00d4ff',
    borderRadius: '50%',
    position: 'absolute',
    top: '25px',
    animation: 'moveBackAndForth 3s infinite alternate ease-in-out'
  }}></div>

  <style>
    {`
      @keyframes moveBackAndForth {
        0% { left: 0; }
        100% { left: calc(100% - 50px); }
      }
    `}
  </style>
</div>

   
  <section className="services-section" id="services" >
         
  <div className="services-container">

  
 <h2 
  className="services-title" >
  My Stack
</h2>
 <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <Lottie 
        animationData={developerAnimation} 
        loop 
        autoplay 
        style={{ width: 300, height: 300 }}
      />
    </div>


    <div className="services-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <div className="service-icon">{service.icon}</div>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-desc">{service.description}</p>
        </div>
        
      ))}
      
    </div>
     <div className='spinner' style={{marginLeft:'100px'}}></div>
        
  </div>
  <div style={{
    marginLeft:'90%',
    marginTop:'10px'
 
 
  }}>
    </div>
        
  
</section>

   </>
  )
}
