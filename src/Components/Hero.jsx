 import React, { useState, useEffect } from 'react';
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

export default function Hero() {
  const message = " Developer.";
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (index < message.length) {
      timeout = setTimeout(() => {
        setText((prev) => prev + message.charAt(index));
        setIndex(index + 1);
      }, 100);  
    } else {
      timeout = setTimeout(() => {
        setText('');
        setIndex(0);
      }, 2000);  
    }

    return () => clearTimeout(timeout);
  }, [index, message]);

  return (
    <>

    
      <div className="hero">
             <div className='spinner' style={{marginLeft:'100px'}}></div>
  <div className="hero-container">
    
    {/* Text */}
    <div className="typewriter">
      <p className='App-kings'>Software Developer</p>
      <br />
      <p className='App-hero-texts'>Hi, I'm Kingsley a<br /></p>
      <div className="App-container-container"> 
        <span>MERN{text}</span>
      </div>
      <p className="hero-description"style={{fontFamily:'poppins,sans-serif',width:'25rem',textAlign:'start'}} >
        I craft scalable and flexible web applications using the <strong>MERN stack</strong>, focusing on performance, responsiveness, and user-centric design.
      </p>
      <div className="hero-button-container" >
    <button className="hero-cta-button" style={{width:'10rem'}}>Get in Touch</button>
    
  </div>
    <div class="moving-line"></div>
    </div>
 
    <div className='App-hero-image-container'>
      <img className="App-hero-image" src={kingii} alt="hero" />
    </div>
 
    <div className="social-share-icons"  
       >
      <FacebookShareButton  ><FacebookIcon  size={40} round /></FacebookShareButton>
      <TwitterShareButton><TwitterIcon size={40} round /></TwitterShareButton>
      <LinkedinShareButton><LinkedinIcon size={40} round /></LinkedinShareButton>
      <WhatsappShareButton><WhatsappIcon size={34} round /></WhatsappShareButton>
    </div>
  
 
 
  </div>
 
        
</div>
 

     
    </>
  );
}
