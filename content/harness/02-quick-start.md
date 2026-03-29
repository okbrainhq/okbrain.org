---
title: Quick Start Guide
---

Deploy it on a MacBook as a simple Next.js server:

```
git clone https://github.com/okbrainhq/OKBrain-Harness.git brain
cd brain
```

[Install Node.js](https://nodejs.org/en/download)

Then run the following:

```
cd brain
npm i
npm run dev
```

You'll see output like this:

```
▲ Next.js 16.2.1 (Turbopack)
- Local:         http://localhost:3000
- Network:       http://192.168.0.20:3000
- Environments: .env.local
✓ Ready in 195ms

============================================================
  Missing required environment variables:

    - GOOGLE_API_KEY

  Add them to your .env.local file and restart.
============================================================
```

As the message says, you need a Google API Key for the AI models. Visit [Google AI Studio](https://aistudio.google.com/api-keys) and create an API key. Then add it to your `.env.local` file:

```
GOOGLE_API_KEY=your-api-key-here
```

Now visit <http://localhost:3000> to access your app.

You'll be asked to log in. Create your first user from within the project:

```
npx tsx scripts/create-user.ts hello@user.com password
```

Then log in with those credentials at <http://localhost:3000>.

This guide is just for trying out OKBrain Harness quickly. For a proper development setup, see [Proper Dev Setup](/harness/proper-dev-setup/).
