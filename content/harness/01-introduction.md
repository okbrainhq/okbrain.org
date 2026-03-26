---
title: Introduction
---

# OKBrain Harness

**Harness** is the open-source orchestration layer for running AI agents at scale. It provides a simple, composable framework for defining, deploying, and monitoring AI workflows.

## Why Harness?

Building production AI systems means wrangling multiple models, managing state, handling retries, and observability — all while keeping costs under control. Harness gives you:

- **Composable pipelines** — chain models, tools, and human-in-the-loop steps
- **Built-in observability** — traces, logs, and metrics out of the box
- **Cost controls** — budget caps, token tracking, and model routing
- **Local-first** — develop locally, deploy anywhere

## How It Works

Harness treats every AI workflow as a **pipeline**. Each pipeline is a directed graph of steps that can include LLM calls, function invocations, conditional branching, and human approval gates.

![Harness pipeline overview](/images/harness-pipeline.svg)

```
Input → Preprocess → LLM Call → Validate → Output
                        ↓ (on failure)
                      Retry → Fallback Model
```

## See It In Action

This short demo walks through building and running a complete Harness pipeline from scratch:

<!-- youtube:dQw4w9WgXcQ -->

## Next Steps

Head to [Getting Started](/harness/getting-started/) to install and run your first pipeline.
