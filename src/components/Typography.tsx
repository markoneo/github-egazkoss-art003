import React, { useEffect } from 'react';

export function Typography() {
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
    <div className="typography-sample flex items-center justify-center h-full">
      <img 
        className="Sirv w-3/4 max-w-md"
        data-src="https://markoneo123.sirv.com/Spins/ChatGPT%20Image%20Apr%2015%2C%202025%2C%2008_27_37%20PM.png" 
        alt="Typography showing AI Development and Mining data security"
        style={{ maxHeight: '180px' }}
      />
    </div>
  );
}