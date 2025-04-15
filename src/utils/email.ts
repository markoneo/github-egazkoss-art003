import { EmailParams, EmailTemplateParams } from '../types/email';
import { EMAIL_CONFIG } from '../config/email';

export const createEmailTemplateParams = (params: EmailParams): EmailTemplateParams => ({
  from_name: params.name,
  from_email: params.email,
  message: params.message,
  to_name: EMAIL_CONFIG.recipient.name,
  to_email: EMAIL_CONFIG.recipient.email,
  reply_to: params.email
});