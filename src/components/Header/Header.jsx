import React from "react";

import "./Header.scss"
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {Link} from "react-router-dom";
import {auth} from "../Firebase/utils";
import {connect} from "react-redux";
import ShopIcon from "../ShopIcon/ShopIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import {selectCurrUser} from "../../redux/User/Selectors";
import {selectCartHidden} from "../../redux/Cart/Selectors";
import {createStructuredSelector} from "reselect";

const Header = (props) => (
  <div className='header'>
    <Link to="/">
      <Logo className='logo'/>
    </Link>
    <div className='options'>
      <div className='option'>
        <Link to="/shop">SHOP</Link>
      </div>
      <div className='option'>
        <Link to="/contact">CONTACT</Link>
      </div>
      {
        props.currUser ?
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
          <Link className='option' to="/sign-in">SIGN IN</Link>
      }
      <ShopIcon/>
    </div>
    {props.hidden ? null : <CartDropdown/>}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currUser: selectCurrUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);