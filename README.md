# ArtComp Mining Solutions Website

A website for ArtComp Mining Solutions, featuring crypto mining software integration, security solutions, and AI agent development for enterprise needs.

## Features

- Modern, responsive design with Tailwind CSS
- Real-time crypto market ticker
- Contact form with Netlify form handling
- Visitor tracking via Telegram bot

## Telegram Bot Setup

To set up the Telegram bot for visitor tracking:

1. Create a bot with BotFather and get your bot token
2. Get your chat ID using userinfobot
3. Add these to your environment variables:
   - `VITE_TELEGRAM_BOT_TOKEN`
   - `VITE_TELEGRAM_CHAT_ID`

For detailed setup instructions, check the `/setup/telegram` page after running the application.

## Development

```
npm install
npm run dev
```

## Deployment

The site is deployed to Netlify. Set the environment variables in your Netlify dashboard for the production environment.

```
npm run build
```

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/markoneo/sb1-d9tarmngARTCOMP3333)