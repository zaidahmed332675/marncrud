import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({ title: String, year: Number });

export const Book = mongoose.model("Book", BookSchema);
