import { Request, Response } from "express";
import * as mongoose from "mongoose";
import { ContractSchema } from "../models/contractModel";
import { ITruffleContract } from "../models/ITruffleContract";
import logger from "../utils/logger";

const Contract = mongoose.model("Contract", ContractSchema);

export class ContractController {

    private static async publishContractAtNetwork(contract: any, address: string, networkId: number): Promise<void> {

        contract.address = address;
        contract.network = networkId;

        const exists = await Contract.find({ address, network: networkId });
        if (exists && exists.length > 0) {
            await Contract.findOneAndUpdate({ address, network: networkId }, contract);
        } else {
            await Contract.create(contract);
        }
    }

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

    public async publishTruffleContract(request: Request, response: Response) {
        try {
            const contract = request.body as ITruffleContract;
            if (contract.networks["1"]) {
                ContractController.publishContractAtNetwork(contract, contract.networks["1"].address, 1);
            }
            if (contract.networks["3"]) {
                ContractController.publishContractAtNetwork(contract, contract.networks["3"].address, 3);
            }
            if (contract.networks["4"]) {
                ContractController.publishContractAtNetwork(contract, contract.networks["4"].address, 4);
            }

            response.json("Ok");

        } catch (error) {
            logger.error(error);
            response.status(400).send("Unable to add contract.");
        }
    }
}
