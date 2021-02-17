import { takeLatest, all } from "redux-saga/effects";

import * as AuthGenerators from "./AuthSagas";
// import * as MainGenerators from "./MainSagas";

export default function* rootSaga() {
  yield all([
    // AUTH
    ...[takeLatest("GET_DATA", AuthGenerators.getData)],
    // MAIN
  ]);
}
