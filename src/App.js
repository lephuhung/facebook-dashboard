import React from 'react';
import './App.css';
import Login from './Layout/Login';
import Dashboard from './Layout/Dashboard';
import {BrowserRouter as Browser, Switch,Route} from 'react-router-dom';
import 'antd/dist/antd.css';
function App() {
  return (
    <div className="App">
      <Browser>
        <Switch>
          <Route path='/' component={Login}/>
          <Route path='/dashboard' component={Dashboard}/>
        </Switch>
      </Browser>
    </div>
  );
}

export default App;
