import React from 'react'
import { Code, MonitorCheck, Database, Layers3 } from "lucide-react";


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
        width:'100%',
        height:'100px',
        backgroundColor:'#052543'
      }}></div>
   
  <section className="services-section" id="services" >
         
  <div className="services-container">
 <h2 
  className="services-title" >
  My Stack
</h2>

    <div className="services-grid">
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
