import { all } from "redux-saga/effects"
import {
  watchAddUser,
  watchDeleteUser,
  watchGetUsers
} from "./userSaga"

export function* rootWatcher() {
  yield all([watchGetUsers(), watchDeleteUser(), watchAddUser()])
}
