import React, {useEffect, useState} from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";

import "./ShopPage.scss"
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";
import {store} from "../../components/Firebase/utils";
import {updateCollections} from "../../redux/Shop/Actions";
import WithSpinner from "../../components/WithSpinner/WithSpinner";
import {fetchCollectionsStart} from "../../redux/Shop/Actions";
import {selectCollectionsLoaded, selectFetchingStatus} from "../../redux/Shop/Selector";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({fetchCollections, match, isLoading}) => {

  useEffect(
    fetchCollections
    , [fetchCollections])

  return (
    <div className='shop-page'>
      <Route exact path={match.path}
             render={(props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props}/>}/>
      <Route path={`${match.path}/:collectionId`}
             render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props}/>}/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: !selectCollectionsLoaded(state)
})
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
  fetchCollections: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);