import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Footer from './components/Footer/Footer';
import Container from 'react-bootstrap/Container'
import {ShopPreview} from './components/ShopPreview/ShopPreview'
import {Cart} from './components/Cart/Cart'
import {CustomerInfo} from './components/CustomerInfo/CustomerInfo'

import './App.css'



const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path='/Shop' component={Shop} />
        <Route exact path='/ShopPreview' component={ShopPreview}/>
        <Route exact path='/Cart' component={Cart}/>
        <Route exact path='/CustomerInfo' component={CustomerInfo}/>
        <Route exact path="/Media" component={Media} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
