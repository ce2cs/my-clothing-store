import React from "react";

import "./CollectionPreview.scss";
import CollectionItem from "../CollectionItem/CollectionItem";
import {selectItemsBySlice} from "../../redux/Shop/Selector";
import {connect} from "react-redux";

const CollectionPreview = ({collectionId, title, items}) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items.slice(0, 5).map((item) => (
          <CollectionItem key={item.id} item={item}/>))
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state, {collectionId}) => {
  return ({
    items: selectItemsBySlice(0, 5)(collectionId)(state)
  })
}


export default connect(mapStateToProps)(CollectionPreview);