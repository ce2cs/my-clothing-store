import React from "react";

import "./Header.scss"
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {Link} from "react-router-dom";
import {auth} from "../Firebase/utils";
import {connect} from "react-redux";

const Header = (props) => (
  <div className='header'>
    <Logo className='logo'/>
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
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currUser: state.user.currUser
});

export default connect(mapStateToProps)(Header);