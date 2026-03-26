---
title: Architecture
---

# Architecture

Harness is built around a few core concepts that work together to provide a flexible and powerful AI orchestration framework.

## Core Concepts

### Pipelines

A **pipeline** is the top-level unit of work. It defines a sequence of steps that process data from input to output. Pipelines can be:

- **Linear** — steps execute in order
- **Branching** — conditional logic splits the flow
- **Parallel** — multiple steps run simultaneously
- **Looping** — steps repeat until a condition is met

### Steps

A **step** is a single unit of work within a pipeline. Each step:

1. Receives input from the previous step (or pipeline input)
2. Performs some computation (LLM call, function, etc.)
3. Produces output for the next step (or pipeline output)

### Context

The **context** object flows through the pipeline and carries:

- `input` — the original pipeline input
- `result` — the output of the most recent step
- `history` — all previous step results
- `metadata` — tokens used, timing, model info
- `state` — mutable key-value store for cross-step data

## Execution Model

```
┌─────────────────────────────────────────────┐
│                  Pipeline                     │
│                                              │
│  ┌──────────┐    ┌──────────┐    ┌────────┐ │
│  │  Step 1  │───▶│  Step 2  │───▶│ Step 3 │ │
│  └──────────┘    └──────────┘    └────────┘ │
│       │              │              │        │
│       ▼              ▼              ▼        │
│   ┌─────────────────────────────────────┐    │
│   │           Pipeline Context           │    │
│   └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

## Middleware

Middleware wraps around step execution and can:

- **Log** — record inputs, outputs, and timing
- **Retry** — automatically retry failed steps
- **Cache** — cache step results to save tokens
- **Budget** — enforce spending limits
- **Guard** — validate step inputs/outputs

## Error Handling

When a step fails, Harness:

1. Logs the error with full context
2. Attempts retry (if configured)
3. Falls back to an alternative step (if defined)
4. Marks the pipeline as failed with a detailed trace

## Observability

Every pipeline run generates a **trace** containing:

- Step-by-step execution timeline
- Token usage per step and total
- Latency metrics
- Error details (if any)
- Input/output snapshots

Traces can be exported to your preferred monitoring system.
