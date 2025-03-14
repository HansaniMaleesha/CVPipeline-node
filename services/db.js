// const mysql = require('mysql2/promise'); // Use mysql2/promise for promise-based queries
// require('dotenv').config(); // To load the .env file
// console.log("uri", process.env.DB_URL);

// // Create the connection pool using the DB URL from the .env file
// const db = mysql.createPool({
//     uri: process.env.DB_URL, // Connection string from PlanetScale
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
// });

// // Test the connection (optional, but useful for debugging)
// async function testConnection() {
//     try {
//         const connection = await db.getConnection();
//         console.log("✅ Connected to PlanetScale Database");
//         connection.release();  // Release the connection back to the pool
//     } catch (err) {
//         console.error("❌ PlanetScale connection error:", err);
//     }
// }

// testConnection();

// module.exports = db; // Export the DB connection to use in other parts of your application
