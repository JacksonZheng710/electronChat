import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'


ReactDOM
//   .render(<h1>I am React App!</h1>, document.getElementById('electronChat'));
const chatApp = ReactDOM.createRoot(document.getElementById("chatApp"));
chatApp.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );