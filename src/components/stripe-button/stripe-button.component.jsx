import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Gx2bsHCM0lQoXiGM0poa5X89c3FXo2iYgcrhnwqs3JgH0eQhehOVlW8ugWqFovwOkmIj1drRtVzVglqLJc6krPw00aJSpWJxF';


   const onToken = token => {
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothng Ltd."
            billingAddress={false}
            shippingAddress={false}
            zipCode={false}
            image = "https://stripe.com/img/documentation/checkout/marketplace.png"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;