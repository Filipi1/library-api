import express from "express";
import db from "./config/dbConnect.js";
import book from "./models/Book.js";
import {ObjectId} from "mongodb";

db.on("error", (err) => {
    console.log(err);
})
db.once("open", () => {
    console.log("Connected!")
})

const app = express();
app.use(express.json());

app.get("/livros", async (req, res) => {
    const books = await book.find();
    res.status(200).json(books);
})

app.get("/livros/:id", async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(404).send("Book not found");
        return
    }

    const bookEntity = await book.findById(req.params.id);
    if (bookEntity == null) {
        res.status(404).send("Book not found");
        return
    }
    res.status(201).json(bookEntity);
})

app.post("/livros", async (req, res) => {
    await book.create({
        title: req.body.title
    })
    const books = await book.find();
    res.status(201).json(books);
})

app.put("/livros/:id", async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(404).send("Book not found");
        return
    }
    await book.updateOne({ _id: req.params.id }, req.body)
    const bookEntity = await book.findById(req.params.id);
    if (bookEntity == null) {
        res.status(404).send("Book not found");
        return
    }
    res.status(200).json(bookEntity);
})

app.delete("/livros/:id", async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(404).send("Book not found");
        return
    }
    await book.deleteOne({ _id: req.params.id })
    res.status(200).json({ message: "Book deleted" });
})


export default app