---
title: Getting Started
---

# Getting Started

## Prerequisites

- Node.js 18+
- An API key for at least one LLM provider (OpenAI, Anthropic, or Ollama for local)

## Installation

```bash
npm install @okbrain/harness
```

Or clone the repo:

```bash
git clone https://github.com/okbrain/harness.git
cd harness
npm install
```

## Your First Pipeline

Create a file called `pipeline.js`:

```javascript
import { Pipeline, Step, llm } from "@okbrain/harness";

const pipeline = new Pipeline("hello-world");

pipeline
  .addStep(new Step("greet", llm("Tell me about OKBrain Harness in 3 sentences.")))
  .addStep(new Step("format", async (ctx) => {
    return `## About Harness\n\n${ctx.result}`;
  }));

const result = await pipeline.run();
console.log(result);
```

Run it:

```bash
node pipeline.js
```

## Project Structure

A typical Harness project looks like this:

```
my-harness-app/
├── pipelines/
│   ├── classify.js
│   └── summarize.js
├── tools/
│   ├── search.js
│   └── database.js
├── harness.config.js
└── package.json
```

## Configuration

Create a `harness.config.js` file in your project root:

```javascript
export default {
  provider: "openai",
  model: "gpt-4",
  maxTokens: 2048,
  budget: {
    maxSpendPerRun: 0.05
  }
};
```

See the full [Configuration](/harness/configuration/) reference for all options.

## Next

Learn about [Architecture](/harness/architecture/) to understand how Harness works under the hood.
