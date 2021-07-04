import React, {Component} from "react";
import {connect} from "react-redux";

import MenuItem from "../MenuItem/MenuItem";
import './Directory.scss';
import {selectDirectorySections} from "../../redux/Directory/Selector";

const Directory = ({sections}) => (
  <div className='directory-menu'>
    {sections.map(({id, ...otherSectionInfo}) => (
      <MenuItem key={id} {...otherSectionInfo}/>
    ))}
  </div>)

const mapStateToProps = (state) => ({
  sections: selectDirectorySections(state)
});

export default connect(mapStateToProps)(Directory);