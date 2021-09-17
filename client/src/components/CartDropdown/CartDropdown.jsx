import React from "react";

import './CartDropdown.scss'
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import {connect} from "react-redux";
import {selectCartItems} from "../../redux/Cart/Selectors";
import {withRouter} from "react-router-dom";
import {ToggleCartDropdown} from "../../redux/Cart/Actions";

const CartDropdown = ({items, history, dispatch}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {items.length ?
        items.map(item => (<CartItem key={item.id} item={item}/>)) :
        <span className='empty-message'>Your Cart Is Empty</span>
      }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(ToggleCartDropdown());
      }
    }>Go To Checkout</CustomButton>
  </div>
);

const mapStatesToProps = (state) => ({
  items: selectCartItems(state)
});

export default withRouter(connect(mapStatesToProps)(React.memo(CartDropdown)));