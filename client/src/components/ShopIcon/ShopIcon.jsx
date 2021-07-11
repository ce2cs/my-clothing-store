import React from "react";
import {connect} from "react-redux";

import {ReactComponent as Icon} from '../../assets/shopping-bag.svg'
import {ToggleCartDropdown} from "../../redux/Cart/Actions";
import './ShopIcon.scss'
import {selectCartItemsCount} from "../../redux/Cart/Selectors";

const ShopIcon = ({ToggleCartDropdown, itemsCount}) => (
  <div className='cart-icon' onClick={ToggleCartDropdown}>
    <Icon className='shopping-icon'/>
    <span className='item-count'>{itemsCount}</span>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
    ToggleCartDropdown: () => dispatch(ToggleCartDropdown())
});

const mapStateToProps = (state) => ({
  itemsCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopIcon);