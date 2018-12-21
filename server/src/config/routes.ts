import { Request, Response } from "express";
import { ContractController } from "../controllers/contractController";

export class Routes {

    public contractController: ContractController = new ContractController();

    public routes(app: any): void {

        app.route("/")
            .get((req: Request, res: Response) => {
                res.status(200).send("Service running..");
            });

        // Contracts
        app.route("/contracts")
            .get(this.contractController.getContracts)
            .post(this.contractController.createContract);

        // Contract detail
        app.route("/contracts/:address")
            .get(this.contractController.getContractByAddress)
            .put(this.contractController.updateContract)
            .delete(this.contractController.deleteContract);

        app.route("/contracts/truffle")
            .post(this.contractController.publishTruffleContract);
    }
}
