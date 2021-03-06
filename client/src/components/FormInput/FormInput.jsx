import React from "react";

import "./FormInput.scss"

const FormInput = ({handleChange, label, name, ...otherProps}) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} name={name} {...otherProps}/>
    {
      label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
                     htmlFor={name}>{label}</label>
        : null
    }
  </div>
)

export default FormInput;