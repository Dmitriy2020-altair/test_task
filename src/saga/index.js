import { all } from "redux-saga/effects"
import { watchGetUsers } from "./userSaga"

export function* rootWatcher() {
  yield all([watchGetUsers()])
}
