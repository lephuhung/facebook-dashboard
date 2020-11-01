import React, { useEffect } from "react";
import "./App.css";
import Login from "./Layout/Login";
import Dashboard from "./Layout/Dashboard";
import { BrowserRouter as Browser, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import ProtectRoute from "./Layout/ProtectRoute";
import { fetchProfileUser } from "./Redux/Reducer/loginReducer";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const { loadingProfile, auth } = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    //gửi kiểm tra hệ thống tài khoản đã đăng nhập hay chưa
    dispatch(fetchProfileUser(localStorage.getItem("token")));
  }, []);
  return (
    <div className="App">
        {loadingProfile ? (
          <div>Loading....</div>
        ) : (
      <Browser basename='/'>
          <Switch>
            <ProtectRoute path="" exact component={Dashboard} auth={auth} />
            <Route path="login" component={(props) => <Login {...props} />} />
          </Switch>
      </Browser>
        )}
    </div>
  );
}

export default App;
