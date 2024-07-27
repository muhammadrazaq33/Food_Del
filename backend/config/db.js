import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/Food_App").then(() => console.log("DB connected"));
}

