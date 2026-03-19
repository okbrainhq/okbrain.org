---
title: "Embrace AI, but Own It"
date: "2026-03-17"
excerpt: "AI is inevitable. The only question is — will you take control?"
---

Right now, there's no way AI investments are going to fail. Both the US & China are heavily invested in it. So, it will be a success whether you like it or not.

Our suggestion: embrace AI for your workflows — and make sure you're in control.

## Why Do You Need to Own It?

This isn't just about privacy. We think privacy is important, but taking control of AI and AI agents is more important than privacy.

In the future, AI agents will do a lot of work. They will do everything you do with your computer & phone. So, you need to control these agents. If you don't, you need to rely on someone else, probably a single provider like OpenAI, Anthropic or Google.

If you use a tool like OpenClaw, you own the data. But if you don't know how the tool works, you're also in trouble.

No one really knows what's going to happen in the next 24 months, especially with wars all over the world. So it’s better that you own the stack as much as possible.

## How Can You Own AI?

You can't easily build & run large AI models, but you can build your own ChatGPT. That's how you start. We believe owning AI comes in three core segments:

* Memory & Data
* Tooling
* AI Models

### 1. Owning Memory & Data

The core AI models are exposed as stateless API endpoints. This means they don't keep your data. You send text in, you get text back. Every time you ask a follow-up question, you need to send chat history. So, by controlling what you send as the input text, you are controlling the AI. This is commonly known as context management.

ChatGPT is simply a wrapper around these APIs and stores your data. Based on your conversations, it extracts facts about you and builds a memory profile. That is how it knows about you.

Owning your data is simpler than you think. Use the APIs directly, and the data stays yours.

### 2. Owning the Tooling

We need some tools to interact with these APIs. These tools can run on your computer or a server that you own.

Owning memory and data doesn't mean you are in control. If you don’t know how these tools work, you might be in trouble. That’s the risk of blindly using tools like OpenClaw.

Our suggestion is to either start building tools yourself or make sure you understand the tools you select. Also, it’s very important to stay away from skills and MCP servers created by others.

### 3. Owning Models

This is a tricky one.

We think we will never be able to run everything locally. Yes, consumer hardware is getting better, and so is enterprise hardware. There will always be a cloud model that outperforms whatever you run locally.

True model ownership means having fine-tuned weights that you control. Even using open-source models doesn't fully satisfy that. So, our approach is risk hedging — it's not true ownership, but it's the practical next best thing.

Here's how:

* Always use multiple API providers.
* Even for a single feature, make sure you have multiple candidates.
* Use local models for smaller specialised tasks.
* Use fine-tuned smaller models for custom requirements.

## How to "Get Started"?

There's no single answer to this question. Here's our take:

### 1. Owning Memory & Data

Stop using ChatGPT, Gemini or even Google AI Mode. Buy some AI credits from a cloud AI provider.

To start, we suggest [OpenRouter](https://openrouter.ai/) since you can play with a bunch of AI models. Once you are familiar with some models, try to use direct providers instead of OpenRouter.

Then download a tool like [LM Studio](https://lmstudio.ai/), [Jan AI](https://www.jan.ai/) or [OpenCode](https://opencode.ai/) to interact with these AI models.

Yes, here you have to buy API credits. It might cost more than using a ChatGPT subscription. Flagship models from OpenAI and Anthropic cost a lot, but there are good open-source alternatives & cheaper but powerful models like Gemini Flash & Grok Fast.

### 2. Owning the Tooling

This is not as easy as owning the data.

Here you are trying to build tools around these model APIs. First, get a coding agent like [Claude Code](https://claude.com/product/claude-code), [Codex](https://openai.com/codex/) or [Antigravity](https://antigravity.google/).

Start by asking it to build a simple tool to interact with an AI model — then gradually recreate the features you relied on before.

You don't need to be a developer to use coding agents. It will be hard at first, but you'll figure it out. These coding agents are really good.

As an alternative, you can use a bare-minimum tool like [pi.dev](https://pi.dev/) and build things around it.

We strongly discourage you from using MCPs and skills created by others. It's always better to use CLIs and API endpoints. You can always ask your coding agent to build something for you.

### 3. Owning Models

As we covered earlier, true model ownership isn't really possible — so we hedge instead. Let's break it down:

* OpenRouter is good for trying out models but you should try using individual AI providers directly or at least use Vercel AI Gateway as a backup.
* Use local models whenever possible.
    * Especially for embedding, never use a cloud model. Start with a simple CPU friendly model like nomic-embed-text.
    * Small Qwen models are very powerful. If you have an M-series Mac or a gaming GPU, you are in luck. Use these models for specialised tasks like summarisation & fact extraction.
* Try to fine-tune small models for specialised tasks. You can use techniques like LoRA even with a small set of training data.
    * All you need is a few hours of cloud credits for a high-end GPU. Try RunPod or Lambda Labs.
    * You can even automate this by using a Coding Agent. We still recommend doing it manually at least a few times.


## What We are Doing

OKBrain is an initiative of Arunoda Susiripala. The goal is to make sure Sri Lanka is ready for what’s coming.

We are working on [OKBrain Harness](https://github.com/okbrainhq/OKBrain-Harness), which is an open-source AI Harness that sits between ChatGPT and OpenClaw. It's our take on how to own the AI stack. You should not run it as-is but try to steal ideas from it.

We are officially launching on April 1st, 2026 (for real). Here are a couple of things we are launching:

* Open Source release of OKBrain Harness
* Grants for open-source projects with common goals
* Weekly office hours

Join our [Launch Party](/launch-party) to be part of it.
