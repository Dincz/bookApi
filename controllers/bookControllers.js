/* eslint-disable new-cap */
/* eslint-disable consistent-return */
const asyncHandler = require("express-async-handler");
const { logger } = require("express-winston");

const { constants } = require("../constants");
const Book = require("../models/Book");

// desc: Get all Books
// route GET /book
const getBooks = asyncHandler(async (req, res) => {
    try {
        const books = await Book.find();
        res.status(constants.OK).json(books);
    } catch (error) {
        logger.info("Not found");
        res.status(constants.NOT_FOUND);
    }
});

// desc: Create New Book
// route POST / book
const createBook = asyncHandler(async (req, res) => {
    try {
        const { name, imgLink, summary } = req.body;
        const book = await Book.create({
            name,
            imgLink,
            summary,
        });
        res.status(constants.Created).json(book);
    } catch (error) {
        logger.info("Validation Error");
        res.status(constants.VALIDATION_ERROR).json({ error: "Validation error" });
    }
});

// desc: Get a specific Book
// route GET / Book/id:
const getBook = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            logger.info("Book not found");
            return res.status(constants.NOT_FOUND).json({ error: "Books not found" });
        }
        res.json(book);
    } catch (error) {
        if (error.name === "CastError") {
            logger.info("Cast Error");
            res.status(constants.VALIDATION_ERROR).json({ error: "Wrong ID" });
        } else {
            logger.info("Internal server error");
            res.status(constants.SERVER_ERROR).json({ error: error.name });
        }
    }
});

// desc: Update Book
// route PATCH / book/:id
const updateBook = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndUpdate(id);
        if (!book) {
            logger.info("Book not found");
            return res.status(constants.NOT_FOUND).json({ error: "Books not found" });
        }
        res.status(constants.OK).json(book);
    } catch (error) {
        if (error.name === "CastError") {
            logger.info("Cast Error");
            res.status(constants.VALIDATION_ERROR).json({ error: "Wrong ID" });
        } else {
            logger.info("Internal server error");
            res.status(constants.SERVER_ERROR).json({ error: error.name });
        }
    }
});

// desc: Delete New Book
// route DELETE / book/:id
const deleteBook = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            logger.info("Book not found");
            return res.status(constants.NOT_FOUND).json({ error: "Books not found" });
        }
        res.sendStatus(constants.OK);
    } catch (error) {
        if (error.name === "CastError") {
            logger.info("Cast Error");
            res.status(constants.VALIDATION_ERROR).json({ error: "Wrong ID" });
        } else {
            logger.info("Internal server error");
            res.status(constants.SERVER_ERROR).json({ error: error.name });
        }
    }
});

module.exports = {
    getBooks,
    createBook,
    getBook,
    updateBook,
    deleteBook,
};
