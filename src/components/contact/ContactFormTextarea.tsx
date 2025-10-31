import React from 'react';

interface ContactFormTextareaProps {
  id: string;
  name: string;
  label: string;
  required?: boolean;
}

export function ContactFormTextarea({
  id,
  name,
  label,
  required = false
}: ContactFormTextareaProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-700 font-medium mb-2">{label}</label>
      <textarea
        id={id}
        name={name}
        rows={5}
        required={required}
        className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all resize-none"
      />
    </div>
  );
}