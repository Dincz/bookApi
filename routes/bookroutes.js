const express = require("express");

const router = express.Router();
const {
    getBooks,
    createBook,
    getBook,
    deleteBook,
    updateBook,
} = require("../controllers/bookControllers");

router.route("/").get(getBooks).post(createBook);
router.route("/:id").get(getBook).patch(updateBook).delete(deleteBook);

module.exports = router;
