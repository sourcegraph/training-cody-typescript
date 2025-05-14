# Exercise 2: Security Review

## Overview
In this advanced exercise, you will use Cody to conduct a security review of a TypeScript application. The goal is to identify and fix security vulnerabilities, ensuring that the code adheres to best security practices. This exercise will enhance your ability to write secure code and protect applications from common vulnerabilities.

## Objectives
- Utilise Cody to identify potential security issues in the code.
- Understand common security vulnerabilities, such as SQL injection, insecure data handling, and inadequate authentication.
- Implement fixes to address identified vulnerabilities and secure the application.

## Instructions
1. Open the `security_review.ts` file, which contains code with several security vulnerabilities.
2. Use Cody to analyze the code and identify the security flaws.
3. Refactor the code to mitigate the vulnerabilities, implementing security best practices.
4. Ensure that the code operates securely without compromising its functionality.

## Setup
Before running the application, you need to:
1. Install the required dependencies:
```
npm install better-sqlite3 @types/better-sqlite3
```
2. Set up the database by running:
```
bun setup_users_db.ts
```



## To run these files, you'll need to:
```
npm install better-sqlite3 @types/better-sqlite3
```

Then:

# with Bun
```
bun security_review.ts
```
