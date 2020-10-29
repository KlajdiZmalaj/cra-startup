import React, { useEffect } from "react";
import { AuthActions, MainActions } from "redux-store/models";
import { connect } from "react-redux";

const Root = ({ getData, test }) => {
  useEffect(() => {
    getData("test1", "test2");
  }, []);
  console.log("test", test);
  return <div>test app</div>;
};

const mstp = ({ auth: { test } }) => ({
  test,
});
export default connect(mstp, { ...AuthActions, ...MainActions })(Root);
