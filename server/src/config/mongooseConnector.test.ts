const mongoose = {
  connect: jest.fn(),
  connection: {
    readyState: 0,
    once: (type: any, callback: () => void) => callback(),
    on: (type: any, callback: () => void) => callback(),
  },
};

jest.mock("mongoose", () => mongoose);
import { mongooseConnector } from "./mongooseConnector";

describe("Mongoose Database connector", () => {
  it("successfully connects with mongoose.readyState equal to 0", () => {
    mongoose.connect.mockClear();

    mongooseConnector();
    expect(mongoose.connect.mock.calls.length).toEqual(1);
  });

  it("fails to connect with mongoose.readyState greater then 0", () => {
    mongoose.connect.mockClear();
    mongoose.connection.readyState = 1;

    mongooseConnector();

    expect(mongoose.connect.mock.calls.length).toEqual(0);
  });

});
