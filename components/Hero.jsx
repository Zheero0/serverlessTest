"use client";
import React from "react";
import Image from "next/image";
import ShoeCompareSlider from "./shoeCompareSlider";
import ShoeTransition from "./ShoeTransition"

const Hero = () => {
  return (
    <section className="w-full h-[calc(100vh-96px)] bg-gradient-to-b from-white to-gray-100 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 leading-tight">
          We Don’t Just Clean. <br className="hidden md:block" />
          <span className="text-black">We Revive.</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 mb-6">
          Your Premium Sneaker Cleaning & Restoration. Your kicks deserve
          better.
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300 shadow-md">
          Book Now
        </button>
      </div>

      {/* Optimized Next.js Image Component */}
      <div className="mt-8">
        {/* <Image
          src="/HeroImage1.jpg"
          alt="Sneaker background"
          width={300}
          height={400}
          className="w-full h-auto object-contain rounded-2xl"
          priority
        /> */}
        <ShoeTransition/>
      </div>
    </section>
  );
};

export default Hero;
