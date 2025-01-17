import express from "express";
import booksRoutes from "./booksRoutes.js";
import authorsRoutes from "./authorsRoutes.js";

const routes = (app) => {
    app.use(express.json(), booksRoutes, authorsRoutes);
}

export default routes;