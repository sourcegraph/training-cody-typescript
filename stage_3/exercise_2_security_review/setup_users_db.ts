import { Database } from 'bun:sqlite';

function setupDatabase(): void {
    // Connect to SQLite database (it will create it if it doesn't exist)
    const db = new Database('users.db');
    
    // Create table 'users' if it does not exist
    db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        name TEXT,
        email TEXT
    )
    `);

    // Insert example users
    const exampleUsers = [
        ['0', 'Moshin', 'moshin@example.com'],
        ['1', 'Lee', 'lee@example.com'],
        ['2', 'Bob', 'bob@example.com'],
        ['3', 'Charlie', 'charlie@example.com']
    ];

    // Delete existing records to ensure fresh insert
    db.exec('DELETE FROM users');
    
    // Insert example records
    const stmt = db.prepare('INSERT INTO users (id, name, email) VALUES (?, ?, ?)');
    for (const user of exampleUsers) {
        stmt.run(user[0], user[1], user[2]);
    }
    
    // Close the connection when done
    db.close();
}

// Run the setup function
setupDatabase();
console.log("Database setup complete with example users.");
