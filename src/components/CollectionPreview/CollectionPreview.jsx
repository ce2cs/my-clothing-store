import React from "react";

import "./CollectionPreview.scss";
import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionPreview = ({title, items}) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items.slice(0, 5).map(({id, ...otherPropsExceptId}) => (
        <CollectionItem key={id} {...otherPropsExceptId}/>))
      }
    </div>
  </div>
)

export default CollectionPreview;