import { Response, Request } from "express";
import { RegisterTaskDTO } from "../../domain";

export class TasksController {
  constructor() {}

  getTasks(req: Request, res: Response) {
    res.json("Getting Tasks List");
  }

  getTaskByID(req: Request, res: Response) {
    res.json("Getting Tasks By Id");
  }

  registerNewTask(req: Request, res: Response) {
    const [error, registerTaskDto] = RegisterTaskDTO.create(req.body);

    if(error) return res.status(400).json({error});
    
    res.json(registerTaskDto);
  }

  updateTask(req: Request, res: Response) {
    res.json("Updating task");
  }

  deleteTask(req: Request, res: Response) {
    res.json("Deletig task");
  }
}
