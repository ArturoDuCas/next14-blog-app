import mongoose from "mongoose";

const connection = {};

export const connectToDatabase = async () => {
  try {
    if (connection.isConnected) {
      console.log("=> using existing database connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error(error);
    throw new Error("Error connecting to database");
  }
}