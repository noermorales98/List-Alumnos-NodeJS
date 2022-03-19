import {config} from "dotenv"

config();
//madar al archivo de mongoose 
export const MONGODB_URI= process.env.MONGODB_URI || "mongodb+srv://root:root@miprimerbd.rmdhn.mongodb.net/Task?retryWrites=true&w=majority";