import { all } from "redux-saga/effects"
import {
  watchAddUser,
  watchDeleteUser,
  watchGetUsers,
  watchUpdateUser
} from "./userSaga"

export function* rootWatcher() {
  yield all([
    watchGetUsers(),
    watchDeleteUser(),
    watchAddUser(),
    watchUpdateUser()
  ])
}
