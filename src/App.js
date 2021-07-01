import React, {Component} from 'react';
import './App.css';
import HomePage from "./containers/HomePage/HomePage";
import {Route} from "react-router-dom";
import ShopPage from "./containers/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SignPage from "./containers/SignPage/SignPage";
import {auth, createUserDocument} from "./components/Firebase/utils";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currUser: null
    }
  }

  authUnsubscribe = null;

  componentDidMount() {
    this.authUnsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);
        userRef.onSnapshot(snapshot => {
            this.setState({
                currUser: {
                  id: snapshot.id,
                  ...snapshot.data()
                }
              }
            );
          },
        )
      } else {
        this.setState({currUser: null});
      }
    });
  }

  componentWillUnmount() {
    if (this.authUnsubscribe) {
      this.authUnsubscribe();
    }
  }

  render() {
    return (
      <div>
        <Header currUser={this.state.currUser} signOutHandler={this.handleSignOut}/>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/sign-in" component={SignPage}/>
      </div>
    );
  }
}

export default App;
