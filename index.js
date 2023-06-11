/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const { transports, format } = require("winston");
const expressWinston = require("express-winston");
const logger = require("./utils/winston");
require("dotenv").config();
require("winston-mongodb");

const connectDb = require("./Database/Connection");

const app = express();
require("dotenv").config();

const port = process.env.PORT || 2000;
app.use(express.json());

app.use(expressWinston.logger({
    winstonInstance: logger,
    statusLevels: true,
}));
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

const myFormat = format.printf(({ level, meta, timestamp }) => `${timestamp} ${level}: ${meta.message}`);

app.use(expressWinston.errorLogger({
    transports: [
        new transports.File({
            filename: "logsInternalErrors.log",
        }),
    ],
    format: format.combine(
        format.json(),
        format.timestamp(),
        myFormat,

    ),
}));
