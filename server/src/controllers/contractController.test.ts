import * as request from "supertest";
import app from "../app";

const sampleContract = {
    address: "0x123abc",
    contractName: "TEST Contract",
    source: "pragma Solidity",
    abi: "{ ABI }",
    compiler: "solc",
};

describe("Contract controller", () => {
    it("should return 200 OK GET /contracts", (done) => {
        request(app).get("/contracts").expect(200, done);
    });

    it("should return 200 OK GET /contracts/id", (done) => {
        request(app).get("/contracts/" + sampleContract.address).expect(200, done);
    });

    it("should return 200 OK POST /contracts", (done) => {
        request(app).post("/contracts").send(sampleContract).expect(200, done);
    });

    it("should return 400 Bad Request POST /contracts with invalid contract", (done) => {
        request(app).post("/contracts").send({address: "", name: "invalid", abi: 123}).expect(400, done);
    });

    it("should return 200 OK PUT /contracts/id", (done) => {
        request(app).put("/contracts/" + sampleContract.address).send(sampleContract).expect(200, done);
    });

    it("should return 404 Not Found DELETE /contracts/123", (done) => {
        request(app).post("/contracts/123").send(sampleContract).expect(404, done);
    });
});
