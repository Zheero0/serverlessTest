"use client";

import StripeProvider from "@/components/StripeProvider";
import CheckoutForm from "@/components/CheckoutForm";

export default function CheckoutPage() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Checkout</h1>
      <StripeProvider>
        <CheckoutForm />
      </StripeProvider>
    </div>
  );
}
