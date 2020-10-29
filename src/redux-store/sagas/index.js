import { takeLatest, all } from "redux-saga/effects";

/* ------------- Types ------------- */
import { AuthTypes } from "../models/auth";
import { MainTypes } from "../models/main";
/* ------------- Sagas ------------- */

import { getData } from "./AuthSagas";

export default function* rootSaga() {
  yield all([
    // AUTH
    takeLatest(AuthTypes.GET_DATA, getData),
    // MAIN
  ]);
}
