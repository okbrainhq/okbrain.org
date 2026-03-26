---
title: Testing
---

# Testing

Harness provides built-in testing utilities for your pipelines.

## Writing Tests

```javascript
import { test } from "@okbrain/harness/testing";

test("classify pipeline", async (t) => {
  const result = await classifyPipeline.run("Hello world");
  t.ok(result.output.category);
});
```

## Coming Soon

Mock providers, snapshot testing, and CI integration guides are on the way.
