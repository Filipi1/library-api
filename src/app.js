import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", (err) => {
    console.log(err);
})
db.once("open", () => {
    console.log("Connected!")
})

const app = express();
app.use(express.json());
routes(app)

export default app