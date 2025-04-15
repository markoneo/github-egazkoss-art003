import React from 'react';
import { Mail, Phone, User } from 'lucide-react';

export function Materials() {
  return (
    <div className="materials-container">
      <div className="picks-section">
        <div className="picks-label">CONTACTS PICKS</div>
        <div className="picks-container" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div className="pick" style={{ display: 'flex', alignItems: 'center', fontSize: '12px', color: 'white', width: 'auto' }}>
            <Mail size={14} className="mr-2" /> info@artcomp.net
          </div>
          <div className="pick" style={{ display: 'flex', alignItems: 'center', fontSize: '12px', color: 'white', width: 'auto' }}>
            <Phone size={14} className="mr-2" /> +38670832530
          </div>
          <div className="pick" style={{ display: 'flex', alignItems: 'center', fontSize: '12px', color: 'white', width: 'auto' }}>
            <User size={14} className="mr-2" /> Keder Marko
          </div>
        </div>
      </div>
      <div className="cds-container">
        <div className="cd" style={{ backgroundColor: 'white' }}>
          <div className="cd-inner"></div>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: 'absolute', top: '10px', left: '38px' }}
          >
            <path 
              d="M20 5C10.6 5 3 12.6 3 22C3 31.4 10.6 39 20 39C29.4 39 37 31.4 37 22C37 12.6 29.4 5 20 5ZM28.1 22.1L20 30.2L11.9 22.1C11.7 21.9 11.7 21.5 11.9 21.3L19.3 13.9C19.5 13.7 19.9 13.7 20.1 13.9L28.1 21.9C28.3 22.1 28.3 22.5 28.1 22.7L20.7 30.1C20.5 30.3 20.1 30.3 19.9 30.1L11.9 22.1"
              fill="#252c3b"
            />
          </svg>
          <span style={{ position: 'absolute', bottom: '15px', fontSize: '10px', color: '#333' }}>
            Codemine
          </span>
        </div>
        <div className="cd" style={{ backgroundColor: '#252c3b' }}>
          <div className="cd-inner"></div>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: 'absolute', top: '10px', left: '38px' }}
          >
            <path 
              d="M20 5C10.6 5 3 12.6 3 22C3 31.4 10.6 39 20 39C29.4 39 37 31.4 37 22C37 12.6 29.4 5 20 5ZM28.1 22.1L20 30.2L11.9 22.1C11.7 21.9 11.7 21.5 11.9 21.3L19.3 13.9C19.5 13.7 19.9 13.7 20.1 13.9L28.1 21.9C28.3 22.1 28.3 22.5 28.1 22.7L20.7 30.1C20.5 30.3 20.1 30.3 19.9 30.1L11.9 22.1"
              fill="white"
            />
          </svg>
          <span style={{ position: 'absolute', bottom: '15px', fontSize: '10px', color: 'white' }}>
            Datashift
          </span>
        </div>
        <div className="cd-label">Security Template</div>
      </div>
    </div>
  );
}