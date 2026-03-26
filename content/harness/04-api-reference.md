---
title: API Reference
---

# API Reference

## Pipeline

### `new Pipeline(name, options?)`

Creates a new pipeline instance.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | `string` | Unique identifier for the pipeline |
| `options` | `object` | Optional configuration |
| `options.timeout` | `number` | Max execution time in ms (default: 60000) |
| `options.retries` | `number` | Default retry count for all steps (default: 0) |

### `pipeline.addStep(step)`

Adds a step to the pipeline. Steps execute in the order they are added.

### `pipeline.run(input?)`

Executes the pipeline and returns the final result.

**Returns:** `Promise<PipelineResult>`

```typescript
interface PipelineResult {
  output: any;
  traces: Trace[];
  tokens: { prompt: number; completion: number };
  duration: number;
}
```

---

## Step

### `new Step(name, handler, options?)`

Creates a new step.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | `string` | Step identifier |
| `handler` | `Function` or `LlmCall` | Step logic |
| `options.retry` | `number` | Retry attempts on failure |
| `options.timeout` | `number` | Step timeout in ms |

---

## See the API in Action

Watch a walkthrough of the Harness API, covering pipelines, steps, and built-in handlers:

<!-- youtube:ScMzIvxBSi4 -->

## Built-in Handlers

### `llm(prompt, options?)`

Creates an LLM call step.

```javascript
llm("Summarize this text: {{input}}", {
  model: "gpt-4",
  temperature: 0.7,
  maxTokens: 1024
})
```

### `function(fn, options?)`

Wraps a plain function as a step.

```javascript
function(async (ctx) => {
  const response = await fetch(apiUrl);
  return response.json();
})
```

### `branch(condition, trueStep, falseStep)`

Conditional branching.

```javascript
branch(
  (ctx) => ctx.result.length > 100,
  llm("Summarize briefly"),
  llm("Expand with more detail")
)
```

### `parallel(...steps)`

Run multiple steps in parallel.

```javascript
parallel(
  llm("Generate a title"),
  llm("Generate a summary"),
  llm("Extract keywords")
)
```
