import express from "express";
import bookController from "../controllers/bookController.js";

const router = express.Router();

router.get("/livros", bookController.getBooks)
router.get("/livros/:id", bookController.getBookById)
router.post("/livros", bookController.createBook)
router.put("/livros/:id", bookController.updateBook)
router.delete("/livros/:id", bookController.deleteBook)

export default router;