import React from 'react';
import { contactDetails } from '../../data/contact';

export function ContactInfo() {
  return (
    <div className="bg-white p-8 rounded-lg border border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
      <div className="space-y-5">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-center space-x-4">
            {detail.icon}
            <span className="text-gray-600">{detail.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}