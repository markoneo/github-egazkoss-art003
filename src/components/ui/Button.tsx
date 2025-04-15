import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300";
  const variants = {
    primary: "bg-yellow-500 text-white hover:bg-yellow-600 shadow-md hover:shadow-lg",
    outline: "border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}