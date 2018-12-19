import { Request, Response } from "express";
import * as mongoose from "mongoose";
import { ContractSchema } from "../models/contractModel";
import logger from "../utils/logger";

const Contract = mongoose.model("Contract", ContractSchema);

export class ContractController {

    public async getContracts(request: Request, response: Response) {
        try {
            const contracts = await Contract.find();
            response.json(contracts);

        } catch (error) {
            logger.error(error);
            response.status(500).send("Unable to get contracts.");
        }
    }

    public async createContract(request: Request, response: Response) {
        try {
            const newContract = await Contract.create(request.body);
            response.json(newContract);

        } catch (error) {
            logger.error(error);
            response.status(400).send("Unable to add contract.");
        }
    }

    public async getContractByAddress(request: Request, response: Response) {
        try {
            const contract = await Contract.find({ address: request.params.address });
            response.json(contract);

        } catch (error) {
            logger.error(error);
            response.status(400).send("Unable to get contract.");
        }
    }

    public async updateContract(request: Request, response: Response) {
        try {
            const contract = await Contract.findOneAndUpdate({ address: request.params.address }, request.body);
            response.json(contract);

        } catch (error) {
            logger.error(error);
            response.status(400).send("Unable to update contract.");
        }
    }

    public async deleteContract(request: Request, response: Response) {
        try {
            await Contract.remove({ address: request.params.address });
            response.json({ message: "Successfully deleted contract." });

        } catch (error) {
            logger.error(error);
            response.status(400).send("Unable to delete contract.");
        }
    }
}
