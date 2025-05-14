# Exercise 3: Performance Optimization

## Overview
In this advanced exercise, you will use Cody to identify and optimize performance bottlenecks in a TypeScript program. Performance optimization is critical for applications that require efficiency and speed, especially in production environments.

## Objectives
- Use Cody to locate performance issues within a codebase.
- Learn techniques and strategies for optimizing TypeScript code.
- Implement performance improvements while maintaining functionality.

## Instructions
1. Open the `optimise_me.ts` file.
2. Use Cody to analyze the code for performance bottlenecks.
3. Refactor the code to optimize its performance based on Cody's suggestions.
4. Ensure that the optimized code maintains all original functionality and correctness.

## Success Criteria
- Successfully identify and refactor all performance bottlenecks in `optimise_me.ts`.
- Understand how you can use Cody for performance optimisation in TypeScript.
- Validate that the optimised code performs the same operations faster or more efficiently than the original.

### Task for Participants:
- Use Cody to identify the performance bottleneck in `findDuplicates`. The nested loop structure leads to excessive computational complexity.
- Refactor the function to use a more efficient algorithm. Consider using data structures like Sets or Maps to reduce time complexity.
- Leverage TypeScript's built-in methods and modern JavaScript features to improve performance.
- Validate that your optimized code correctly identifies duplicates and performs better than the original.

This exercise will hone participants' skills in profiling and optimizing TypeScript scripts, crucial for developing high-performance applications.

## Bun
```
bun optimise_me.ts
```

