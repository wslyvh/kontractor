import axios, { AxiosInstance } from "axios";
import { IFileManager } from "./FileManager";

export class Publisher {
    private fileManager: IFileManager;
    private client: AxiosInstance; // INJECT Wrapper/Proxy

    constructor(fileManager: IFileManager) {
        this.fileManager = fileManager;
        this.client = axios.create({
            baseURL: "http://localhost:5000/", // TODO: CONFIG
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        });
    }

    public Publish(path: string = "./build/contracts/") {
        const files = this.fileManager.GetJsonFiles(path);
        files.forEach(async (file) => {
            await this.client.post("contracts", file);
            // const response = await this.client.post("contracts", { file }); // handle response?
        });
    }
}
