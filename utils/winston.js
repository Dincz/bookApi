/* eslint-disable import/no-extraneous-dependencies */
const { createLogger, format, transports } = require("winston");
require("dotenv").config();
require("winston-mongodb");

// const myFormat = format.printf(({ level, meta, timestamp }) => `${timestamp} ${level}: ${meta.message}`);

const logger = createLogger({
    transports: [
        new transports.File({
            level: "error",
            filename: "logErrors.log",
        }),
        new transports.File({
            level: "warn",
            filename: "logWarning.log",
        }),
        new transports.MongoDB({
            db: process.env.CONNECTION_STRING,
            options: { useUnifiedTopology: true },
            collection: "Errorlogs",
        }),
    ],
    format: format.combine(
        format.json(),
        format.timestamp(),
        format.metadata(),
        format.prettyPrint(),
        // myFormat,
    ),

});

module.exports = logger;
