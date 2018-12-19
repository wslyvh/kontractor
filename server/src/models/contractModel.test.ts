import * as mongoose from "mongoose";
import { ContractSchema } from "./contractModel";

const Contract = mongoose.model("Contract", ContractSchema);
const contractModelStub: any = {
    address: "0x123abc",
    contractName: "Test Contract",
};

describe("Contract Model", () => {
    const contractModel = new Contract(contractModelStub);

    it("should initialize a new Contract Model", () => {
        expect(contractModel).toBeDefined();
    });
});
