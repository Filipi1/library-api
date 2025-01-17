import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: { type: String, required: true }
}, {
    versionKey: false
})

const author = mongoose.model("Author", authorSchema)

export default author;