import { Database } from 'bun:sqlite';

/**
 * Fetches user data from the database by user_id.
 *
 * @param userId - The ID of the user
 * @returns User data in a simple format
 */
function getUserData(userId: string): string {
    const db = new Database('users.db');
    
    // Vulnerability: SQL Injection
    const query = `SELECT * FROM users WHERE id='${userId}'`;
    const result = db.prepare(query).get();
    
    db.close();

    // Vulnerability: Insecure data handling
    if (result) {
        // Format the result in a more readable way
        let formattedOutput = "User Data:\n";
        formattedOutput += "------------------------\n";
        
        // Iterate through each property of the result object
        for (const [key, value] of Object.entries(result)) {
            formattedOutput += `${key.padEnd(15)}: ${value}\n`;
        }
        
        return formattedOutput;
    } else {
        return "No user found.";
    }
}

async function main(): Promise<void> {
    // Using Bun's prompt function for simplicity
    const userId = prompt("Enter user ID: ");
    
    // Vulnerability: Unvalidated user input
    console.log(getUserData(userId || ""));
}

// Run the main function
main();
