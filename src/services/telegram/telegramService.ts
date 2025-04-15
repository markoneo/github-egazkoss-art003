import { TELEGRAM_CONFIG } from './config';

interface VisitorData {
  page: string;
  referrer?: string;
  timestamp: number;
  userAgent?: string;
  language?: string;
  screenSize?: string;
  hostname?: string;
}

/**
 * Check if Telegram configuration is valid
 */
export async function checkTelegramConfig(): Promise<boolean> {
  try {
    if (!TELEGRAM_CONFIG.BOT_TOKEN || !TELEGRAM_CONFIG.CHAT_ID) {
      console.warn('Telegram bot token or chat ID not configured');
      return false;
    }
    
    // Test the configuration with a basic message
    const url = `${TELEGRAM_CONFIG.API_URL}${TELEGRAM_CONFIG.BOT_TOKEN}/getMe`;
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error('Telegram bot token is invalid');
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Failed to check Telegram configuration:', error);
    return false;
  }
}

/**
 * Send a message to the configured Telegram chat
 */
export async function sendTelegramMessage(message: string): Promise<boolean> {
  try {
    if (!TELEGRAM_CONFIG.BOT_TOKEN || !TELEGRAM_CONFIG.CHAT_ID) {
      console.warn('Telegram bot token or chat ID not configured');
      return false;
    }
    
    const url = `${TELEGRAM_CONFIG.API_URL}${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CONFIG.CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      }),
    });

    if (!response.ok) {
      throw new Error(`Telegram API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return data.ok;
  } catch (error) {
    console.error('Failed to send Telegram message:', error);
    return false;
  }
}

/**
 * Check if the current hostname is artcomp.net or www.artcomp.net
 */
function isArtcompDomain(hostname: string): boolean {
  return hostname === 'artcomp.net' || 
         hostname === 'www.artcomp.net' ||
         // Include these for testing in development
         hostname === 'localhost' || 
         hostname.includes('stackblitz.io');
}

/**
 * Track a visitor and send the information to Telegram
 */
export async function trackVisitor(pageData: Partial<VisitorData> = {}): Promise<void> {
  try {
    const hostname = window.location.hostname;
    
    // Only track visitors on artcomp.net domain
    if (!isArtcompDomain(hostname)) {
      console.log('Skipping visitor tracking: not on artcomp.net domain');
      return;
    }
    
    const data: VisitorData = {
      page: pageData.page || window.location.pathname,
      referrer: pageData.referrer || document.referrer,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      screenSize: `${window.innerWidth}x${window.innerHeight}`,
      hostname: hostname
    };
    
    const message = formatVisitorMessage(data);
    await sendTelegramMessage(message);
  } catch (error) {
    console.error('Error tracking visitor:', error);
  }
}

/**
 * Format visitor data into a readable message
 */
function formatVisitorMessage(data: VisitorData): string {
  const date = new Date(data.timestamp).toLocaleString();
  
  return `
<b>🔔 New Website Visitor on ${data.hostname}</b>

<b>Page:</b> ${data.page}
<b>Time:</b> ${date}
<b>Referrer:</b> ${data.referrer || 'Direct visit'}
<b>Screen:</b> ${data.screenSize}
<b>Language:</b> ${data.language}
<b>User Agent:</b> ${data.userAgent}
`;
}

/**
 * Track form submissions and send to Telegram
 */
export async function trackFormSubmission(formId: string, formData: Record<string, string>): Promise<void> {
  try {
    const hostname = window.location.hostname;
    
    // Only track form submissions on artcomp.net domain
    if (!isArtcompDomain(hostname)) {
      console.log('Skipping form tracking: not on artcomp.net domain');
      return;
    }
    
    const formMessage = formatFormSubmissionMessage(formId, formData, hostname);
    await sendTelegramMessage(formMessage);
  } catch (error) {
    console.error('Error tracking form submission:', error);
  }
}

/**
 * Format form data into a readable message
 */
function formatFormSubmissionMessage(
  formId: string, 
  data: Record<string, string>, 
  hostname: string
): string {
  const fields = Object.entries(data)
    .filter(([key]) => key !== 'bot-field' && key !== 'form-name')
    .map(([key, value]) => `<b>${key}:</b> ${value}`)
    .join('\n');

  return `
<b>📝 New Form Submission on ${hostname}</b>
<b>Form:</b> ${formId}

${fields}

<b>Time:</b> ${new Date().toLocaleString()}
`;
}