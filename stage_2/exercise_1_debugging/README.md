# Exercise 1: Debugging Workflows

## Overview
In this exercise, participants will learn how to utilize Cody to identify and fix bugs within a TypeScript application. Debugging is a crucial skill for developers, and Cody can be an invaluable tool in swiftly diagnosing and resolving issues in code.

## Objective
- Practice using Cody to identify bugs in a TypeScript application.
- Learn how to fix common coding errors with Cody's assistance.
- Understand different types of bugs: type errors, logic errors, null safety issues, and runtime errors.

## Instructions
1. Open the `buggy_code.ts` file, which contains a task management application with multiple intentional bugs.
2. Use Cody to help identify the issues in the code.
3. Correct the bugs and ensure that the application runs successfully.
4. Confirm that the output of the application is as expected.

## Success Criteria
- Successfully identify and fix all bugs within the `buggy_code.ts` file.
- The application should execute without errors and produce the correct output.
- Participants should be able to explain the nature of each bug and how it was resolved.

### Task for Participants:
Use Cody to identify and fix the following types of bugs in the task management application:

1. **Type Safety Issues**:
  - Fix the poorly typed parameters in the `addTask` method to ensure type safety.

2. **Logic Errors**:
  - Correct the filtering logic in `getTasksByPriority` which currently returns the wrong priority tasks.

3. **Null Safety Issues**:
  - Add proper null checks in the `completeTask` method to prevent crashes when a task isn't found.

4. **Date Handling Problems**:
  - Fix the date comparison in `getOverdueTasks` to properly identify tasks that are past their due date.

5. **Runtime Errors**:
  - Modify the test code to prevent it from attempting to complete a non-existent task.

This exercise will enhance participants' debugging skills using Cody, while also demonstrating how Cody can help identify and fix different categories of common programming errors.
