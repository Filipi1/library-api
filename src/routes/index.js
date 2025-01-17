import express from "express";
import booksRoutes from "./booksRoutes.js";

const routes = (app) => {
    app.use(express.json(), booksRoutes);
}

export default routes;