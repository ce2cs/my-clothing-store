import React, {Component} from 'react';
import './App.css';
import HomePage from "./containers/HomePage/HomePage";
import {Route} from "react-router-dom";
import ShopPage from "./containers/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SignPage from "./containers/SignPage/SignPage";
import {auth, createUserDocument} from "./components/Firebase/utils";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/User/Actions";

class App extends Component {

  authUnsubscribe = null;

  componentDidMount() {
    this.authUnsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser(
            {
              id: snapshot.id,
              ...snapshot.data()
            })
        });
      } else {
        this.props.setCurrentUser(userAuth)
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
        <Header />
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/sign-in" component={SignPage}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
