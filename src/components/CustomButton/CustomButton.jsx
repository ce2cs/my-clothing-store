import React from "react";

import "./CustomButton.scss"

const CustomButton = ({children, invertColor, isGoogleSignIn, ...otherProps}) => (
  <button
    className={`${invertColor ? 'inverted-color' : ''} ${isGoogleSignIn ? 'google-sign-in-button' : ''} custom-button`}
    {...otherProps}>
    {children}
  </button>
)

export default CustomButton;
