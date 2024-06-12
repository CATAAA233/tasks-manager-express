import { stat } from "fs";

export class RegisterTaskDTO {
  private constructor(
    public title: String,
    public description: String,
    public status: string,
    public deadline: string,
    public created_by: string,
    public comments?: string,
    public tags?: string,
    public file?: string
  ) {}

  static create(object: { [key: string]: any }): [string?, RegisterTaskDTO?] {
    const {
      title,
      description,
      status,
      deadline,
      created_by,
      comments = [],
      tags = [],
      file = undefined,
    } = object;

    if (!title) return ["missing title"];
    if (!description) return ["missing description"];
    if (!status) return ["missing status"];
    if (!deadline) return ["missing deadline"];
    if (!created_by) return ["missing created_by"];

    return [
      undefined,
      new RegisterTaskDTO(
        title,
        description,
        status,
        deadline,
        created_by,
        comments,
        tags,
        file
      ),
    ];
  }
}
