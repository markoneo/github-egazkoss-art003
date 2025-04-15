export interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
  recipient: {
    email: string;
    name: string;
  };
}

export interface EmailParams {
  name: string;
  email: string;
  message: string;
}

export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  message: string;
  to_name: string;
  to_email: string;
  reply_to: string;
}