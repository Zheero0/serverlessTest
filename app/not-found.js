// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-5xl font-bold text-black mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you're looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="text-white bg-black px-6 py-2 rounded-full hover:bg-gray-800 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
