"use client"
import Link from "next/link";
import Hero from "@/components/Hero";
import ShoeCompareSlider from "@/components/shoeCompareSlider";


export default function Home() {

  const recipient = {
    name: "Test User",
    // email: "rehans.axis@gmail.com",
  }

  const handleMail = async () => {
    console.log("Sending mail");
    await fetch("/api/send-mail", {
      method: "POST",
      headedrs: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipient,
      }),
    })
  };


  return (
    <div>
      <Hero />

    <button onClick={handleMail} 
    className="bg-red-500 px-2 py-1 "
    >Handle Mail</button>

    <Link href="/checkout" className="bg-blue-500 px-2 py-2">Checkout</Link>

    </div>
  );
}
