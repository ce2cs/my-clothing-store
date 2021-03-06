import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {selectCartItems, selectCartTotalPrice} from "../../redux/Cart/Selectors";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeButton from "../../components/StripeButton/StripeButton"

import './CheckoutPage.scss'

const CheckoutPage = ({ cartItems, totalPrice }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${totalPrice}</div>
    <StripeButton price={totalPrice}/>
  </div>
);

const mapStateToProps = createStructuredSelector(
  {
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice
  }
);

export default connect(mapStateToProps)(CheckoutPage);