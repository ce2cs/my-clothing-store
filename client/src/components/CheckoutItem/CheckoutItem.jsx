import React from "react";

import {addItem, removeItem, clearItem} from '../../redux/Cart/Actions'
import './CheckoutItem.scss'
import {connect} from "react-redux";

const CheckoutItem = ({cartItem, removeItem, addItem, clearItem}) => {
  const {imageUrl, name, price, quantity} = cartItem;
  return (<div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item'/>
    </div>
    <span className='name'>{name}</span>
    <div className='quantity'>
      <span className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</span>
      <span className='value'>{quantity}</span>
      <span className='arrow' onClick={() => addItem(cartItem)}>&#10095;</span>
    </div>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
  </div>)
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    clearItem: item => dispatch(clearItem(item))
  }
};

export default connect(null, mapDispatchToProps)(CheckoutItem);