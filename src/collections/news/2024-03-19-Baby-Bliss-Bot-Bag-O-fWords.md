---
title: Bliss, Bag of Words, and Telegraphic Prompting of LLMs
date: "2024-03-19"
slug: bag-of-words-with-bliss
excerpt: Telegraphic prompting of large language models using Blissymbolics
---

<figure style="text-align: center">
  <img src="/news/images/Horse.jpg" alt="Horse brown eat quickly oats dried">
</figure>

There is a technique for prompting Large Language Models (LLMs) with limited information and requesting them to respond with full sentences.  The technique is called a "bag of words" where a small number of the most important words in a sentence are passed to an LLM with a prompt to fill in the rest.  For example, the bag of words might be "Sun, brightly" to convey that the sun is shining brightly. A test of the [phi-3 LLM](https://news.microsoft.com/source/features/ai/the-phi-3-small-language-models-with-big-potential/) used the prompt:

> Given 'Sun, brightly", provide a single grammatically correct sentence.

phi-3 responded:

> The sun shines brightly in the sky, casting a warm and inviting glow over everything it touches.

The response is perhaps wordy and tending towards poetic, but it shows that LLMs are capable of generating complete sentences based on very little input.  More importantly, the sentence is broadly similar to the intended meaning.

The [Baby Bliss Bot project](https://floeproject.org/baby-bliss-bot-project/) is exploring the use of the bag-of-word technique using [Blissymbolics](https://www.blissymbolics.org/). Blissymbolics is based on rules, however the string of symbols resembles a bag of words. Briefly, here are some of the rules of one form of Bliss called Conceptual Bliss and how it is used to form sentences.  The rules require a classifier followed by a specifier. The classifier can be a noun or verb, while the specifier is a modifier; an adjective in the case of a noun classifier, or an adverb in the case of a verb.  For example, "dogs lazy" is made up of the classifier "dogs" followed by the specifier "lazy" and translates to the phrase "lazy dogs" (in English). A full Bliss sentence is a set of (classifier specifier) pairs. For example, the English sentence:

> The brown horse eats the dried oats quickly.

is written in Conceptual Bliss as:

> horse brown eat quickly oats dried

See the figure at the top of this article for the sentence using actual Bliss symbols.  To make the classifier/specifier structure more obvious, here is the Bliss sentence again using parentheses to show the  (classifier specifier) pairs:

> (horse brown) (eat quickly) (oats dried)

Three LLMs were tested with a pair of Conceptual Bliss sentences using the prompt "What does this express: '&hellip;'?, where the ellipsis was replaced with the Bliss sentence.  The results were encouraging.

[Llama-2](https://www.llama2.ai/):
> The brown horse is quickly eating dried oats.

[Mistral](https://auth.mistral.ai/ui/login?flow=71096bb2-6453-494d-8549-940f4f102bce):
> A brown horse quickly eats dried oats.

[Chat-GPT 3.5](https://chatgpt.com/):
> The phrase describes a brown horse quickly eating dried oats.

For more information about the tests and results, see the article [Conceptual Bliss, LLaMa-2, Mistral, and Chat-GPT](https://gist.github.com/klown/cc3bcd4dacbfafb775ad8a9883a3fa53).

The bag-of-words technique using Bliss shows promise in terms of providing a way for a user to give partial information about what they intend to say, and then prompting an LLM to suggest a complete sentence. This could speed up an AAC user's communication since they would not need to enter full sentences to convey some meaning. Possible improvements include having the LLM provide a few suggestions so that the user can choose the one that is closest to what they meant.  Another improvement is to combine the bag-of-words technique with contexts such as a history of the conversation thus far, or background information about the user, or both.  The contexts could further narrow the LLM's response and be closer to what the user intended.



