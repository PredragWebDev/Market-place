import { async } from '@firebase/util';
import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hook/UseAuth';

const CheckoutFrom =  ({detailsItam}) => {
    const {price ,name , _id} = detailsItam
    const stripe = useStripe()
    const elements = useElements();
    const {user} = useAuth()

    const [error , setError ] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false);

    const [clientSecret, setClientSecret] = useState('')
    useEffect( () => {
        fetch('https://blooming-thicket-66783.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({ price })
        })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
    } ,[price] )

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if(error){
            setError(error.message)
            setSuccess('');
        }else{
            setError('')
            console.log(paymentMethod);
        }
        
        // payment intent
        
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: user.email
                    },
                },
            },
        );
        if(intentError){
            setError(intentError.message);
            setSuccess('')
        }
        else{
            setError('')
            setSuccess('Your payment processed successfully')
            console.log(paymentIntent)
            setProcessing(false)
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: 'white',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
               {processing ? <CircularProgress></CircularProgress> : <button type="submit" disabled={!stripe }>
                    Pay {price}
                </button>}
            </form>
            {
                error && <p style={{color:'red'}}>{error}</p>
            }
            {
                success && <p style={{color:'green'}}>{success}</p>
            }
        </div>
    );
};

export default CheckoutFrom;