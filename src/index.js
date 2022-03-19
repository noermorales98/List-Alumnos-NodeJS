import app from "./app"
import "./utils/mongoose"


//01 parte

//AQUI NUESTRO SERVER QUE IMPORTA A APP

//poner un servicio localhost:3000
app.listen(app.get("port"));
console.log('Server port', 3000)