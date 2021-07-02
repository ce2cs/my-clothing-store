import React from "react";

import './CartDropdown.scss'
import CustomButton from "../CustomButton/CustomButton";

const CartDropdown = (props) => (
  <div className='cart-dropdown'>
    <div className='cart-items'/>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
)

export default CartDropdown;