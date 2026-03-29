---
title: Internet/Web Use
---

By default, AI models can't use the internet. While most models offer built-in internet search tools, we deliberately chose not to use them — we don't want to lock into a specific provider. Instead, we expose our own internet use tools.

We also instruct models to always verify facts and include inline sources, which significantly reduces hallucinations. The benefit is that this works with any AI model you add, even locally running models.

By default, we support the following providers for web search:

* Brave Search API
* Tavily

If you need a different provider, you can ask a coding agent to add support for it.
