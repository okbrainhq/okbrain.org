---
title: Using Local Models
---

OKBrain Harness recommends using local models whenever possible. You can expose the local Ollama URL via the `OLLAMA_URL` environment variable, since Ollama might be running on a different machine in your local network.

### For Vector Embeddings

We strongly recommend against using a cloud model for vector embeddings. Instead, use a model like `nomic-embed-text:v1.5`, even without a GPU.

Set the following in your `.env.local`:

```
VECTOR_EMBEDDING_MODEL=nomic-embed-text:v1.5
```

### As a Model Provider

We also have built-in support for Ollama as a model provider for conversations. You can edit the `src/lib/ai/providers/ollama.ts` file to configure the available models.

### For Fact Extraction

If the `qwen3.5:4b` model is available at the `OLLAMA_URL` endpoint, OKBrain Harness will use it for fact extraction. We have extensively tested various local models, and this one fits our fact extraction use case best. That is why it is hardcoded for now.
