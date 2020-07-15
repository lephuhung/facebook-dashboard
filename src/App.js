import React, {useEffect} from 'react';
import './App.css';
import Login from './Layout/Login';
import Dashboard from './Layout/Dashboard';
import {BrowserRouter as Browser, Switch,Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import ProtectRoute from'./Layout/ProtectRoute';
function App() {
  useEffect(() => {
    //TODO: gửi kiểm tra hệ thống tài khoản đã đăng nhập hay chưa
  }, [])
  return (
    <div className="App">
      <Browser>
        <Switch>
          <Route path='/' exact component={Login}/>
          <ProtectRoute path='/dashboard' component={Dashboard} auth={false}/>
        </Switch>
      </Browser>
    </div>
  );
}

export default App;
