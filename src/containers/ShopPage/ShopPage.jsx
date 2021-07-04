import React from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";

import "./ShopPage.scss"
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";

const ShopPage = ({match}) => (
  <div className='shop-page'>
    <Route exact path={match.path} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;