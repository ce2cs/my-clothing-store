import React, {useEffect, lazy, Suspense, Error} from 'react';
import './App.scss';
import {Route, Redirect} from "react-router-dom";
import Header from "./components/Header/Header";
import {connect} from "react-redux";
import {checkUserSession} from "./redux/User/Actions";
import {selectCurrUser} from "./redux/User/Selectors";
import Spinner from "./components/Spinner/Spinner";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const HomePage = lazy(() => import('./containers/HomePage/HomePage'));
const ShopPage = lazy(() => import('./containers/ShopPage/ShopPage'));
const SignPage = lazy(() => import("./containers/SignPage/SignPage"));
const CheckoutPage = lazy(() => import("./containers/CheckoutPage/CheckoutPage"));


const App = ({currUser, checkUserSession}) => {
    useEffect(checkUserSession, [checkUserSession])

    return (
        <div>
            <ErrorBoundary>
                <Header/>
                <Suspense fallback={<Spinner/>}>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route exact path="/sign-in" render={() => {
                        return currUser ? <Redirect to="/"/> : <SignPage/>
                    }}/>
                    <Route exact path="/checkout" component={CheckoutPage}/>
                </Suspense>
            </ErrorBoundary>
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
