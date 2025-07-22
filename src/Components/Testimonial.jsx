import React from 'react'

export default function Testimonial() {


    const testimonials = [
  {
    name: "Jane Doe",
    title: "Product Manager, TechCorp",
    quote: "Working with you was a fantastic experience. You delivered fast, clean, and beautiful code!",
    image: "https://i.pravatar.cc/100?img=1"
  },
  {
    name: "Michael Lee",
    title: "Founder, DevStudio",
    quote: "Your attention to detail and design sense really made our platform stand out.",
    image: "https://i.pravatar.cc/100?img=2"
  },
  {
    name: "Sarah Kim",
    title: "UX Lead, PixelSpace",
    quote: "You communicate well, meet deadlines, and write scalable, maintainable code. Highly recommended.",
    image: "https://i.pravatar.cc/100?img=3"
  }
];
  return (
   <>
    

   <div style={{
        width:'100%',
        height:'100px',
        backgroundColor:'#052543'
      }}>
        
      </div>
    <section  className='Testimonial-container'>
      <h2 style={{ textAlign: "center", marginBottom: "2rem",color:'white',fontSize:'30px',paddingTop:'10px' }}>What Clients Say</h2>
      <div style={{
        display: "grid",
        gap: "2rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        {testimonials.map((t, index) => (
          <div key={index} style={{
            background: "white",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
            transition: "transform 0.3s ease",
          }}>
            <p style={{ fontStyle: "italic", marginBottom: "1rem" }}>"{t.quote}"</p>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <img src={t.image} alt={t.name} style={{ width: 50, height: 50, borderRadius: "50%" }} />
              <div>
                <strong>{t.name}</strong>
                <div style={{ fontSize: "0.9rem", color: "#555" }}>{t.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
       <div className='spinner' style={{marginLeft:'200px'}}></div>
    </section>
   
   </>
  )
}
