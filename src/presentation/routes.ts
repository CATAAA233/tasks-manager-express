import { Router } from "express";
import { TasksRoutes } from "./tasks/routes";

export class AppRoutes{

    static get routes(): Router{
        const router = Router()
        
        router.use('/api/tasks', TasksRoutes.routes)
        
        return router;
    }

}