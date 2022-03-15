import express from "express";
import { create } from "express-handlebars"; //nuestro visualizador sustituto de html
import indexRoutes from "./routes/index.routes"; //importando todo lo que venga de index.routes
import path from "path"; //nos pide rutas absolutas(c:user\noe\documents) y las configura para que funcionen en distintos Sistemas operativos
import morgan from "morgan";

//02 parte
//importa a index.routes

//AQUI SE EJECUTAN LA VISTAS
//iniciar servicio
const app = express();

//agregar los views ahi encontrara las vistas
app.set("views", path.join(__dirname, "views"));

//declarando motor engine: HANDLEBARS, para que sepa que formato utilizara el prograama
const exphbs = create({
  //nombre de la extension
  extname: "hbs",
  //directorios
  layoutsDir: path.join(app.get("views"), "layouts"),
  //archivo principal
  defaultLayout: "main",
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

//sirve para saber que recursos esta utilizando

app.use(morgan("dev"));
app.use(indexRoutes);


export default app;
