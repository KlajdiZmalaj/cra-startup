import { put, call, delay, select } from "redux-saga/effects";
import AuthActions from "../models/auth";

import * as AuthReq from "services/auth";

export function* getData({ param1, param2 }) {
  const response = yield call(AuthReq.getDataReq, param1, param2);
  const testData = yield select((state) => state.auth.test);

  if (response) {
    console.log("response", response);
    yield put(AuthActions.setTest({ response, testData }));
  }
}
