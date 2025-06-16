"use client";

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";

const cardStyle = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#a0aec0",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  // Add state for name and phone number
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 100 }), // £1.99 in pence
      });

        const { clientSecret } = await res.json();
        
        

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name,
            phone,
          },
        },
      });

      if (result.error) {
        console.error(result.error.message);
        alert("Payment failed: " + result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        //alert user payments been made 
        alert("Payment succeeded!");
      
        const mail = await fetch("/api/send-mail", {
          method: "POST",
          headedrs: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recipient,
          }),
        });
        
      }
    } catch (err) {
      console.error("Payment failed:", err);
      alert("Payment failed: " + err.message);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded-lg shadow-md"
    >
      {/* Name input */}
      <label className="block">
        <span className="text-gray-700 font-medium mb-2 block">Name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Full name"
          className="w-full border border-gray-300 p-3 rounded-md"
        />
      </label>
      <label className="block">
        <span className="text-gray-700 font-medium mb-2 block">
          Email
        </span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
          className="w-full border border-gray-300 p-3 rounded-md"
        />
      </label>

      {/* Phone number input */}
      <label className="block">
        <span className="text-gray-700 font-medium mb-2 block">
          Phone Number
        </span>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="Phone Number"
          className="w-full border border-gray-300 p-3 rounded-md"
        />
      </label>

      {/* Card details */}
      <label className="block">
        <span className="text-gray-700 font-medium mb-2 block">
          Card Details
        </span>
        <div className="border border-gray-300 p-3 rounded-md bg-white">
          <CardElement options={cardStyle} />
        </div>
      </label>

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 disabled:opacity-50"
      >
        {loading ? "Processing…" : `Pay £${1}`}
      </button>
    </form>
  );
}
