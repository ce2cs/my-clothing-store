import React from 'react';
import './App.css';
import HomePage from "./containers/HomePage/HomePage";
import {Route} from "react-router-dom";
import ShopPage from "./containers/ShopPage/ShopPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header/>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
