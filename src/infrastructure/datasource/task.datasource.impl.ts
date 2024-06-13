import {
  CustomError,
  RegisterTaskDTO,
  TaskDatasource,
  TaskEntity,
} from "../../domain";

export class TaskDatasourceImpl implements TaskDatasource {
  async register(registerTaskDto: RegisterTaskDTO): Promise<TaskEntity> {
    const {
      title,
      description,
      status,
      deadline,
      created_by,
      comments,
      file,
      tags,
    } = registerTaskDto;

    try {
      return new TaskEntity(
        title,
        description,
        status,
        deadline,
        created_by,
        comments,
        file,
        tags
      );
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }

      throw CustomError.internalServer();
    }
  }
}
