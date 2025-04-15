import React, { useState, useEffect } from 'react';
import { TelegramSetupGuide } from '../../components/TelegramSetupGuide';
import { checkTelegramConfig, trackVisitor } from '../../services/telegram/telegramService';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export default function TelegramSetup() {
  const [isConfigured, setIsConfigured] = useState<boolean | null>(null);
  
  useEffect(() => {
    const checkConfig = async () => {
      const result = await checkTelegramConfig();
      setIsConfigured(result);
    };
    
    checkConfig();
  }, []);
  
  const testTelegramBot = async () => {
    try {
      await trackVisitor({
        page: '/setup/telegram (Test)',
      });
      alert('Test message sent! Check your Telegram chat.');
    } catch (error) {
      console.error('Failed to send test message:', error);
      alert('Failed to send test message. Check console for details.');
    }
  };
  
  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Button
            variant="outline"
            className="mr-4"
            onClick={() => window.location.href = '/'}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold">Telegram Visitor Tracking Setup</h1>
        </div>
        
        {isConfigured === true && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            <p className="font-bold">✅ Telegram bot is configured correctly!</p>
            <p>Your Telegram bot is properly configured and ready to track visitors on artcomp.net domain.</p>
          </div>
        )}
        
        {isConfigured === false && (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-6">
            <p className="font-bold">⚠️ Telegram bot is not configured correctly</p>
            <p>Please follow the setup guide below to configure your Telegram bot.</p>
          </div>
        )}
        
        <TelegramSetupGuide />
        
        <div className="mt-8 bg-cream-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Testing Your Configuration</h2>
          <p className="mb-4">
            After setting up your Telegram bot, you can test it by:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <button 
                onClick={testTelegramBot}
                className="text-cream-400 hover:underline"
              >
                Click here to send a test message
              </button>
            </li>
            <li>Refreshing this page (which will send a visitor notification)</li>
            <li>Submitting the contact form on the home page</li>
            <li>Checking your Telegram chat for the notifications</li>
          </ol>
          
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
            <h3 className="font-semibold">Domain-Specific Tracking</h3>
            <p>The bot is configured to only track visitors on the following domains:</p>
            <ul className="list-disc ml-5 mt-2">
              <li>artcomp.net</li>
              <li>www.artcomp.net</li>
              <li>localhost (for testing)</li>
              <li>stackblitz.io domains (for development)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}