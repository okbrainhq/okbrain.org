---
title: Plugins
---

# Plugins

Extend Harness with community plugins.

## Using Plugins

```javascript
import { use } from "@okbrain/harness";
import slackPlugin from "@okbrain/plugin-slack";

use(slackPlugin({ webhook: process.env.SLACK_WEBHOOK }));
```

## Coming Soon

Plugin development guide and registry are in progress.
