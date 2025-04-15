import React from 'react';
import { Card } from './components/Card';
import { DualCard } from './components/DualCard';
import { Logo } from './components/Logo';
import { LogoGenesis } from './components/LogoGenesis';
import { Typography } from './components/Typography';
import { Materials } from './components/Materials';
import { LogotypeImage } from './components/LogotypeImage';

function App() {
  return (
    <div className="container">
      <div className="content-grid">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="year-label">2022</div>
          <div className="identity-label">ARTCOMP Created</div>
        </div>
        
        {/* Main content area */}
        <div className="main-content">
          <header>
            <h1 className="musician-name">ARTCOMP</h1>
            <div className="musician-title">Data Mining/AI Development</div>
          </header>
          
          <Logo />
          
          <footer>
            <p className="bio-text">
              It began with a fascination for patterns and the drive to master complexity. Hours turned into days of focused practice—first through music, then through code. What started as a discipline of repetition and structure became a foundation for understanding data, learning systems, and building intelligent technologies.
            </p>
          </footer>
        </div>
        
        {/* Right cards section */}
        <div className="cards-container">
          <Card 
            title="Trust Layer" 
            id="5d4846" 
            backgroundColor="var(--color-card-dark)"
          >
            <LogoGenesis />
          </Card>
          
          <Card 
            title="Secure Minds" 
            id="f02A92" 
            backgroundColor="var(--color-card-beige)"
          >
            <Typography />
          </Card>
          
          <Card 
            title="ArtComp Labs" 
            id="48d65Q" 
            backgroundColor="var(--color-card-dark)"
          >
            <Materials />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;