import React, {Component} from 'react';
import './App.css';
import HomePage from "./containers/HomePage/HomePage";
import {Route} from "react-router-dom";
import ShopPage from "./containers/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SignPage from "./containers/SignPage/SignPage";
import {auth} from "./components/Firebase/utils";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currUser: null
    }
  }
  authUnsubscribe = null;
  componentDidMount() {
    this.authHandler = auth.onAuthStateChanged((user) => {
      this.setState({currUser: user});
    })
  }

  componentWillUnmount() {
    if (this.authHandler) {
      this.authUnsubscribe();
    }
  }

  render() {
    return (
      <div>
        <Header currUser = {this.state.currUser} signOutHandler = {this.handleSignOut}/>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sign-in" component={SignPage} />
      </div>
    );
  }
}

export default App;
