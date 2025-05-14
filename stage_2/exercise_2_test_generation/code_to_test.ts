import express from 'express';
import { body, param, validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import type { RequestHandler } from "express";

type ArgumentTypes<T> = T extends (...args: infer P) => any ? P : never;

type RequestHandlerArgs = ArgumentTypes<RequestHandler>;

// Define types
interface User {
    id: string;
    name: string;
    email: string;
    age: number;
    createdAt: Date;
}

// In-memory database
let users: User[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      age: 28,
      createdAt: new Date('2023-01-15')
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      age: 32,
      createdAt: new Date('2023-02-20')
    }
];

// Create Express app

const app = express();
app.use(express.json());

// GET all users
app.get('/api/users', (req, res) => {
    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
});

// GET user by ID
app.get('/api/users/:id', [param('id').isString()],  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const user = users.find(u => u.id === req.params.id);
  
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: `User with id ${req.params.id} not found` 
      });
    }
  
    res.status(200).json({ success: true, data: user });
});
// POST create new user
app.post('/api/users', [
    body('name').isString().trim().notEmpty(),
    body('email').isEmail(),
    body('age').isInt({ min: 18, max: 120 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
  
    // Check if email already exists
    if (users.some(user => user.email === req.body.email)) {
      return res.status(400).json({
        success: false,
        message: 'Email already in use'
      });
    }
  
    const newUser: User = {
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      createdAt: new Date()
    };
  
    users.push(newUser);
  
    res.status(201).json({
      success: true,
      data: newUser
    });
});

// PUT update user
app.put('/api/users/:id', [
    param('id').isString(),
    body('name').optional().isString().trim().notEmpty(),
    body('email').optional().isEmail(),
    body('age').optional().isInt({ min: 18, max: 120 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
  
    let user = users.find(u => u.id === req.params.id);
  
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: `User with id ${req.params.id} not found` 
      });
    }
  
    // Check if trying to update to an email that's already in use
    if (req.body.email && req.body.email !== user.email) {
      if (users.some(u => u.email === req.body.email)) {
        return res.status(400).json({
          success: false,
          message: 'Email already in use'
        });
      }
    }
  
    // Update user
    user = {
      ...user,
      name: req.body.name || user.name,
      email: req.body.email || user.email,
      age: req.body.age || user.age
    };
  
    // Update in the "database"
    users = users.map(u => u.id === req.params.id ? user : u);
  
    res.status(200).json({
      success: true,
      data: user
    });
});

// DELETE user
app.delete('/api/users/:id', param('id').isString(), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
  
    const userIndex = users.findIndex(u => u.id === req.params.id);
  
    if (userIndex === -1) {
      return res.status(404).json({ 
        success: false, 
        message: `User with id ${req.params.id} not found` 
      });
    }
  
    users.splice(userIndex, 1);
  
    res.status(200).json({
      success: true,
      message: 'User deleted successfully'
    });
});

// Export the Express app for testing purposes
export { app, users };

// Start server if file is run directly
if (import.meta.main) {
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
}