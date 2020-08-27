import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const promise = loadStripe('pk_test_51HKUtfIO7ebrwM1pvoiuGovs9PSoO40tw8xkKGGp3tGqB22DtcANBQM4AI8m3lKCXwxl5mPHY6PKSGomM3tfl6QV00eLSfifRT');

const Checkout = ({orderId}) => {
    return (
        <div>
            <Elements stripe={promise} >
                <CheckoutForm orderId={orderId} />
            </Elements>
        </div>
    )
}

export default Checkout
