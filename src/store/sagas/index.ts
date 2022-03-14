import { all, take } from "redux-saga/effects";
import { REHYDRATE } from "redux-persist";
import rootTaskSaga from "./tasks";

//Import all the sagas here and place them in the array below.

export function* rootSaga() {
  yield take(REHYDRATE);
  yield all([rootTaskSaga()]);
}
