import { FileManager } from "../src/FileManager";

const filesInDefaultDirectory = 1;

describe("FileManager", () => {
    it("should initialize a new instance", () => {
        const fileManager = new FileManager();

        expect(fileManager).toBeDefined();
        expect(fileManager).toBeInstanceOf(FileManager);
    });
});

describe("Directories", () => {
    it("should get all files in default directory", () => {
        const fileManager = new FileManager();

        expect(fileManager).toBeDefined();
        expect(fileManager).toBeInstanceOf(FileManager);

        const files = fileManager.GetJsonFiles();

        expect(files).toBeDefined();
        expect(files.length).toEqual(filesInDefaultDirectory);
    });

    it("should get all files, from directory path, with trailing slash", () => {
        const fileManager = new FileManager();

        expect(fileManager).toBeDefined();
        expect(fileManager).toBeInstanceOf(FileManager);

        const files = fileManager.GetJsonFiles("./build/contracts/");

        expect(files.length).toEqual(filesInDefaultDirectory);
    });

    it("should get all files, from directory path, without trailing slash", () => {
        const fileManager = new FileManager();

        expect(fileManager).toBeDefined();
        expect(fileManager).toBeInstanceOf(FileManager);

        const files = fileManager.GetJsonFiles("./build/contracts");

        expect(files.length).toEqual(filesInDefaultDirectory);
    });

    it("should throw if path doesn't exist", () => {
        const fileManager = new FileManager();

        expect(fileManager).toBeDefined();
        expect(fileManager).toBeInstanceOf(FileManager);

        expect(() => fileManager.GetJsonFiles("./invalid/path"))
            .toThrowError("Path doesn't exist.");
    });
});

describe("Files", () => {
    it("should get a single file", () => {
        const fileManager = new FileManager();

        expect(fileManager).toBeDefined();
        expect(fileManager).toBeInstanceOf(FileManager);

        const files = fileManager.GetJsonFiles("./build/contracts/MetaCoin.json");

        expect(files).toBeDefined();
        expect(files.length).toEqual(1);
    });

    it("should ignore non-json files", () => {
        const fileManager = new FileManager();

        expect(fileManager).toBeDefined();
        expect(fileManager).toBeInstanceOf(FileManager);

        const files = fileManager.GetJsonFiles("./build/contracts/InvalidFile.contract");

        expect(files).toBeDefined();
        expect(files.length).toEqual(0);
    });

    it("should throw if file doesn't exist", () => {
        const fileManager = new FileManager();

        expect(fileManager).toBeDefined();
        expect(fileManager).toBeInstanceOf(FileManager);

        expect(() => fileManager.GetJsonFiles("./invalid/file.json"))
            .toThrowError("Path doesn't exist.");
    });
});
