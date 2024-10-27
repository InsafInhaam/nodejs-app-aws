import { MongoClient } from "mongodb";

import dotenv from 'dotenv';
dotenv.config();

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://insafinhaam:${password}@cluster0.kazzf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; // clustore url

const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch(e) {
  console.error(e);
}
let db = conn.db("integration_ninjas");
export default db;