import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_GrEW9HgZoGdLw5CZwKdB4iQz00ZAj6qZBg'

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    }

    return (
        <StripeCheckout 
            currency="GBP"
            label='Pay Now'
            name='Golden Shoe Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/J1M.svg'
            description={`Your total is £${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;