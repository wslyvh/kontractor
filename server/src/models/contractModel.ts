import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

// TODO: Truffle-contract schema

export const ContractSchema = new Schema({
    contractName: {
        type: String,
        required: "Enter a contract name",
    },
    address : {
        type: String,
    },
    network : {
        type: Number,
    },
    abi: {
        type: [],
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
    compiler: {
        name: String,
        version: String,
    },
    networks: { },
    schemaVersion: {
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
