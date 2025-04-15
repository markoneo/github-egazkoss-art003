import React from 'react';

export function Logo() {
  return (
    <div className="logo-container">
      <div className="logo-image">
        <video
          autoPlay
          loop
          muted={true}
          playsInline
          controls={false}
          style={{ width: '280px', height: '280px', objectFit: 'cover' }}
          onEnded={(e) => {
            // Force replay if loop attribute fails
            const video = e.target as HTMLVideoElement;
            video.play().catch(err => console.error("Video playback error:", err));
          }}
        >
          <source 
            src="https://markoneo123.sirv.com/Spins/animation_of_data_processing_over_clouds%20(1080p).mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="logo-text">ARTCOMP</div>
    </div>
  );
}