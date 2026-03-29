---
title: Proper Dev Setup
---

We don't recommend deploying this app as-is. Instead, we encourage you to treat it as a development project and work with a coding agent to customize it for your needs.

> We recommend running it on a Linux Virtual Machine. You can use Ubuntu or Debian.

Use a VM setup tool (on Mac: Parallels, UTM, or OrbStack) and install Ubuntu Desktop.

Open a terminal on Ubuntu and install the following tools:

```
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl wget git build-essential openssh-server avahi-daemon
sudo systemctl enable --now avahi-daemon
```

Set a hostname — this is how you'll access it:

```
sudo hostnamectl set-hostname mybrain
```

**Restart your Ubuntu VM after this.**

Now you can access the Ubuntu VM via SSH from your Mac or Windows using the domain `mybrain.local`. To verify, open a terminal on your Mac/PC and run:

```
ping mybrain.local
```

You should see something like this:

```
PING mybrain.local (10.211.55.9): 56 data bytes
64 bytes from 10.211.55.9: icmp_seq=0 ttl=64 time=0.463 ms
64 bytes from 10.211.55.9: icmp_seq=1 ttl=64 time=0.509 ms
64 bytes from 10.211.55.9: icmp_seq=2 ttl=64 time=0.599 ms
```

## Connecting to the Ubuntu VM

The best approach is to use VSCode and connect directly via [Remote SSH](https://code.visualstudio.com/docs/remote/ssh). You can then work with OKBrain just like any other project, but everything runs inside the VM.

> You can also use any other editor or just the terminal.

When connecting, the SSH command will look something like:

```
ssh yourusername@mybrain.local
```

If you don't know your username, run the `whoami` command in a terminal on Ubuntu.

## Setting Up a Coding Agent

We highly recommend working with a coding agent on the OKBrain project — you can ask questions, add/remove features, and more. Since you already have VSCode, it comes with GitHub Copilot. Alternatively, you can use Claude Code, Codex, or OpenCode.

## Setting Up OKBrain

Clone the repo:

```
git clone https://github.com/okbrainhq/OKBrain-Harness.git brain
cd brain
```

Then install all the server dependencies:

```
sudo ./scripts/deploy/remote-setup.sh --dev
```

Install project dependencies:

```
npm i
```

Then run:

```
npm run dev
```

This will create a `.env.local` file for settings and print:

```
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

> If you're using VSCode, you can visit the URL above from your Mac/PC browser. Otherwise, you'll need SSH port forwarding:
>
> `ssh -L 3000:localhost:3000 yourusername@mybrain.local`

You'll be asked to log in. Let's create your first user from within the project:

```
npx tsx scripts/create-user.ts hello@user.com password
```

Then log in with those credentials at <http://localhost:3000>.

Now you have a very basic version of OKBrain. You can ask questions with Gemini, but it has no access to the internet or computer use. For those, see [Enabling Additional Features](/harness/enabling-features/).
