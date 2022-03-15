import {Schema, model} from "mongoose";


//const miBDSchema= mongoose.Schema

const miBDSchema = Schema({
    title: {
        type: String,
        //campo requeribe
        require: true,
        //limpie los campos
        trim: true,
        unique: true,
    },
    description: {
        type: String,
        //limpie los campos
        trim: true,
    },
    done:{
        type: Boolean,
        default: false,
    }
},
{
    timeStamps: true,
    versionKey: false
});


export default model("miDB",miBDSchema);

