import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({
  setTest: ["test"],
  getData: ["param1", "param2"],
});

export const AuthTypes = Types;
export default Creators;

const INITIAL_STATE = {
  test: "test",
};
export const reducer = createReducer(INITIAL_STATE, {
  SET_TEST: (state, { test }) => ({
    ...state,
    test,
  }),
});
