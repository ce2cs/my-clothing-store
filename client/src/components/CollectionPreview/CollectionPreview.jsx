import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import "./CollectionPreview.scss";
import CollectionItem from "../CollectionItem/CollectionItem";
import {selectItemsBySlice} from "../../redux/Shop/Selector";

const CollectionPreview = ({collectionId, title, items}) => {
  return (
    <div className='collection-preview'>
      <Link to={`/shop/${title.toLowerCase()}`}>
        <h1 className='title'>{title.toUpperCase()}</h1>
      </Link>
      <div className='preview'>
        {items.slice(0, 4).map((item) => (
          <CollectionItem key={item.id} item={item}/>))
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state, {collectionId}) => {
  return ({
    items: selectItemsBySlice(0, 4)(collectionId)(state)
  })
}


export default connect(mapStateToProps)(CollectionPreview);