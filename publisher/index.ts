#!/usr/bin/env node

import { FileManager } from "./src/FileManager";
import { Publisher } from "./src/Publisher";

const publisher = new Publisher(new FileManager());
publisher.Publish();

console.log("All done..");
