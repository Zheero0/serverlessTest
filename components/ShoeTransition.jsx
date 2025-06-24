"use client"
import { useState } from "react"
import Image from "next/image";


export default function ShoeTransition() {
    //init default state for pre clean shoe
    const [isShoeClean, setIsShoeClean] = useState(false);
    const [imageSrc, setImageSrc] = useState("/HeroImage1.jpg");
    
    const toggleSrc = () => {
        if (imageSrc === "/HeroImage1.jpg") {
            setImageSrc("/HeroImage2.jpg");
            setIsShoeClean(true);
        } else { 
            setImageSrc("/HeroImage1.jpg");
            setIsShoeClean(false)
        }


    }


    // div with 2 image src and title(for now with before clean and after)
    //onclick to toggle between state, invert bool val

    return (
        <div>
        <Image
          src={imageSrc}
          alt="Hero Sneaker Image"
          width={250}
          height={350}
          className="w object-contain rounded-2xl"
          priority
          onClick={toggleSrc}
            />
            <p>{isShoeClean ? "Before " :  "After "}</p>
      </div>
    );
}