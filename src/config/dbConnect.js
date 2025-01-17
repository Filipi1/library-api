import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/library";
mongoose.connect(uri)
let db = mongoose.connection;
export default db
