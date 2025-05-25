"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          SneakSwash
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
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
            <Link href="/book">Book Now</Link>
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
            <SheetContent side="left" className="p-4 space-y-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block text-lg"
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="block text-lg"
              >
                Services
              </Link>
              <Link
                href="/pricing"
                onClick={() => setIsOpen(false)}
                className="block text-lg"
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
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-lg"
              >
                Contact
              </Link>
              <Button asChild className="w-full">
                <Link href="/book" onClick={() => setIsOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
