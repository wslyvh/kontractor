import * as mongoose from "mongoose";
import logger from "../utils/logger";
import appConfig from "./appConfig";

export const mongooseConnector = (): void => {
  if (mongoose.connection.readyState > 0) { return; }

  const connectionString = `mongodb://${appConfig.DB_HOST}:${appConfig.DB_PORT}/${appConfig.DB_NAME}`;

  mongoose.connection.once("open", () => {
    logger.info("Connection to mongodb is opened.");
  });

  mongoose.connection.on("connected", () => {
    logger.info("mongodb is connected.");
  });

  mongoose.connection.on("error", (msg) => {
    logger.error("mongodb error: ", msg);
  });

  mongoose.connection.on("disconnected", () => {
    setTimeout(() => {
      mongoose.connect(connectionString, { useNewUrlParser: true });
    }, 10000);
    logger.info("mongodb is disconnected.");
  });

  mongoose.connection.on("reconnected", () => {
    logger.info("mongodb is reconnected.");
  });

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      logger.info("mongodb is disconnected through app termination.");
      process.exit(0);
    });
  });

  mongoose.connect(connectionString, { useNewUrlParser: true });
};
