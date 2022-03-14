import BaseRequest from ".";
import { UpdateTaskPayload } from "./types";
// import { CreateBankAccountPayload } from "@store/types/profile";

enum TASKS_ROUTES {
  DEFAULT_TASK = "/tasks",
}

class TasksService extends BaseRequest {
  getTasks = async () => {
    return await this.api.get(TASKS_ROUTES.DEFAULT_TASK);
  };
  updateTask = async (payload: UpdateTaskPayload) => {
    const { id, ...rest } = payload;
    return await this.api.put(`${TASKS_ROUTES.DEFAULT_TASK}/${id}`, {
      ...rest,
    });
  };
  createTask = async (payload) => {
    return await this.api.post(TASKS_ROUTES.DEFAULT_TASK, payload);
  };
  deleteTask = async (payload) => {
    return await this.api.delete(`${TASKS_ROUTES.DEFAULT_TASK}/${payload.id}`);
  };
}

const tasksService = new TasksService();

export { tasksService };
