//definimos conmo nos movemos y que parametros pasamos
import miDB from "../models/miDB";

export const rendermiDB = async(req, res) => {
    try{
        //aqui vamos a buscar las tareas
        const tasks = await miDB.find().lean();
        //renderizar la vista
        res.render("index",{
            tasks,
        }),
    }
    catch(error){
        console.log({error});
        return res.render("error",{errorMessenge: error.messege});
    }
};