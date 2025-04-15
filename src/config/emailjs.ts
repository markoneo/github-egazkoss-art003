import { init } from '@emailjs/browser';

// Initialize EmailJS with your public key
const EMAILJS_CONFIG = {
  serviceId: 'service_osl1job',
  templateId: 'template_xpp68xf',
  publicKey: 'T34ZUw382dCIBUUVA',
  toEmail: 'marko.neo@gmail.com',
  toName: 'ArtComp Mining Solutions'
} as const;

// Initialize EmailJS
init(EMAILJS_CONFIG.publicKey);

export default EMAILJS_CONFIG;