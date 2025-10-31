import React, { FormEvent, useState } from 'react';
import { Button } from '../ui/Button';
import { ContactFormInput } from './ContactFormInput';
import { ContactFormTextarea } from './ContactFormTextarea';
import { trackFormSubmission } from '../../services/telegram/telegramService';
import toast from 'react-hot-toast';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const formValues = Object.fromEntries(formData.entries());
      
      // Send form data to Telegram
      await trackFormSubmission('contact', formValues as Record<string, string>);
      
      // Submit the form
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (response.ok) {
        toast.success('Message sent successfully!');
        e.currentTarget.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="space-y-6 bg-white p-8 rounded-lg border border-gray-200"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>
      
      <ContactFormInput
        id="name"
        name="name"
        label="Name"
        required
      />
      
      <ContactFormInput
        id="email"
        name="email"
        label="Email"
        type="email"
        required
      />
      
      <ContactFormTextarea
        id="message"
        name="message"
        label="Message"
        required
      />
      
      <Button
        type="submit"
        className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}