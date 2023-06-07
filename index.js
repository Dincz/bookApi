/* eslint-disable no-console */
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const connectDb = require("./Database/Connection");

const app = express();
require("dotenv").config();

const port = process.env.PORT || 2000;
app.use(express.json());

app.use(express.json());

// Routes -> Controller
app.use("/book", require("./routes/bookroutes"));

const start = async () => {
    try {
        await connectDb();
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
    }
};

start();

// DOCUMENTATION

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Book API",
            version: "1.0.0",
            description: "API with CRUD operations on Books",
        },
        servers: [
            {
                url: "http://localhost:5000",
            },
        ],
    },
    apis: ["Documentation.js"],
};

const swaggerDocs = swaggerJSDoc(options);

app.use("/Documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
