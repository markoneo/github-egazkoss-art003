import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/email';
import type { EmailParams } from '../types/email';

export async function sendEmail(params: EmailParams) {
  try {
    const templateParams = {
      from_name: params.name,
      from_email: params.email,
      message: params.message,
      to_name: EMAIL_CONFIG.recipient.name,
      reply_to: params.email
    };
    
    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    );

    return response;
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
}