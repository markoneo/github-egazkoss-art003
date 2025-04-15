import React from 'react';

interface CardProps {
  title: string;
  id?: string;
  backgroundColor?: string;
  children: React.ReactNode;
}

export function Card({ title, id, backgroundColor, children }: CardProps) {
  return (
    <div className="card" style={{ backgroundColor }}>
      <div className="card-header">
        <span className="card-title">{title}</span>
        {id && <span className="card-id">#{id}</span>}
      </div>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}