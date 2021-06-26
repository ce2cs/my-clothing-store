import React, {Component} from "react";
import MenuItem from "../MenuItem/MenuItem";
import './Directory.scss';
import SECTIONS_DATA from "./Data";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: SECTIONS_DATA
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({id, ...otherSectionInfo}) => (
            <MenuItem key={id} {...otherSectionInfo}/>
          ))
        }
      </div>
    );
  }
}

export default Directory;