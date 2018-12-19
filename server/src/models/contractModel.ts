import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

// TODO: Truffle-contract schema

export const ContractSchema = new Schema({
    contractName: {
        type: String,
        required: "Enter a contract name",
    },
    abi: {
        type: String,
    },
    bytecode : {
        type: String,
    },
    deployedBytecode : {
        type: String,
    },
    sourceMap : {
        type: String,
    },
    deployedSourceMap : {
        type: String,
    },
    source: {
        type: String,
    },
    updatedAt: {
        type: String,
    },
    created_date: {
        type: Date,
        default: Date.now,
    },
});
