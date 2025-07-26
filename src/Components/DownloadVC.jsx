import React from 'react'
 
 

export default function DownloadVC() {
  return (
   <>

   <section className="cv-section" style={{display:'flex',
     justifyContent:'center', alignItems:'center', paddingTop:'2rem',
       
          borderRadius: '10px',
          padding: '15px',
         marginTop:'2rem',
        width:'fit-content',
        height:'fit-content',
        color:'white',
        fontSize:'1.5rem',
          boxShadow: '0 0 20px rgba(0,0,0,0.3)'}}>
      
    
      <a
        href="/kingsleycv.pdf"
        download
        className="cv-button " style={{
          textDecoration: 'none', fontFamily:'sans-serif'}}
      >
        Download CV
      </a>
    </section>
   
   </>
  )
}
