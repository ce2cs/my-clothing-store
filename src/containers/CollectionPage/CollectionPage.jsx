import React from "react";
import {connect} from "react-redux";

import CollectionItem from "../../components/CollectionItem/CollectionItem";
import {selectCollectionById} from "../../redux/Shop/Selector";
import './CollectionPage.scss'

const CollectionPage = ({match, getCollection}) => {
  const {title, items} = getCollection
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
          items.map(item => (
            <CollectionItem key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state, {match}) => ({
  getCollection: selectCollectionById(match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage);