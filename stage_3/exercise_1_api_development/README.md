# Exercise 1: API Development & Feature Extensions

## Overview
In this advanced exercise, you will transform the existing order processing system into a fully-functional REST API with extended features. This task will help you understand how to build upon existing business logic to create robust APIs and implement new functionality.

## Objectives
- Use Cody to help create a REST API based on the existing order processing logic
- Extend the system with new features and data models
- Implement proper error handling, validation, and API documentation
- Apply professional API design principles and patterns

## Instructions
1. Open the `routes.ts` file.
2. Use Cody to help transform this code into a REST API using Express or another framework of your choice.
3. Extend the functionality with additional features as described below.
4. Ensure proper error handling, input validation, and documentation are implemented.

## Success Criteria
- Successfully create a REST API that exposes the order processing functionality
- Implement at least three new features from the extension list
- Include proper error handling, validation, and API documentation
- Demonstrate the API works correctly with test requests

### Task for Participants:

#### 1. API Development
- Create RESTful endpoints for order operations:
  - `GET /orders` - List all orders
  - `GET /orders/:id` - Get a specific order
  - `POST /orders` - Create a new order
  - `PUT /orders/:id` - Update an order
  - `DELETE /orders/:id` - Delete an order
  - `GET /reports/total` - Get total order cost report

#### 2. Feature Extensions
- **Order Filtering & Pagination**: Add the ability to filter orders by type, date range with pagination support
- **User Authentication**: Implement basic user authentication for API access
- **Order Status Tracking**: Add a workflow for changing order status with history tracking
- **Discount System**: Implement volume-based discounts and coupon codes
- **Notification Service**: Create a simulated email/SMS notification system for order updates
- **Data Persistence**: Add a simple database or file-based persistence
- **Reporting API**: Create advanced reporting endpoints (e.g., sales by product type, time-based analysis)

#### 3. Technical Requirements
- Include proper request validation
- Implement comprehensive error handling
- Document all API endpoints (with Swagger/OpenAPI or similar)
- Write tests for the API endpoints
- Follow best practices for API design and security

