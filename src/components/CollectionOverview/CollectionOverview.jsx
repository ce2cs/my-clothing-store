import React from "react";
import {connect} from "react-redux";

import CollectionPreview from "../CollectionPreview/CollectionPreview";
import {selectShopCollections} from "../../redux/Shop/Selector";

import './CollectionOverview.scss'

const CollectionOverview = ({collections}) => (
  <div className='collection-overview'>
    {collections.map(({id, ...otherCollectionData}) => (
      <CollectionPreview key={id} {...otherCollectionData}/>
    ))}
  </div>
);
const mapStateToProps = (state) => ({
  collections: selectShopCollections(state)
});
export default connect(mapStateToProps)(CollectionOverview);