---
title: Enabling Additional Features
---

All features are configured through environment variables in the `.env.local` file. Edit this file and restart the dev server to apply changes.

## Required Variables

These are needed for a basic working setup:

```
JWT_SECRET=<generate with: openssl rand -base64 32>
GOOGLE_API_KEY=<your-google-api-key>
```

* `JWT_SECRET` — signs authentication tokens. Generate one with `openssl rand -base64 32`.
* `GOOGLE_API_KEY` — powers Gemini models. Get one from [Google AI Studio](https://aistudio.google.com/apikey).

## AI Model Providers

Add any of the following keys to enable additional model providers. Each one will appear in the model selector automatically. To add, remove, or configure models for a provider, edit its config file in `src/lib/ai/providers/`.

### Google (Gemini)

Enabled by default with `GOOGLE_API_KEY`. Models include Gemini 3 Flash and Gemini 3.1 Pro. Config: `src/lib/ai/providers/google.ts`

### xAI (Grok)

```
XAI_API_KEY=<your-xai-key>
```

Get an API key from [xAI Console](https://console.x.ai/). Includes Grok 4.1 Fast. Config: `src/lib/ai/providers/xai.ts`

### Anthropic (Claude)

```
ANTHROPIC_API_KEY=<your-anthropic-key>
```

Get an API key from [Anthropic Console](https://console.anthropic.com/). Includes Claude Sonnet 4.6 and Claude Haiku 4.5. Config: `src/lib/ai/providers/anthropic.ts`

### OpenRouter (Qwen, MiniMax, etc.)

```
OPENROUTER_API_KEY=<your-openrouter-key>
```

Get an API key from [OpenRouter](https://openrouter.ai/settings/keys). Includes GPT 5.4 Mini. Config: `src/lib/ai/providers/openrouter.ts`

### Fireworks (Kimi)

```
FIREWORKS_API_KEY=<your-fireworks-key>
```

Get an API key from Fireworks AI. Includes Kimi K2.5. Config: `src/lib/ai/providers/fireworks.ts`

### ZAI (GLM)

```
ZAI_API_KEY=<your-zai-key>
```

Includes GLM-5 Turbo. Config: `src/lib/ai/providers/zai.ts`

### Ollama (Local Models)

```
OLLAMA_URL=http://localhost:11434
```

This is the URL of your Ollama server. It may be running on a different machine in your network. With this set, Ollama models appear in the model selector. It also enables local fact extraction using `qwen3.5:4b` if that model is available. Config: `src/lib/ai/providers/ollama.ts`

## Web Search Providers

Without a search provider, AI models cannot access the internet. Add at least one:

### Brave Search

```
BRAVE_API_KEY=<your-brave-key>
```

Enables `internet_search`, `news_search`, and `image_search` tools. Get an API key from [Brave Search API](https://brave.com/search/api/).

### Tavily

```
TAVILY_API_KEY=<your-tavily-key>
```

Enables `internet_search_premium` and `read_url` tools. Get an API key from [Tavily](https://tavily.com/).

You can enable both — Brave is used by default for general search, and Tavily provides additional capabilities like URL content reading.

## Semantic Search (RAG)

Enable vector-based fact search by setting both variables:

```
OLLAMA_URL=http://localhost:11434
VECTOR_EMBEDDING_MODEL=nomic-embed-text:v1.5
```

This requires Ollama running with the `nomic-embed-text:v1.5` model. We strongly recommend using a local embedding model rather than a cloud service for privacy.

## Google Cloud APIs (Optional)

With your `GOOGLE_API_KEY`, you can also enable location-aware features by turning on these APIs in the [Google Cloud Console](https://console.cloud.google.com/):

* Places API (New)
* Routes API
* Weather API
* Air Quality API

Navigate to **APIs & Services > Enabled APIs & services** and enable each one. No additional environment variables are needed — the existing `GOOGLE_API_KEY` covers all of them.

## Other Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `APP_BASE_URL` | — | Base URL for the app (needed for production) |
| `UPLOAD_DATA_DIR` | `./data` | Where uploaded files are stored |
| `DISABLE_SECURE_COOKIE` | — | Set to `1` when not using TLS (e.g., development) |
