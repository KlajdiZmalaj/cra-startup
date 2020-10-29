import { put, call, delay, select } from "redux-saga/effects";
import AuthActions from "../models/auth";
import MainActions from "../models/main";

import { getDataReq } from "services/auth";

export function* getData({ param1, param2 }) {
  const response = yield call(getDataReq, param1, param2);
  const testData = yield select((state) => state.auth.test);

  if (response) {
    console.log("response", response);
    yield put(AuthActions.setTest({ response, testData }));
  }
}
