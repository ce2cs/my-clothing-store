import React from "react";
import {connect} from "react-redux";

import {ReactComponent as Icon} from '../../assets/shopping-bag.svg'
import {ToggleCartDropdown} from "../../redux/Cart/Actions";
import './ShopIcon.scss'

const ShopIcon = ({ToggleCartDropdown}) => (
  <div className='cart-icon' onClick={ToggleCartDropdown}>
    <Icon className='shopping-icon'/>
    <span className='item-count'>0</span>
  </div>
)
const mapDispatchToProps = (dispatch) => ({
    ToggleCartDropdown: () => dispatch(ToggleCartDropdown())
});
export default connect(null, mapDispatchToProps)(ShopIcon);