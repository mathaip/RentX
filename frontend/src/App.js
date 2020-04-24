import React,{Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import ListView from './components/Listings/ListView';
import GlobalStyle from './components/GlobalStyle';
import Listing from './components/Listings/Listing';
import Escrow from './components/escrow/escrow';
import Contract from './components/escrow/channel'
import Init from './components/escrow/init'

import './App.css';

function App() {
  return (
    <div>
    <Router>
    <Fragment>
      <GlobalStyle />
      <Switch>
        <Route exact path="/Listings" component={Listing}></Route>
        <Route path="/ListView/:id" component={ListView}></Route>
        <Route path ="/Escrow" render={()=><Escrow/>}></Route>
        <Route path ="/channel" render={()=><Contract/>}></Route>
        <Route path ="/init" render={()=><Init/>}></Route>
      </Switch>
    </Fragment>
  </Router>
  </div>
  );
}

export default App;
