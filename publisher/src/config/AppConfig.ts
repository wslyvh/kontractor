import * as dotenv from "dotenv";

dotenv.config();

const AppConfig = {
    NODE_ENV: process.env.NODE_ENV,

    BACKEND_URI: process.env.BACKEND_URI || "http://localhost:5000/"
};

export default AppConfig;
