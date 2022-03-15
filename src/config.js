import {config} from "dotendv";

config();
//madar al archivo de mongoose
export const MONGODB_URI= process.env.MONGODB_URI || "mongodb+srv://noeli:Grandeyfuerte1@cluster0.rmdhn.mongodb.net/miBD?retryWrites=true&w=majority";