// app/api/create-payment-intent/route.js (or pages/api/create-payment-intent.js)
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export async function POST(req) {
  try {
    const { amount } = await req.json();

    if (!amount) {
      return new Response(JSON.stringify({ error: "Amount is required" }), {
        status: 400,
      });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "gbp",
      payment_method_types: ["card"],
    });

    return new Response(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
