## What is a Large Language Model (LLM)?

A large language model is a prediction engine that takes a sequence of words
and tries to predict the most likely sequence to come after that sequence[^1].
It does this by assigning a probability to likely next sequences and then
samples from those to choose one[^2]. The process repeats until some stopping
criteria is met.

Large language models learn these probabilities by training on large corpuses
of text. A consequence of this is that the models will cater to some use cases
better than others (e.g. if it’s trained on GitHub data, it’ll understand the
probabilities of sequences in source code really well). Another consequence is
that the model may generate statements that seem plausible, but are actually
just random without being grounded in reality.

[^1]: Language models actually use tokens, not words. A token roughly maps to a syllable in a word, or about 4 characters.  
[^2]: There are many different pruning and sampling strategies to alter the behavior and performance of the sequences.

## What is a prompt?

A prompt, sometimes referred to as context, is the text provided to a
model before it begins generating output. It guides the model to explore a
particular area of what it has learned so that the output is relevant to your
goals. As an analogy, if you think of the language model as a source code
interpreter, then a prompt is the source code to be interpreted. Somewhat
amusingly, a language model will happily attempt to guess what source code
will do:

```
{
    "role": "user",
    "content": "the sky is "
}
```

```
"message": {
    "role": "assistant",
    "content": "The sky is a vast expanse that appears blue during the day due to a phenomenon called Rayleigh scattering, where air molecules scatter sunlight—particularly the shorter blue wavelengths—in all directions. At sunset and sunrise, the sky transforms into stunning displays of orange, pink, and purple as sunlight travels through more atmosphere. At night, it becomes a window to the universe, revealing stars, planets, and celestial bodies.\n\nWould you like me to share more about why the sky appears different colors at different times, or perhaps about another aspect of the sky?"
}
```

### Basics of prompting 
You can achieve a lot with simple prompts, but the quality of results depends on how much information you provide it and how well-crafted the prompt is. A prompt can contain information like the instruction or question you are passing to the model and include other details such as context, inputs, or examples. You can use these elements to instruct the model more effectively to improve the quality of results.

A prompt contains any of the following elements:

Instruction - a specific task or instruction you want the model to perform

Context - external information or additional context that can steer the model to better responses

Input Data - the input or question that we are interested to find a response for

**Prompt**
```
Classify the text into neutral, negative, or positive
Text: I think the food was okay.
Sentiment:
```
Output: 
```
Sentiment: Neutral
```

In the prompt example above, the instruction correspond to the classification task, "Classify the text into neutral, negative, or positive". The input data corresponds to the "I think the food was okay.' part, and the output indicator used is "Sentiment:". Note that this basic example doesn't use context but this can also be provided as part of the prompt. For instance, the context for this text classification prompt can be additional examples provided as part of the prompt to help the model better understand the task and steer the type of outputs that you expect.

You do not need all the four elements for a prompt and the format depends on the task at hand.

### Start Simple
As you get started with designing prompts, you should keep in mind that it is really an iterative process that requires a lot of experimentation to get optimal results. 

When you have a big task that involves many different subtasks, you can try to break down the task into simpler subtasks and keep building up as you get better results. This avoids adding too much complexity to the prompt design process at the beginning.

### The Instruction
You can design effective prompts for various simple tasks by using commands to instruct the model what you want to achieve, such as "Write", "Classify", "Summarize", "Translate", "Order", etc.

Keep in mind that you also need to experiment a lot to see what works best. Try different instructions with different keywords, contexts, and data and see what works best for your particular use case and task. Usually, the more specific and relevant the context is to the task you are trying to perform, the better. 

**Prompt**
```
### Instruction ###
Translate the text below to Spanish:
Text: "hello!"
```

Output:
```
¡Hola!
```

### Specificity
Be very specific about the instruction and task you want the model to perform. The more descriptive and detailed the prompt is, the better the results. This is particularly important when you have a desired outcome or style of generation you are seeking. There aren't specific tokens or keywords that lead to better results. It's more important to have a good format and descriptive prompt. In fact, providing examples in the prompt is very effective to get desired output in specific formats.

When designing prompts, you should also keep in mind the length of the prompt as there are limitations regarding how long the prompt can be. Thinking about how specific and detailed you should be. Including too many unnecessary details is not necessarily a good approach. The details should be relevant and contribute to the task at hand. This is something you will need to experiment with a lot. We encourage a lot of experimentation and iteration to optimize prompts for your applications.

As an example, let's try a simple prompt to extract specific information from a piece of text.
**Prompt**
```
Extract the name of places in the following text. 
Desired format:
Place: <comma_separated_list_of_places>
Input: "Although these developments are encouraging to researchers, much is still a mystery. “We often have a black box between the brain and the effect we see in the periphery,” says Henrique Veiga-Fernandes, a neuroimmunologist at the Champalimaud Centre for the Unknown in Lisbon. “If we want to use it in the therapeutic context, we actually need to understand the mechanism.“"
```

Output:
```
Place: Champalimaud Centre for the Unknown, Lisbon
```

When an LLM doesn't work, sometimes its because the instructions weren't clear enough. For example, if you wrote "Write me something about Alan Turing", In addition to that, its important to be clear about what you want to know about, his professional life? his personal life? or his role in history? 

If you specify what you want the tone of the text to be, should it take the tone of a professional journalist or is it a casual note? Being clear and specific is an important principal of prompting LLMs.

### Zero-shot prompting
are tuned to follow instructions and are trained on large amounts of data. Large-scale training makes these models capable of performing some tasks in a "zero-shot" manner. Zero-shot prompting means that the prompt used to interact with the model won't contain examples or demonstrations. The zero-shot prompt directly instructs the model to perform a task without any additional examples to steer it.

We tried a few zero-shot examples in the previous section. Here is one of the examples (ie., text classification) we used:
**Prompt**
```
Classify the text into neutral, negative or positive. 
Text: I think the vacation is okay.
Sentiment:
```

Output:
```
Sentiment: Neutral
```

Note that in the prompt above we didn't provide the model with any examples of text alongside their classifications, the LLM already understands "sentiment" -- that's the zero-shot capabilities at work.


### Few-shot prompting
While large-language models demonstrate remarkable zero-shot capabilities, they still fall short on more complex tasks when using the zero-shot setting. Few-shot prompting can be used as a technique to enable in-context learning where we provide demonstrations in the prompt to steer the model to better performance. The demonstrations serve as conditioning for subsequent examples where we would like the model to generate a response.

**Prompt**
```
A "whatpu" is a small, furry animal native to Tanzania. An example of a sentence that uses the word whatpu is:
We were traveling in Africa and we saw these very cute whatpus.
 
To do a "farduddle" means to jump up and down really fast. An example of a sentence that uses the word farduddle is:
```

Output:
```
When we won the game, we all started to farduddle in celebration.
```

We can observe that the model has somehow learned how to perform the task by providing it with just one example (i.e., 1-shot). For more difficult tasks, we can experiment with increasing the demonstrations (e.g., 3-shot, 5-shot, 10-shot, etc.).

### Prompting techniques 
There are many others which include and many more 

- Chain-of-Thought prompting
- Meta Prompting
- Self-Consistency
- Generate Knowledge Prompting
- Tree of Thoughts
- Acctive-Prompt 

## Misc 

### Tokens

The atomic unit of consumption for a language
model is not a “word”, but rather a “token”. You can kind of think of tokens
as syllables, and on average they work out to about 750 words per 1,000
tokens. They represent many concepts beyond just alphabetical characters –
such as punctuation, sentence boundaries, and the end of a document.

### Example prompts 
Use delimiters to clearly indicate distinct parts of the input

```
text = f"""
You should express what you want a model to do by \ 
providing instructions that are as clear and \ 
specific as you can possibly make them. \ 
This will guide the model towards the desired output, \ 
and reduce the chances of receiving irrelevant \ 
or incorrect responses. Don't confuse writing a \ 
clear prompt with writing a short prompt. \ 
In many cases, longer prompts provide more clarity \ 
and context for the model, which can lead to \ 
more detailed and relevant outputs.
"""
prompt = f"""
Summarize the text delimited by triple backticks \ 
into a single sentence.
```{text}```
"""
```

Output:

```
Providing clear and specific instructions to a model is essential for guiding it towards the desired output and reducing the chances of irrelevant or incorrect responses, with longer prompts often providing more clarity and context for more detailed and relevant outputs. 
```


Ask for a structured output

```
prompt = f"""
Generate a list of three made-up book titles along \ 
with their authors and genres. 
Provide them in JSON format with the following keys: 
book_id, title, author, genre.
"""
```
Output: 

```
[
    {
        "book_id": 1,
        "title": "The Midnight Garden",
        "author": "Elena Rivers",
        "genre": "Fantasy"
    },
    {
        "book_id": 2,
        "title": "Echoes of the Past",
        "author": "Nathan Black",
        "genre": "Mystery"
    },
    {
        "book_id": 3,
        "title": "Whispers in the Wind",
        "author": "Samantha Reed",
        "genre": "Romance"
    }
]
```