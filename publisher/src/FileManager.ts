import * as fs from "fs";

export interface IFileManager {
    GetJsonFiles(path: string): any[]; // TODO: Typed
}

export class FileManager implements IFileManager {

    public GetJsonFiles(path: string = "./build/contracts/"): any[] {
        const exists = fs.existsSync(path);
        if (!exists) {
            throw new Error("Path doesn't exist.");
        }

        const files = Array<any>();
        const stat = fs.lstatSync(path);

        // Get files from directory
        if (stat.isDirectory()) {
            fs.readdirSync(path).forEach((file: string) => {
                const filePath = path.endsWith("/") ? path + file : path + "/" + file;

                if (filePath.endsWith(".json")) {
                    const contract = this.getFile(filePath);
                    files.push(contract);
                }
            });

            return files;
        }

        // Get single file
        if (path.endsWith(".json")) {
            const contract = this.getFile(path);
            files.push(contract);
        }

        return files;
    }

    private getFile(filePath: string) {

        const buffer = fs.readFileSync(filePath, "utf8");
        const contract = JSON.parse(buffer);
        return contract;
    }
}
