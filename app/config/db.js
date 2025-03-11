



import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,

  
});
 //console.log("env",process.env.DB_USER, process.env.DB_PASSWORD);

const connectToDatabase = async () => {
  let connection;
  try {
    connection = await pool.getConnection();
    console.log("Connection established");
    return connection;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  } finally {
    if (connection) {
      connection.release(); 
    }
  }
};

export default connectToDatabase;
