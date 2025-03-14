// const { Sequelize, DataTypes } = require("sequelize");

// const sequelize = new Sequelize("joblens_db", "root", "Hana@0320", {
//     host: "localhost",
//     dialect: "mysql",
//     logging: false,
// });

// const JobApplication = sequelize.define("JobApplication", {
//     name: { type: DataTypes.STRING, allowNull: false },
//     email: { type: DataTypes.STRING, allowNull: false },
//     phone: { type: DataTypes.STRING, allowNull: false },
//     cv_url: { type: DataTypes.STRING, allowNull: false },

// });

// sequelize.sync();
// module.exports = JobApplication;
// const { Sequelize, DataTypes } = require("sequelize");
// require("dotenv").config();

// // Log the database URL for debugging purposes
// console.log(process.env.DB_URL);

// // Create Sequelize instance without SSL configuration
// const sequelize = new Sequelize(process.env.DB_URL, {
//     dialect: "mysql",
//     logging: false, // Disable logging of SQL queries (optional)
//     dialectOptions: {
//         // No SSL configuration here
//     },
// });

// // Define the JobApplication model
// const JobApplication = sequelize.define("JobApplication", {
//     name: { type: DataTypes.STRING, allowNull: false },
//     email: { type: DataTypes.STRING, allowNull: false },
//     phone: { type: DataTypes.STRING, allowNull: false },
//     cv_url: { type: DataTypes.STRING, allowNull: false },
// });

// // No need to call sequelize.sync() anymore, since the table is created manually

// // Export the JobApplication model
// module.exports = JobApplication;
