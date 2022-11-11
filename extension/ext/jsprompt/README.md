# jsprompt
An NPM Package that makes creating prompts in NodeJS Easier again, using the 'readline' package.

# Installation
```bash
npm install jsprompt
```

# Usage
```js
// Node
const prompt = require('jsprompt');

// ES6:
import prompt from 'jsprompt'
```

### Table of Contents

- [prompt(str)][1]
  - [Parameters][2]

## &bull; prompt(str)

A function that returns a promise that resolves to the user's input

### Parameters

- `$$$$$ (Prompt string)` : The question to ask the user, can be anything. (optional, default `""`)

Returns **any** A promise that resolves to the user's input.

Example Usage:

```js
// Getting a user's input:
const name = await prompt("What is your name? ");
console.log("Hi", name, "!");

// Working with symbols:
const command = await prompt(">>> ");
console.log(eval(command));

// Working with promises:
prompt("Enter code to eval: ").then((code) => eval(code));
```

**Meta**

- **Author**: Ramy Hadid
  <br>

> Written and maintained by <a href="https://github.com/rhpo">@rhpo</a> (github.com/rhpo) ❤️.

[1]: #exports
[2]: #parameters
