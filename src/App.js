import React, {Component} from 'react';
import './App.css';
import HomePage from "./containers/HomePage/HomePage";
import {Route, Redirect} from "react-router-dom";
import ShopPage from "./containers/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SignPage from "./containers/SignPage/SignPage";
import {auth, createUserDocument} from "./components/Firebase/utils";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/User/Actions";
import {selectCurrUser} from "./redux/User/Selectors";
import CheckoutPage from "./containers/CheckoutPage/CheckoutPage";
import {selectShopCollections} from "./redux/Shop/Selector";

class App extends Component {

  authUnsubscribe = null;

  async componentDidMount() {
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
        <Header/>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route exact path="/sign-in" render={() => {
          return this.props.currUser ? <Redirect to="/"/> : <SignPage/>
        }}/>
        <Route exact path="/checkout" component={CheckoutPage}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
)

const mapStateToProps = state => (
  {
    currUser: selectCurrUser(state),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
