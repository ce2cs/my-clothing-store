import React from 'react'
import StripeCheckout from "react-stripe-checkout";

const onToken = () => {
  alert("Payment Success");
}
const stripeButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51J9sHJDaaWwYnUcjI3DFSPNMgEHgddMFRQkmQLYLsYduWDo7tPucbtMOC1b1Tk9Z8ZMGhW7khjFvXgTk2hLabdVG00YoWUANRD'
  return (
    <StripeCheckout label = 'Pay Now'
                    name = "Boyang's Clothing Store"
                    billingAddress
                    shippingAddress
                    description={`Total price: $${price}`}
                    amount={priceForStripe}
                    token={onToken}
                    stripeKey={publishableKey}/>
  )
}

export default stripeButton;