import express from "express";

const app = express();
app.use(express.json());

const books = [{ id: 1, "title": "Book #1"}, {id: 2, "title": "Book #2"}];

app.get("/", (req, res) => {
    res.status(200).send("Test!");
})

app.get("/livros", (req, res) => {
    res.status(200).json(books);
})

app.get("/livros/:id", (req, res) => {
    const bookIndex = books.findIndex(book => book.id === parseInt(req.params.id));
    if (bookIndex < 0) {
        res.status(404).send("Book not found");
        return
    }
    res.status(201).json(books[bookIndex]);
})

app.post("/livros", (req, res) => {
    books.push(req.body);
    res.status(201).json(books);
})

app.put("/livros/:id", (req, res) => {
    const bookIndex = books.findIndex(book => book.id === parseInt(req.params.id));
    if (bookIndex < 0) {
        res.status(404).send("Book not found");
        return
    }

    books[bookIndex].title = req.body.title;
    res.status(201).json(books);
})

app.delete("/livros/:id", (req, res) => {
    const bookIndex = books.findIndex(book => book.id === parseInt(req.params.id));
    if (bookIndex < 0) {
        res.status(404).send("Book not found");
        return
    }
    books.splice(bookIndex, 1);
    res.status(201).json(books);
})


export default app