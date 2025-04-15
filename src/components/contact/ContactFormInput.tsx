import React from 'react';

interface ContactFormInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}

export function ContactFormInput({
  id,
  name,
  label,
  type = 'text',
  required = false
}: ContactFormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-700 mb-2">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-2 rounded-lg bg-cream-50 text-gray-900 border border-cream-200 focus:border-cream-400 focus:ring focus:ring-cream-300 focus:ring-opacity-50 transition-colors"
      />
    </div>
  );
}