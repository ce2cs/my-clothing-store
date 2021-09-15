import React from "react";
import {connect} from "react-redux";

import CollectionPreview from "../CollectionPreview/CollectionPreview";
import {selectShopCollections} from "../../redux/Shop/Selector";
import './CollectionOverview.scss'

const CollectionOverview = ({collections}) => (
  <div className='collection-overview'>
    {collections.map((collection) => {
        return (
          <CollectionPreview key={collection.id} title={collection.title} collectionId={collection.routeName}/>
        )
      }
    )
    }
  </div>
);
const mapStateToProps = (state) => ({
  collections: selectShopCollections(state)
});
export default connect(mapStateToProps)(CollectionOverview);