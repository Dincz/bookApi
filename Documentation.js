/**
 * @swagger
 * /book:
 *   get:
 *     summary: Get Books
 *     description: Use this endpoint to Get all the books
 *     tags:
 *       - CRUD
 *     responses:
 *       200:
 *         description: OK
 *       422:
 *         description: Validation error
 */

/**
 * @swagger
 * /book/{id}:
 *   get:
 *     summary: Get a Book
 *     tags:
 *       - CRUD
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the book to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       422:
 *         description: Validation error
 */

/**
/**
 * @swagger
 * /book:
 *   post:
 *     summary: Create New Book
 *     tags:
 *       - CRUD
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               imgLink:
 *                 type: string
 *               summary:
 *                 type: string
 *     responses:
 *       201:
 *         description: created
 *       422:
 *         description: Validation error
 */
/**
 * @swagger
 * /book/{id}:
 *   patch:
 *     summary: Update a Book information
 *     tags:
 *       - CRUD
  *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the book to delete
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               imgLink:
 *                 type: string
 *               summary:
 *                 type: string
 *     responses:
 *       201:
 *         description: Book Updated
 *       422:
 *         description: Validation error
 */
/**
 * @swagger
 * /book/{id}:
 *   delete:
 *     summary: Delete Book
 *     tags:
 *       - CRUD
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the book to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Book deleted
 *       422:
 *         description: Validation error
 */
