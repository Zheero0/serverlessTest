"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <Image
            src="/transparentSneaks.png"
            alt="Sneakswash Logo"
            width={100}
            height={70}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/services" className="text-gray-700 hover:text-black">
            Services
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-black">
            Pricing
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-black">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-black">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild>
            <Link href="/pricing">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            {/* Hide the default close button inside Sheet */}
            <SheetContent
              side="top"
              className="p-4 space-y-30 [&>button]:hidden" // Hides the default close button
            >
              {/* Header with logo and custom close button */}
              <div className="flex items-center justify-between w-full">
                <Link
                  href="/"
                  className="text-2xl font-extrabold tracking-tight"
                >
                  <Image
                    src="/transparentSneaks.png"
                    alt="Sneakswash Logo"
                    width={100}
                    height={70}
                    priority
                  />
                </Link>

                {/* Custom close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-black p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile navigation links */}
              <div className="flex flex-col items-center space-y-12 w-full">
                {/* <Link
                  href="/services"
                  onClick={() => setIsOpen(false)}
                  className="block text-lg"
                >
                  Services
                </Link> */}
                <Link
                  href="/pricing"
                  onClick={() => setIsOpen(false)}
                  className="block text-3xl"
                >
                  Pricing
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="block text-lg"
                >
                  About
                </Link>
                <Button asChild className="w-full max-w-xs">
                  <Link href="/book" onClick={() => setIsOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
