import React from "react";

import './CartDropdown.scss'
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import {connect} from "react-redux";
import {selectCartItems} from "../../redux/Cart/Selectors";

const CartDropdown = ({items}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        items.map(item => (<CartItem key={item.id} item={item}/>))
      }
    </div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

const mapStatesToProps = (state) => ({
  items: selectCartItems(state)
});
export default connect(mapStatesToProps)(CartDropdown);