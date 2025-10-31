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
      <label htmlFor={id} className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all"
      />
    </div>
  );
}