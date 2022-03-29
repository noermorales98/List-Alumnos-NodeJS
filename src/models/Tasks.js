import {Schema, model} from "mongoose";

const TaskSchema = Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        matricula: {
            type: String,
            trim: true,
        },
        done: {
            type: Boolean,
            default: false,
        },
        calificacion: {
            type: Number
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model("Task", TaskSchema);