import { Reducer } from "redux";
import { TaskTypes, TaskActions, TaskState } from "../types/tasks";

const INITIAL_STATE: TaskState = {
  tasks: [],
};

const taskReducer: Reducer<TaskState, TaskActions> = (
  state: TaskState = INITIAL_STATE,
  action: TaskActions
): TaskState => {
  switch (action.type) {
    case TaskTypes.REQUEST_ALL_TASKS_CALL_SUCCESS: {
      return {
        ...state,
        tasks: action.payload,
      };
    }
    default:
      return state;
  }
};

export { taskReducer };
