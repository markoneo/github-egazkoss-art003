import React, { useEffect } from 'react';

export function LogoGenesis() {
  useEffect(() => {
    // Initialize Sirv scripts when component mounts
    if (window.Sirv) {
      window.Sirv.start();
    } else {
      // If Sirv isn't loaded yet, create and append the script
      const script = document.createElement('script');
      script.src = 'https://scripts.sirv.com/sirvjs/v3/sirv.js';
      script.async = true;
      script.onload = () => {
        if (window.Sirv) {
          window.Sirv.start();
        }
      };
      document.body.appendChild(script);
    }
    
    // Cleanup function
    return () => {
      const script = document.querySelector('script[src="https://scripts.sirv.com/sirvjs/v3/sirv.js"]');
      if (script && script.parentNode === document.body) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  return (
    <div className="logo-steps flex items-center justify-center h-full">
      <img 
        className="Sirv w-full sm:w-11/12 md:w-4/5 lg:w-3/4 max-w-md mx-auto"
        data-src="https://tatianari.sirv.com/ChatGPT%20Image%20Apr%2014%2C%202025%2C%2010_08_52%20PM.png" 
        alt="Logo genesis steps showing circular and square elements"
        style={{ 
          maxHeight: '180px',
          objectFit: 'contain',
          aspectRatio: '16/10'
        }}
        loading="lazy"
        width="600"
        height="375"
        srcSet="
          https://tatianari.sirv.com/ChatGPT%20Image%20Apr%2014%2C%202025%2C%2010_08_52%20PM.png?w=400 400w,
          https://tatianari.sirv.com/ChatGPT%20Image%20Apr%2014%2C%202025%2C%2010_08_52%20PM.png?w=600 600w,
          https://tatianari.sirv.com/ChatGPT%20Image%20Apr%2014%2C%202025%2C%2010_08_52%20PM.png?w=800 800w
        "
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 50vw"
      />
    </div>
  );
}