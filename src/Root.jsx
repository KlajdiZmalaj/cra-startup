import React, { useEffect } from "react";
import { AuthActions } from "redux-store/models";
import { connect } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";

const Root = ({ getData, test }) => {
  useEffect(() => {
    getData("test1", "test2");
  }, []);
  console.log("test", test);
  return (
    <>
      <HashRouter>
        <Switch>
          {/* <Route path="/home" render={Component} /> */}
          {/* <Route path="/home" render={Component} /> */}
          {/* <Route path="/home" render={Component} /> */}
        </Switch>
      </HashRouter>
    </>
  );
};

const mstp = ({ auth: { test } }) => ({
  test,
});
export default connect(mstp, { ...AuthActions })(Root);
