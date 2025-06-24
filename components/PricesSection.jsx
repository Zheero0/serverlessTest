"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { db, collection, getDocs } from "../firebase/config";
import Spinner from './Spinner'
import PricePlan from './PricePlan'

const PricesSection = () => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const pricesCol = collection(db, "pricing");
        const pricesSnapshot = await getDocs(pricesCol);
        if (pricesCol.size < 0) {
          console.log("No prices were found");
        }
        console.log("Firestore docs count:", pricesSnapshot.size);

        const pricesList = pricesSnapshot.docs.map((doc) => {
          console.log("Doc data:", doc.data());
          return { id: doc.id, ...doc.data() };
        });

        setPrices(pricesList);
      } catch (error) {
        console.error("Error fetching prices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  //loading state for prices
  if (loading)
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <Spinner />
        <p>Loading Prices...</p>
      </div>
    );

  return (
    <main className="container mx-auto px-4 py-8">
      <PricePlan prices={prices} />
    </main>
  );
}

export default PricesSection;