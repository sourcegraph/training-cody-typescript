# Exercise 2: API Test Generation

## Run the following commands to set up dependencies

```bash
# Install dependencies
bun add express express-validator uuid
bun add -d supertest @types/supertest
```

## Overview
This exercise is designed to help you leverage Cody to generate tests for a RESTful API server. API testing is a critical skill for ensuring your endpoints work correctly, handle errors appropriately, and maintain functionality during code changes.

## Objectives
- Learn how to use Cody to suggest and generate API tests
- Understand how to test HTTP endpoints with different methods (GET, POST, PUT, DELETE)
- Implement tests that verify both successful operations and error handling
- Practice mocking dependencies when testing APIs

## Instructions
1. Open the `code_to_test.ts` file, which contains an Express server with several API endpoints for user management
2. Use Cody to help generate test cases and test code for these endpoints
3. Write unit and integration tests using Bun's test runner and Supertest
4. Run the tests to verify the functionality of all API endpoints

## Success Criteria
- Successfully create and run tests for all API endpoints
- Include tests for both successful operations and error handling cases
- Ensure all tests pass, confirming that the API behaves as expected

### Task for Participants:
Use Cody to help you generate tests for the following API endpoints:

1. **GET /api/users**
   - Test successful retrieval of all users
   - Verify response format and status code

2. **GET /api/users/:id**
   - Test successful retrieval of a specific user
   - Test response when user doesn't exist
   - Test validation for invalid ID format

3. **POST /api/users**
   - Test successful user creation
   - Test validation errors (missing fields, invalid email, etc.)
   - Test duplicate email handling

4. **PUT /api/users/:id**
   - Test successful user update
   - Test partial updates (only updating some fields)
   - Test validation errors
   - Test updating to an email that's already in use

5. **DELETE /api/users/:id**
   - Test successful user deletion
   - Test deleting a non-existent user

## Testing Tools
For this exercise, we'll use:
- **Bun Test**: Bun's built-in test runner
- **Supertest**: For making HTTP requests to your Express app

## Running Tests

To run the tests with Bun:

```bash
# Run all tests
bun test

# Run tests in watch mode
bun test --watch

# Generate coverage report
bun test --coverage
```

## Example Test Structure
```typescript
import { test, expect, describe } from "bun:test";
import supertest from "supertest";
import { app } from "./code_to_test";

describe('User API', () => {
  describe('GET /api/users', () => {
    test('should return all users', async () => {
      const response = await supertest(app).get('/api/users');
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      // More assertions...
    });
  });
  
  describe('POST /api/users', () => {
    test('should create a new user', async () => {
      // Test code here
    });
    
    test('should return validation error for invalid input', async () => {
      // Test code here
    });
  });
});
```

