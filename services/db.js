

// const mysql = require("mysql2/promise");  // Use mysql2/promise for promise-based queries

// // Create a pool (recommended for multiple queries and better performance)
// const db = mysql.createPool({
//     host: 'localhost',       // MySQL server host
//     user: 'root',            // MySQL username
//     password: 'Hana@0320',            // MySQL password
//     database: 'joblens_db'  // Your database name
// });

// // Test the connection (optional but useful for debugging)
// db.getConnection()
//     .then(() => console.log("✅ Connected to Local MySQL Database"))
//     .catch((err) => console.error("❌ MySQL connection error:", err));

// module.exports = db;

const mysql = require('mysql2/promise'); // Use mysql2/promise for promise-based queries
require('dotenv').config(); // To load the .env file
console.log("uri", process.env.DB_URL);

// Create the connection pool using the DB URL from the .env file
const db = mysql.createPool({
    uri: process.env.DB_URL, // Connection string from PlanetScale
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Test the connection (optional, but useful for debugging)
async function testConnection() {
    try {
        const connection = await db.getConnection();
        console.log("✅ Connected to PlanetScale Database");
        connection.release();  // Release the connection back to the pool
    } catch (err) {
        console.error("❌ PlanetScale connection error:", err);
    }
}

testConnection();

module.exports = db; // Export the DB connection to use in other parts of your application
