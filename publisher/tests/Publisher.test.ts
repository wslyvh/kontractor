import { FileManager } from "../src/FileManager";
import { Publisher } from "../src/Publisher";

describe("Publisher class", () => {
    it("should initialize a new instance", () => {
        const publisher = new Publisher(new FileManager());

        expect(publisher).toBeDefined();
        expect(publisher).toBeInstanceOf(Publisher);
    });
});

describe("Publish files", () => {

    it("should initialize a new instance", () => {
        const publisher = new Publisher(new FileManager());

        expect(publisher).toBeDefined();
        expect(publisher).toBeInstanceOf(Publisher);
    });

    it("should publish contract files", () => {
        const publisher = new Publisher(new FileManager());

        expect(publisher).toBeDefined();
        expect(publisher).toBeInstanceOf(Publisher);

        publisher.Publish();
    });

    it("should not publish anything, from a folder without json files", () => {
        const publisher = new Publisher(new FileManager());

        expect(publisher).toBeDefined();
        expect(publisher).toBeInstanceOf(Publisher);

        publisher.Publish("./tests/");
    });

    it("should not publish anything, from an invalid folder", () => {
        const publisher = new Publisher(new FileManager());

        expect(publisher).toBeDefined();
        expect(publisher).toBeInstanceOf(Publisher);

        expect(() => publisher.Publish("./invalid/folder"))
            .toThrowError("Path doesn't exist.");
    });
});
