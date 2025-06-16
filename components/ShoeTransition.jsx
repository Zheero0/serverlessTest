"use client"
import { useState } from "react"
import Image from "next/image";


export default function ShoeTransition() {
    //init default state for pre clean shoe
    const [isShoeClean, setIsShoeCleanw] = useState(false);
    const [imageSrc, setImageSrc] = useState("/HeroImage1.jpg");
    
    const toggleSrc = () => {
        setImageSrc((prev) => {
            prev === "HeroImage1.jpg" ? "HeroImage2.jpg" : "HeroImage1.jpg";
        })


    }


    // div with 2 image src and title(for now with before clean and after)
    //onclick to toggle between state, invert bool val

    return (
        <div>
        <Image
          src={imageSrc}
          alt="Hero 21Sneaker Image"
          width={300}
          height={400}
          className="w-full h-auto object-contain rounded-2xl"
          priority
        />
      </div>
    );
}