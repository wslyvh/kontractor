import * as request from "supertest";
import app from "./app";

describe("Express Application", () => {
    it("should return 200 on default GET", (done) => {
        request(app).get("/").expect(200, done);
    });

    it("should return 404 on invalid route", (done) => {
        request(app).get("/invalid").expect(404, done);
    });
});
