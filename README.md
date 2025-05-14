# Cody hands on training
Contains a number of training exercises to help engineers learn how to use Cody

## Install the VS Code extension
You can install VS Code directly from the [VS Code extension marketplace listing](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) or by following these steps directly within VS Code:

Open VS Code editor on your local machine
Click the Extensions icon in the Activity Bar on the side of VS Code, or use the keyboard shortcut Cmd+Shift+X (macOS) or Ctrl+Shift+X (Windows/Linux)
Type Cody AI in the search bar and click the Install button
After installing, you may be prompted to reload VS Code to activate the extension

## Dependencies

To install dependencies:
```
curl -fsSL https://bun.sh/install | bash
```

Verify the installation by running:
```
bun --version
```

if bun command not found - restart shell:
```
source ~/.zshrc  
```

To run exercise files:
```
bun run index.ts
```

Upgrade bun
```
bun upgrade
```

Bun can directly execute .ts and .tsx files just like vanilla JavaScript, with no extra configuration.  
Bun internally transpiles it into JavaScript then executes the file.

This project was created using `bun init` in bun v1.2.4. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Overview
This full-day workshop is designed to provide hands-on training for engineers on using Cody, Sourcegraph's AI coding assistant. The session progresses from basic concepts to advanced techniques, ensuring participants leave with practical experience they can immediately apply to their daily work.


## Exercise Repository Structure
The repository contains progressive exercises in the following categories:

### Stage 1: Beginner Exercises
- **Exercise 1**: Code Explanation - Practice using Cody to understand unfamiliar code
- **Exercise 2**: Documentation - Generate documentation for existing code
- **Exercise 3**: Simple Generation - Use Cody to generate basic functions and utilities

### Stage 2: Intermediate Exercises
- **Exercise 1**: Debugging Workflows - Identify and fix bugs with Cody's assistance
- **Exercise 2**: Test Generation - Create unit tests for existing functionality
- **Exercise 3**: Code Refactoring - Improve a complex order processing system by applying refactoring techniques to enhance readability, performance, and maintainability

### Stage 3: Advanced Exercises
- **Exercise 1**: API Development & Feature Extension - Transform an existing order system into a REST API and implement new features
- **Exercise 2**: Security Review - Identify and fix security vulnerabilities in code
- **Exercise 3**: Performance Optimization - Analyze and improve code performance

## Project structure
```
cody_workshop/
├── prompts_0/
│   └── GUIDE.md
├── stage_1/
│   ├── exercise_1_code_exaplanation/
│   │   ├── README.md
│   │   └── sample_code.ts
│   ├── exercise_2_documentation/
│   │   ├── README.md
│   │   └── undocumented_code.ts
│   └── exercise_3_simple_generation/
│       ├── README.md
│       └── generate_function.ts
├── stage_2/
│   ├── exercise_1_debugging/
│   │   ├── README.md
│   │   └── buggy_code.ts
│   ├── exercise_2_test_generation/
│   │   ├── README.md
│   │   └── code_to_test.ts
│   └── exercise_3_refactoring/
│       ├── README.md
│       └── refactor_me.ts
├── stage_3/
│   ├── exercise_1_api_development/
│   │   ├── README.md
│   │   └── complex_app.ts
│   ├── exercise_2_security_review/
│   │   ├── README.md
│   │   ├── security_review.ts
│   │   ├── setup_users_db.ts
│   │   └── users.db
│   └── exercise_3_performance/
│       ├── README.md
│       └── optimise_me.ts
├── README.md
├── bun.lock
├── hello_world.ts
├── index.ts
├── package-lock.json
├── package.json
└── tsconfig.json
```


