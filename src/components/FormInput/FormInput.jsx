import React from "react";

import "./FormInput.scss"

const FromInput = ({name, ...otherProps}) => (
  <div className='group'>
    <input className='form-input' {...otherProps}/>
    <label className='form-input-label' htmlFor={name}>{name}</label>
  </div>
)

export default FromInput;