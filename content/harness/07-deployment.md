---
title: Deployment
---

# Deployment

Deploy your Harness pipelines to production.

## Static Export

```bash
npx @okbrain/harness build --output ./dist
```

## Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm ci
CMD ["node", "pipelines/index.js"]
```

## Coming Soon

Cloud deployment targets and auto-scaling guides coming soon.
