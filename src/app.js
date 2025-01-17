import express from "express";

const app = express();
const books = [{ id: 1, "title": "Book #1"}, {id: 2, "title": "Book #2"}];

app.get("/", (req, res) => {
    res.status(200).send("Test!");
})

app.get("/livros", (req, res) => {
    res.status(200).json(books);
})

export default app