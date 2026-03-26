---
title: Configuration
---

# Configuration

Harness can be configured through a `harness.config.js` file, environment variables, or programmatic options.

## Config File

Create `harness.config.js` in your project root:

```javascript
export default {
  provider: "openai",
  model: "gpt-4",
  maxTokens: 2048,
  temperature: 0.7,

  budget: {
    enabled: true,
    maxSpendPerRun: 0.10,
    maxSpendPerDay: 5.00,
    alertThreshold: 0.80
  },

  cache: {
    enabled: true,
    ttl: 3600
  },

  logging: {
    level: "info",
    format: "json"
  }
};
```

## Provider Settings

### OpenAI

```javascript
{
  provider: "openai",
  model: "gpt-4",
  apiKey: process.env.OPENAI_API_KEY
}
```

### Anthropic

```javascript
{
  provider: "anthropic",
  model: "claude-3-opus-20240229",
  apiKey: process.env.ANTHROPIC_API_KEY
}
```

### Ollama (Local)

```javascript
{
  provider: "ollama",
  model: "llama3",
  baseUrl: "http://localhost:11434"
}
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `HARNESS_PROVIDER` | Default LLM provider |
| `HARNESS_MODEL` | Default model name |
| `HARNESS_API_KEY` | API key for the provider |
| `HARNESS_LOG_LEVEL` | Logging level (`debug`, `info`, `warn`, `error`) |
| `HARNESS_CACHE_DIR` | Directory for cached responses |
| `HARNESS_MAX_TOKENS` | Default max tokens per request |

Environment variables override config file values.

## Budget Controls

Budget controls prevent runaway spending:

```javascript
{
  budget: {
    enabled: true,
    maxSpendPerRun: 0.10,    // $0.10 per pipeline run
    maxSpendPerDay: 5.00,    // $5.00 daily limit
    alertThreshold: 0.80,    // Alert at 80% of budget
    onBudgetExceeded: "stop" // "stop" or "warn"
  }
}
```

## Caching

Enable caching to avoid redundant LLM calls:

```javascript
{
  cache: {
    enabled: true,
    ttl: 3600,              // Cache for 1 hour
    keyFn: (ctx) => ctx.input // Custom cache key function
  }
}
```
