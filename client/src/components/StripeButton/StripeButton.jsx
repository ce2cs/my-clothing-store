import React from 'react'
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'


const stripeButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51J9sHJDaaWwYnUcjI3DFSPNMgEHgddMFRQkmQLYLsYduWDo7tPucbtMOC1b1Tk9Z8ZMGhW7khjFvXgTk2hLabdVG00YoWUANRD'
  const onToken = async (token) => {
    try {
      const res = await fetch('payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: priceForStripe,
          token: token
        })
      });
      alert('Payment Success')
    } catch (error) {
      console.log(JSON.parse(error));
      alert('There was an issue about your payment, please check your credit card number');
    }
  }

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