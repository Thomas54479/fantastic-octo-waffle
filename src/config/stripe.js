// src/config/stripe.js

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (amount, currency) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
        });
        return paymentIntent;
    } catch (error) {
        console.error('Error creating payment intent:', error);
        throw error;
    }
};

module.exports = {
    createPaymentIntent,
};