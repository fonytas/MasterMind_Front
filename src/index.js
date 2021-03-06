import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Game from './Game';

// using CommonJS modules

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter,

} from 'react-router-dom'

function MainApp(){
    return (
     <Router>
        <div>
          <Route path="/login" component={App} />
          <Route path="/game/:name" component={Game} />
        </div>
    </Router>
    )
}

ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();

//axious