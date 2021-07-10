import React, {useEffect, useState} from 'react';
import './App.css';
import HomePage from "./containers/HomePage/HomePage";
import {Route, Redirect} from "react-router-dom";
import ShopPage from "./containers/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SignPage from "./containers/SignPage/SignPage";
import {auth, createUserDocument} from "./components/Firebase/utils";
import {connect} from "react-redux";
import {setCurrentUser, checkUserSession} from "./redux/User/Actions";
import {selectCurrUser} from "./redux/User/Selectors";
import CheckoutPage from "./containers/CheckoutPage/CheckoutPage";
import {selectShopCollections} from "./redux/Shop/Selector";

const App = ({currUser, checkUserSession}) => {
  useEffect(checkUserSession, [checkUserSession])

  return (
    <div>
      <Header/>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={ShopPage}/>
      <Route exact path="/sign-in" render={() => {
        return currUser ? <Redirect to="/"/> : <SignPage/>
      }}/>
      <Route exact path="/checkout" component={CheckoutPage}/>
    </div>
  );
}

const mapStateToProps = state => (
  {
    currUser: selectCurrUser(state),
  }
);

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
