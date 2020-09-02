import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = (props) => {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] =  useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    // Create payment intent when mounting
    useEffect(() => {
        window.fetch(`/api/orders/place-order/${props.orderId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },   
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            // Receive clientSecret unique to this paymentIntent
            setClientSecret(data.clientSecret);
        });
    }, [])

    const cardStyle = {
        style: {
          base: {
            color: "#32325d",
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#32325d"
            }
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
          }
        }
      };


    const handleChange = async (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    const handleSubmit = async ev => {
        ev.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: ev.target.name.value
                }
            }
        });
        if(payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
            updateStatus();
        }
    };

    const updateStatus = async () => {
        try {
            await axios.put(`/api/orders/${props.orderId}`)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement id='card-element' options={cardStyle} onChange={handleChange} />
                <button className='bg-green-600 w-full p-2 text-white text-center rounded font-semibold'
                    disabled={processing || disabled || succeeded}
                    id='submit'
                >
                    <span id='button-text'>
                        {
                            processing ? (
                                <div className='spinner' id='spiner'></div>
                            ) : (
                                'Place order'
                            )
                        }
                    </span>
                </button>
                {
                    error && (
                        <div className='card-error' role='alert'>
                            {error}
                        </div>
                    )
                }
                <p className={succeeded ? 'result-message' : ' hidden result-message-hidden'}>
                    Payment succeeded
                </p>
            </form>
        </div>
    )
}

export default CheckoutForm;
