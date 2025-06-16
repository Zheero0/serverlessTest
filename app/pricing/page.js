"use client";

import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../../firebase/config";
import Spinner from "@/components/Spinner";

export default function PricesPage() {
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

  // if (loading) return <p>Loading Prices...</p>;

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
      <h1 className="text-3xl font-bold mb-6">Our Prices</h1>
      <div className="grid gap-6">
        {prices.length > 0 ? (
          prices.map((price) => (
            <div key={price.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{price.name}</h2>
              <p>{price.description}</p>
              <p>£{(price.price / 100).toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p>No prices found.</p>
        )}
      </div>
    </main>
  );
}
