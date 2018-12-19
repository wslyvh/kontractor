import fs = require("fs");
import * as winston from "winston";
import appConfig from "../config/appConfig";

// Create the log directory if it does not exist
if (!fs.existsSync(appConfig.LOG_DIR)) {
    fs.mkdirSync(appConfig.LOG_DIR);
}

const level = appConfig.LOG_LEVEL;
const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
    ),
    transports: [
        new (winston.transports.Console)({ level }),
        new (winston.transports.File)({
            filename: "./logs/errors.log",
            level: "error",
            handleExceptions: true,
            maxsize: 2000000,
            maxFiles: 10,
        }),
    ],
});

logger.debug(`Logging initialized at '${level}' level`);

export default logger;
