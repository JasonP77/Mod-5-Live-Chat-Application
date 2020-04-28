import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
import actionCable from 'actioncable';


const CableApp = {}

CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')
ReactDOM.render(
  <React.StrictMode>
    <Router><App cableApp={CableApp}/></Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
