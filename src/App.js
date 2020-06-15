import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './components/shop/shop.component'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
