import axios, { AxiosInstance } from "axios";
import AppConfig from "./config/AppConfig";
import { IFileManager } from "./FileManager";

export class Publisher {
    private fileManager: IFileManager;
    private client: AxiosInstance; // TODO: INJECT Wrapper/Proxy

    constructor(fileManager: IFileManager) {
        this.fileManager = fileManager;
        this.client = axios.create({
            baseURL: AppConfig.BACKEND_URI,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        });
    }

    public Publish(path: string = "./build/contracts/") {
        const files = this.fileManager.GetJsonFiles(path);
        files.forEach(async (file) => {
            await this.client.post("contracts/truffle", file);
        });
    }
}
