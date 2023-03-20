import { all } from "redux-saga/effects"
import { watchDeleteUser, watchGetUsers } from "./userSaga"

export function* rootWatcher() {
  yield all([watchGetUsers(), watchDeleteUser()])
}
