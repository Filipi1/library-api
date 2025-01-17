import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true }
})
const book = mongoose.model("Books", bookSchema);

export default book