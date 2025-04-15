import React from 'react';
import { TELEGRAM_CONFIG } from '../services/telegram/config';

export function TelegramSetupGuide() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-cream-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Telegram Bot Setup Guide</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Step 1: Create a Telegram Bot</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Open Telegram and search for the "BotFather" (@BotFather)</li>
            <li>Start a chat and send the command: <code className="bg-gray-200 px-2 py-1 rounded">/newbot</code></li>
            <li>Follow the instructions to name your bot</li>
            <li>BotFather will give you a token that looks like: <code className="bg-gray-200 px-2 py-1 rounded">123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ</code></li>
            <li>Save this token - you'll need it for the .env file</li>
          </ol>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Step 2: Get Your Chat ID</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Search for "userinfobot" (@userinfobot) in Telegram</li>
            <li>Start a chat with this bot</li>
            <li>It will respond with your account info, including your Chat ID</li>
            <li>Save this ID - you'll need it for the .env file</li>
          </ol>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Step 3: Update Environment Variables</h3>
          <p>Add these variables to your .env file:</p>
          <pre className="bg-gray-800 text-white p-3 rounded overflow-x-auto my-2">
            VITE_TELEGRAM_BOT_TOKEN={TELEGRAM_CONFIG.BOT_TOKEN || 'your_bot_token_here'}
            VITE_TELEGRAM_CHAT_ID=your_chat_id_here
          </pre>
        </div>
        
        <div className="bg-green-100 p-4 rounded-lg border border-green-300">
          <h3 className="text-lg font-semibold mb-2">✅ Domain-Specific Tracking</h3>
          <p className="mb-2">The Telegram bot is configured to only track visitors on:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>artcomp.net</strong> - Main domain</li>
            <li><strong>www.artcomp.net</strong> - Subdomain with www prefix</li>
            <li>Testing domains (localhost, stackblitz.io) for development purposes</li>
          </ul>
          <p className="mt-2">This ensures you only receive notifications for actual visitors to your production website.</p>
        </div>
        
        <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
          <h3 className="text-lg font-semibold mb-2">⚠️ Important Security Notes</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Keep your bot token private and never commit it to public repositories</li>
            <li>For production, set these environment variables in your Netlify dashboard</li>
            <li>Consider adding IP or request rate limiting to prevent abuse</li>
          </ul>
        </div>
        
        <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
          <h3 className="text-lg font-semibold mb-2">ℹ️ What You'll Receive</h3>
          <p className="mb-2">Once configured, you'll receive these notifications in your Telegram chat:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Visitor notifications</strong> - When someone visits www.artcomp.net</li>
            <li><strong>Form submissions</strong> - When someone fills out your contact form</li>
          </ul>
        </div>
      </div>
    </div>
  );
}