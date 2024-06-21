---
title: Fine-Tuning Llama2 for Enhancing Blissymbolics Translation
date: "2024-04-26"
slug: fine-tuning-llama2
excerpt: Gain insight into the proficiency of a large language model in mastering Blissymbolics sentence structures.
---

[Baby Bliss Bot project](https://floeproject.org/baby-bliss-bot-project/) has fine-tuned the Llama2 model to
enhance translation between English sentences and Blissymbolics sentences. Blissymbolics, a symbol language
used primarily by individuals with physical disabilities who are non-speaking, presents a unique challenge for
computational linguistics. The goal was to evaluate how well a large language model (LLM) can learn the
conversion between English and Blissymbolics sentence structures, thereby improving communication for
Blissymbolics users.

The fine-tuning process began with the Llama2 model, a large language model pretrained by Meta, known for its
robust performance in natural language processing tasks. The researchers utilized a dataset containing 967 pairs
of English sentences, structured according to standard English grammatical rules, and Blissymbolics sentences.
Blissymbolics sentences are composed using corresponding English words for Bliss symbols while adhering to the
grammatical and syntactical rules of Blissymbolics. For example, the English sentence "I slowly move towards the
blue lake" would be represented in Blissymbolics as "present: I move slowly towards lake blue." This structural
consistency was crucial for the model's learning process.

The fine-tuning was executed on the Cedar cluster, a high-performance computing resource provided by
the [Digital Research Alliance of Canada](https://alliancecan.ca). By iteratively training the model over four epochs,
the team generated multiple versions of the fine-tuned model. Each version was tested to evaluate its performance
in translating sentences between English and Blissymbolics. The evaluation criteria for the converted sentences
included semantic coherence, novelty, creativity, fluency, and readability. The results were promising, with the
models, particularly those trained for two and three epochs, demonstrating significant improvements in translation
accuracy and fluency.

Looking ahead, the project aims to further enhance the model by expanding the dataset to include a broader variety
of sentence structures and conducting more comprehensive evaluations. This ongoing work holds the potential to
advance assistive communication technology, making Blissymbolics more accessible and easier to use for individuals
relying on this unique language.
