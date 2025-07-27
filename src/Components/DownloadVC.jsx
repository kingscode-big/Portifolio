 import React, { useState } from 'react';

export default function DownloadVC() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);

    // Hide notification after 3 seconds
    setTimeout(() => {
      setDownloading(false);
    }, 3000);
  };

  return (
    <>
      <section
        className="cv-section"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '2rem',
          borderRadius: '10px',
          padding: '15px',
          marginTop: '2rem',
          width: 'fit-content',
          height: 'fit-content',
          color: 'white',
          fontSize: '1.5rem',
          boxShadow: '0 0 20px rgba(0,0,0,0.3)',
          position: 'relative'
        }}
      >
        <a
          href="/kingsleycv.pdf"
          download
          className="cv-button"
          onClick={handleDownload}
          style={{ textDecoration: 'none', fontFamily: 'sans-serif' }}
        >
          Download CV
        </a>

        {downloading && (
          <div
            style={{
              position: 'absolute',
              top: '-2.5rem',
              backgroundColor: '#333',
              color: '#fff',
              padding: '0.6rem 1rem',
              borderRadius: '6px',
              fontSize: '1rem',
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
              transition: 'opacity 0.3s ease',
              zIndex: 10,
              whiteSpace: 'nowrap'
            }}
          >
            📄 CV is downloading... Please wait.
          </div>
        )}
      </section>
    </>
  );
}
