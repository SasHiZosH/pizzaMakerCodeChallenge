import React from 'react';
import './global.css';

import { Provider } from 'react-redux'

import store from './store';
 
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainMenu from './components/MainMenu'

import Menu from './components/Menu'
import SizeStep from './components/SizeStep'
import FormatStep from './components/FormatStep'
import BorderStep from './components/BorderStep'
import ToppingStep from './components/ToppingStep'
import ConfirmationStep from './components/ConfirmationStep'
import Final from './components/Final'

function App() {
  return (
    <Provider store={store}>
      <MainMenu>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Menu}/>
          <Route path="/sizestep" component={SizeStep}/>
          <Route path="/formatstep" component={FormatStep}/>
          <Route path="/borderstep" component={BorderStep}/>
          <Route path="/toppingstep" component={ToppingStep}/>
          <Route path="/confirmationstep" component={ConfirmationStep}/>
          <Route path="/final" component={Final}/>
        </Switch>
      </BrowserRouter>
      </MainMenu>
    </Provider>
  );
}

export default App;
