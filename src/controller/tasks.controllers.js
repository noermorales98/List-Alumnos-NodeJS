//definimos conmo nos movemos y que parametros pasamos
import miDB from "../models/miDB";

export const renderTasks = async (req, res) => {
  try {
    //aqui vamos a buscar las tareas
    const tasks = await miDB.find().lean();
    //renderizar la vista
    res.render("index", {
      tasks,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};


export const createTask = async (req, res, next) => {
  try {
    const task = new miDB(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    return res.render("error", { errorMessage: error.message });
  }
};

//para listar las tareas
export const taskToggleDone = async (req, res, next) => {
  let { id } = req.params;
  const task = await miDB.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};

export const renderTaskEdit = async (req, res, next) => {
  const task = await miDB.findById(req.params.id).lean();
  res.render("edit", { task });
};

export const editTask = async (req, res, next) => {
  const { id } = req.params;
  await miDB.updateOne({ _id: id }, req.body);
  res.redirect("/");
};

export const deleteTask = async (req, res, next) => {
  let { id } = req.params;
  await miDB.remove({ _id: id });
  res.redirect("/");
};
