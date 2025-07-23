import React from 'react'
import kingii from '../Image/kingii.png'

export default function About() {
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

   
     <section className="about-section">
      <div className='spinner'></div>

      <div className='App-about-image' >
          {/* <div className='spinner'></div> */}
        
        <img  className='about-image' style={{
        marginLeft:'0',
        width:'100%',
        height:'auto',
        marginTop:'0px',
        border:'1px solid #ededed7e',
        backgroundColor:' #213951 ',
        padding:'20px',
        borderRadius:'50px',
        borderBottomRightRadius:'200px',
       borderTopLeftRadius:'200px',
       zIndex:'10',
       
      }} src={kingii}
 
      
      />
          
       
      </div>
      <div className='about-text-container'>
        <h2 className="about-heading"style={{fontSize:'15px', textAlign:'start',backgroundColor:'#042e55',padding:'10px',marginRight:'15rem',borderRadius:'5px'}}>ABOUT ME</h2>
      <p className="about-text">
        <h2 style={{fontSize:'35px' ,fontFamily:'Segoe UI'}}>I AM AVAILABLE FOR <span style={{color:'#067ce9',fontSize:'35px'}}>
          FRONTEND AND BACKEND</span> PROJECTS</h2>
        Hi, I'm a full-stack  MERN developer  passionate about building end-to-end web applications using  MongoDB,
         Express.js, React, and Node.js . I love crafting fast, scalable, and user-friendly solutions that solve
         real-world problems. I'm always eager to learn and improve my skills, and I'm excited
      </p>
      <p className="about-text">
        On the frontend, I specialize in building responsive interfaces with  React.js, utilizing tools like Redux, Context API, 
        and modern UI libraries. On the backend, I create robust RESTful APIs with Node.js and Express, and work with both NoSQL
        and SQL databases.  
      </p>
      <p className='about-text'>
        I'm always exploring new technologies and following best practices in full-stack development. I'm 
        currently open to  full-time and freelance opportunities where I can contribute, grow, and build impactful applications 
        with teams that value clean code and creative thinking.
      

      </p>  

      <div style={{
        display:'flex',
        gap:'20px'
      }}>
        <div  style={{marginRight:'0', display:'flex',gap:'1rem'}}>
        <div style={{width:'6rem',height:'100px',border:'1px solid #213951 ',borderRadius:'5px',backgroundColor:'#111f2e',
             boxShadow:'0px,4px,8px rgba(0,0,0,0.6)',outline:'none'}}>
            <p style={{
              fontSize:'40px',
              textAlign:'center',
              paddingTop:'10px',
              color:'#b1b6bbff',
              fontWeight:'bold'
              }}>100+<br></br><p style={{fontSize:'15px'}}>Google Review</p></p>
          </div>
        
        <div style={{width:'6rem',height:'100px',border:'1px solid #213951',borderRadius:'5x',
          backgroundColor:'#111f2e', boxShadow:'0px,4px,8px rgba(0,0,0,0.6)',outline:'none'
        }}>
          <p style={{
              fontSize:'40px',
              textAlign:'center',
              paddingTop:'10px',
              color:'#b1b6bbff',
              fontWeight:'bold'
              }}>5+<br></br><p style={{fontSize:'15px'}}>Years of Experience</p></p>

        </div>

        <div style={{width:'6rem',height:'100px',border:'1px solid #213951',borderRadius:'5px',
           backgroundColor:'#111f2e', boxShadow:'0px,4px,8px rgba(0,0,0,0.6)',outline:'none'}}>
            <p style={{
              fontSize:'40px',
              textAlign:'center',
              paddingTop:'10px',
              color:'#b1b6bbff',
              fontWeight:'bold'
              }}>3+<br></br><p style={{fontSize:'15px'}}>Certication award</p></p>
           </div>
      </div>
      </div>
      <br></br>
     
       <div><button  className='talk-button' >Lets Talk </button></div>
       
      <br></br>
        
       {/* <div className='spinner'></div> */}
      </div>
       
    </section>
    

    </>
  )
}
