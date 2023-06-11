/* eslint-disable no-console */
const mongoose = require("mongoose");
const { logger } = require("express-winston");

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(
            process.env.CONNECTION_STRING,
            { useUnifiedTopology: true },
        );
        console.log(
            "Database connected: ",
            connect.connection.host,
            connect.connection.name,
        );
    } catch (error) {
        logger.info("connection failed ");
        console.log(error);
        process.exit(1);
    }
};
module.exports = connectDb;
