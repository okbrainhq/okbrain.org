---
title: Infinite Memory
---

OKBrain has a continuous fact extraction system that tries to learn as much as possible from your conversations and other interactions. Everything stays on your machine, and you can see exactly what it knows about you.

It uses a tiered architecture to achieve this:

## Continuous Fact Extraction

Every 30 minutes, it goes through your conversations and tries to extract facts. You can use a local model like Qwen 3.5 4B for this. If you can't run that model, it falls back to Gemini 3 Flash.

Each extracted fact is categorized into one of the following groups:

1. Core
2. Technical
3. Project
4. Transient

All extracted facts are linked to their source conversations and stored in your local SQLite database.

If you enable vector embedding support, it will also generate embeddings for these facts. These are optionally used for RAG-based retrieval.

## Fact Sheet Injection

We can't send every fact to the AI model when you ask a question. Instead, we generate a fact sheet containing about 100–130 facts from all the categories above.

The fact sheet is generated right after fact extraction, using the same LLM. Here's how it works:

* We send the previous fact sheet (if it exists)
* We send the newly extracted facts grouped by category
* We also send all facts extracted in the last few hours
* We ask the AI model to generate a new fact sheet based on those inputs
* We set some limits, such as a maximum word length per fact, guidelines for selection, and min/max counts per category

The generated fact sheet is injected into the AI model's context when you ask a question, so it can use that information to give you a better answer.

## RAG-Based Facts

This only works if you enable vector embedding support. We use an embedding model to convert facts into a vector space where similar facts stay close together. When you ask a question, we find the most relevant facts using semantic similarity.

These facts supplement the fact sheet to provide richer context when answering your questions.

## Explicit Fact & Conversation Search

We've given the AI model tools to search facts and conversations on demand. If it needs more information about you, it can search the knowledge base and retrieve relevant results.

## Recent Conversation Injections

Since facts are extracted every 30 minutes, there's a window where the AI model doesn't know about your recent interactions. To bridge this gap, we feed all questions (including follow-up questions) from that blind window into the AI model's context.

This way, the AI model is always aware of your recent conversations.

This is how we achieve infinite memory. It's straightforward to implement, requires no special libraries, and while it's not perfect, it gets the job done.

You can visit the /me page to view your facts and fact sheets, and edit them as you wish.
