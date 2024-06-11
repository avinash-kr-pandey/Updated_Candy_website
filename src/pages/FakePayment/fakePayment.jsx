import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./fakePayment.css"

const FakePaymentGateway = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [loading, setLoading] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handlePayment = (method) => {
        // setLoading(true);
        // setTimeout(() => {
        //     setLoading(false);
        //     setPaymentSuccess(true);
        // }, 2000);
        console.log("Testing");
    };

    return (
        <div className='container'>
            <h2>Fake Payment Gateway</h2>
            <p>This is a fake payment gateway. Please select a payment method:</p>
            <div className='payment-options'>
                <label>
                    <input type="radio" name="paymentMethod" value="creditCard" onChange={() => setPaymentMethod('creditCard')} />
                    Credit Card
                </label>
                <label>
                    <input type="radio" name="paymentMethod" value="paypal" onChange={() => setPaymentMethod('paypal')} />
                    PayPal
                </label>
            </div>
            <button className="rounded-md border-2 border-blue-900 py-2 px-3  , payment-button" onClick={() => handlePayment(paymentMethod)} disabled={!paymentMethod || loading}>
                {loading ? 'Processing...' : 'Pay Now'}
            </button>

        </div>
    );
};

export default FakePaymentGateway;
