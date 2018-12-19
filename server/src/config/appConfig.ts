import * as dotenv from "dotenv";

dotenv.config();

const appConfig = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 5000,

    DB_HOST: process.env.DB_HOST || "localhost",
    DB_PORT: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 27017,
    DB_NAME: process.env.DB_NAME || "db",

    LOG_DIR: process.env.LOG_DIR || "logs",
    LOG_LEVEL: process.env.LOG_LEVEL === "production" ? "error" : "debug",
};

export default appConfig;
