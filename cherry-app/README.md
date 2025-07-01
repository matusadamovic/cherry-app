# Cherry Video Chat

This project scaffolds a progressive web application for a real-time video chat built with React, Vite and Firebase.
It provides the basic setup with localization, theme toggling and placeholders for WebRTC video calls and mini‑games.

## Features

- Firebase authentication and Firestore (configuration via environment variables).
- WebRTC video chat component (signaling not implemented).
- Internationalization with **react-i18next** (English and Spanish samples).
- Light/Dark theme switcher using Tailwind CSS.
- PWA ready with `vite-plugin-pwa`.
- Stubs for mini‑games (Rock‑Paper‑Scissors, Quiz, Drawing game).

## Setup

1. Install dependencies

```bash
npm install
```

2. Copy `.env.example` to `.env` and fill in your Firebase project settings.

3. Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## Building

```bash
npm run build
```

The optimized app will be generated in the `dist` folder and can be served using `npm run preview`.

## Post‑MVP

This scaffold leaves hooks for advanced features like dedicated signaling servers, AI moderation and premium matchmaking.
