import React from 'react';
import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';
import { Section } from './ui/Section';

export default function Contact() {
  return (
    <Section id="contact" title="Contact Us" className="bg-gray-50">
      <div className="grid md:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </Section>
  );
}