import mysql from 'mysql'
import dotenv from "dotenv"

dotenv.config()

const DB = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
});

DB.connect((err) => {
  if (!err) {
    console.log("db " + DB.state)
  } else {
    console.log("Failed to connect... " + err.message)
  }
});

export default DB