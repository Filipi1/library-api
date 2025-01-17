import author from '../models/Author.js'
import {ObjectId} from "bson";

class AuthorController {
    static async getAuthors(req, res) {
        const authors = await author.find();
        res.status(200).json(authors);
    }

    static async getAuthorById(req, res) {
        if (!ObjectId.isValid(req.params.id)) {
            res.status(404).send("Author not found");
            return
        }

        const authorEntity = await author.findById(req.params.id);
        if (authorEntity == null) {
            res.status(404).send("Author not found");
            return
        }
        res.status(201).json(authorEntity);
    }

    static async createAuthor(req, res) {
        await author.create({
            name: req.body.name
        })
        const authors = await author.find();
        res.status(201).json(authors);
    }

    static async updateAuthor(req, res) {
        if (!ObjectId.isValid(req.params.id)) {
            res.status(404).send("Author not found");
            return
        }
        const authorEntity = await author.findOneAndUpdate({ _id: req.params.id }, req.body)
        if (authorEntity == null) {
            res.status(404).send("Author not found");
            return
        }
        res.status(200).json(authorEntity);
    }

    static async deleteAuthor(req, res) {
        if (!ObjectId.isValid(req.params.id)) {
            res.status(404).send("Author not found");
            return
        }
        await author.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json({ message: "Author deleted" });
    }
}

export default AuthorController