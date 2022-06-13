
import React from 'react';
import HomeView from './views/Home';
import LoginView from './views/Login';
import RegisterView from './views/Register';
import SettingsView from './views/Settings';
// import { ipcRenderer } from 'electron';
import Navbar from './components/Navbar';

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export default function App() {
//   const title = "Hello World ";
//   const enhancedTitle = title + ' - React App!';
//   const sendNotification = () => {
    // ipcRenderer.send('notify', 'This is my custom message!');
    // window.sendNotification('My custom message');
    // electron.notificationApi.sendNotification('My custom message!');


  return (
    <Router>
      <Navbar />
      <div className='content-wrapper'>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/settings">
            <SettingsView/>
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/register">
            <RegisterView/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}