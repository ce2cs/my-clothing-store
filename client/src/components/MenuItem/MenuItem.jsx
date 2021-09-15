import React from "react";
import './MenuItem.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match, location}) => (
  <div className={`menu-item ${size}`} onClick={(event) => {
    history.push(`${match.url}${linkUrl}`);
  }}>
    <div className="bg-image" style={{backgroundImage: `url(${imageUrl})`}}/>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);