import book from '../models/Book.js'
import {ObjectId} from "bson";

class BookController {
    static async getBooks(req, res) {
        const books = await book.find().populate("author");
        res.status(200).json(books);
    }

    static async getBookById(req, res) {
        if (!ObjectId.isValid(req.params.id)) {
            res.status(404).send("Book not found");
            return
        }

        const bookEntity = await book.findById(req.params.id).populate("author");
        if (bookEntity == null) {
            res.status(404).send("Book not found");
            return
        }
        res.status(201).json(bookEntity);
    }

    static async createBook(req, res) {
        await book.create({
            title: req.body.title,
            author: req.body.author,
        })
        const books = await book.find().populate("author");
        res.status(201).json(books);
    }

    static async updateBook(req, res) {
        if (!ObjectId.isValid(req.params.id)) {
            res.status(404).send("Book not found");
            return
        }
        const bookEntity = await book.findOneAndUpdate({ _id: req.params.id }, req.body).populate("author");
        if (bookEntity == null) {
            res.status(404).send("Book not found");
            return
        }
        res.status(200).json(bookEntity);
    }

    static async deleteBook(req, res) {
        if (!ObjectId.isValid(req.params.id)) {
            res.status(404).send("Book not found");
            return
        }
        await book.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json({ message: "Book deleted" });
    }
}

export default BookController