import {Router} from "express";


//03 parte
//ZONA DONDE DECLARAMOS LAS VISTAS

const router = Router();

//mandar a la pagina principal
router.get("/",(req,res) => {
    res.render("index.hbs")
});

//mandar a la pagina about
router.get("/about",(req,res) => {
    res.render("about.hbs")
});

export default router;