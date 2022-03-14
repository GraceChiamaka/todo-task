import { RootState } from "../index";
import { action as typesafeAction } from "typesafe-actions";
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { TaskTypes } from "../types/tasks";
import { tasksService } from "../../services/tasks";
import { AnyAction } from "redux";
import { formatErrMsg } from "../../utils";

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
function* getAllTask(action: AnyAction) {
  const { error: onError } = action;
  try {
    const payload: ResponseGenerator = yield call(tasksService.getTasks);

    if (payload && payload.data) {
      const taskState = (state: RootState) => state.tasksGroups.tasks;
      const tasks = yield select(taskState);
      yield put(
        typesafeAction(
          TaskTypes.REQUEST_ALL_TASKS_CALL_SUCCESS,
          payload.data || tasks
        )
      );
    }
  } catch (error) {
    let errMsg = formatErrMsg(error);

    onError?.(errMsg ?? "Something went wrong, please try again");
  }
}

function* createTask(action: AnyAction) {
  const { payload: data, meta: onSuccess, error: onError } = action;
  try {
    const payload: ResponseGenerator = yield call(
      tasksService.createTask,
      data
    );
    if (payload && payload.data) {
      yield put(
        typesafeAction(TaskTypes.REQUEST_CREATE_TASK_CALL_SUCCESS, payload.data)
      );
      yield put(typesafeAction(TaskTypes.REQUEST_ALL_TASKS_CALL));
      onSuccess?.(payload.data);
    }
  } catch (error) {
    let errMsg = formatErrMsg(error);
    onError?.(errMsg ?? "Something went wrong, please try again");
  }
}

function* deleteTask(action: AnyAction) {
  const { payload: data, error: onError } = action;
  try {
    const payload: ResponseGenerator = yield call(
      tasksService.deleteTask,
      data
    );
    if (payload && payload.data) {
      yield put(typesafeAction(TaskTypes.REQUEST_DELETE_TASK_CALL_SUCCESS));
      yield put(typesafeAction(TaskTypes.REQUEST_ALL_TASKS_CALL));
    }
  } catch (error) {
    let errMsg = formatErrMsg(error);
    onError?.(errMsg ?? "Something went wrong, please try again");
  }
}
function* updateTask(action: AnyAction) {
  const { payload: data, meta: onUpdateSuccess, error: onUpdateError } = action;
  try {
    const payload: ResponseGenerator = yield call(
      tasksService.updateTask,
      data
    );
    if (payload && payload.data) {
      yield put(
        typesafeAction(
          TaskTypes.REQUEST_UPDATE_TASKS_CALL_SUCCESS,
          payload.data
        )
      );
      yield put(typesafeAction(TaskTypes.REQUEST_ALL_TASKS_CALL));
      onUpdateSuccess?.(payload.data);
    }
  } catch (error) {
    let errMsg = formatErrMsg(error);
    onUpdateError?.(errMsg ?? "Something went wrong, please try again");
  }
}

function* actionWatcher() {
  yield takeLatest(TaskTypes.REQUEST_ALL_TASKS_CALL, getAllTask);
  yield takeLatest(TaskTypes.REQUEST_CREATE_TASK_CALL, createTask);
  yield takeLatest(TaskTypes.REQUEST_DELETE_TASK_CALL, deleteTask);
  yield takeLatest(TaskTypes.REQUEST_UPDATE_TASKS_CALL, updateTask);
}

export default function* rootTaskSaga() {
  yield all([actionWatcher()]);
}
