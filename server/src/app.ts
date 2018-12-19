import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as dotenv from "dotenv";
import * as express from "express";
import * as expressValidator from "express-validator";
import { mongooseConnector as dbConnector } from "./config/mongooseConnector";
import { Routes } from "./config/routes";

dotenv.config();

class App {

    public app: express.Application;
    public routes: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routes.routes(this.app);
        dbConnector();
    }

    private config(): void {
        this.app.use(compression());
        this.app.use(expressValidator());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;
