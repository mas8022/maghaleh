import mongoose from "mongoose";

function connectToDb() {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    } else {
      mongoose.connect(process.env.DATABASE_URL);
    }
  } catch (error) {
    return Response.json({ message: "don`t connect to db" });
  }
}

export default connectToDb;
