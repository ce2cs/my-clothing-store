import React from "react";

import "./CollectionItem.scss"
import CustomButton from "../CustomButton/CustomButton";
import {addItem} from "../../redux/Cart/Actions";
import {connect} from "react-redux";

const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl} = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
      <div className='collection-footer'>
        <span className="name"> {name}</span>
        <span className="price"> {price}</span>
      </div>
      <CustomButton invertColor onClick={() => addItem(item)}>Add To Cart</CustomButton>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);