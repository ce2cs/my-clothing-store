import React, {Component} from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";

import "./ShopPage.scss"
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";
import {store} from "../../components/Firebase/utils";
import {updateCollections} from "../../redux/Shop/Actions";
import WithSpinner from "../../components/WithSpinner/WithSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {
  state = {
    isLoading: true
  }

  unSubscribeOnSnapshot = null;

  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionsRef = store.collection('collections');
    collectionsRef.onSnapshot(async collectionSnapshot => {
      const collections = collectionSnapshot.docs.map(doc => {
        const {items, title} = doc.data();
        return {
          id: doc.id,
          routeName: encodeURI(title.toLowerCase()),
          title,
          items
        }
      });
      const collectionMap = collections.reduce((cumulative, curr) => {
          cumulative[curr.title.toLowerCase()] = curr
          return cumulative;
        }
        , {})
      updateCollections(collectionMap);

      this.setState({
        isLoading: false
      });
    })
  }

  render() {
    const {match} = this.props;
    const {isLoading} = this.state;
    return (
      <div className='shop-page'>
        <Route exact path={match.path}
               render={(props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props}/>}/>
        <Route path={`${match.path}/:collectionId`}
               render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props}/>}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage);