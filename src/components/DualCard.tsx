import React from 'react';

interface DualCardProps {
  leftTitle: string;
  rightTitle: string;
  leftId?: string;
  rightId?: string;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  leftBg?: string;
  rightBg?: string;
}

export function DualCard({ 
  leftTitle, 
  rightTitle, 
  leftId, 
  rightId, 
  leftContent, 
  rightContent, 
  leftBg, 
  rightBg 
}: DualCardProps) {
  return (
    <div className="dual-card">
      <div className="card" style={{ backgroundColor: leftBg }}>
        <div className="card-header">
          <span 
            className="card-title" 
            style={{ color: leftBg === 'var(--color-card-light)' ? 'var(--color-text-dark)' : undefined }}
          >
            {leftTitle}
          </span>
          {leftId && <span className="card-id">#{leftId}</span>}
        </div>
        <div className="card-content">
          {leftContent}
        </div>
      </div>
      <div className="card" style={{ backgroundColor: rightBg }}>
        <div className="card-header">
          <span className="card-title">{rightTitle}</span>
          {rightId && <span className="card-id">#{rightId}</span>}
        </div>
        <div className="card-content">
          {rightContent}
        </div>
      </div>
    </div>
  );
}