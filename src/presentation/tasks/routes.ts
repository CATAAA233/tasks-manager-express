import { Router } from "express";
import { TasksController } from "./controller";

export class TasksRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new TasksController();

    router.get("/", controller.getTasks);
    router.post("/", controller.registerNewTask);
    router.put("/", controller.updateTask);
    router.delete("/", controller.deleteTask);

    return router;
  }
}
