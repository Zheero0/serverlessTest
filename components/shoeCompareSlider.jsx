"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function ShoeCompareSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleDrag = (e) => {
    const bounds = containerRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const percent = (x / bounds.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, percent)));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-lg h-96 overflow-hidden cursor-ew-resize select-none"
      onMouseDown={(e) => {
        handleDrag(e);
        const moveHandler = (e) => handleDrag(e);
        const upHandler = () => {
          document.removeEventListener("mousemove", moveHandler);
          document.removeEventListener("mouseup", upHandler);
        };
        document.addEventListener("mousemove", moveHandler);
        document.addEventListener("mouseup", upHandler);
      }}
    >
      {/* Bottom (dirty) image */}
      <Image
        src="/HeroImage1.jpg"
        alt="Dirty shoes"
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        className="object-cover"
      />

      {/* Top (clean) image with clip */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <Image
          src="/HeroImage2.jpg"
          alt="Clean shoes"
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
        />
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-black shadow-md"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        <div className="h-full w-1 bg-black" />
      </div>
    </div>
  );
}   
