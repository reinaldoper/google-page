"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const login = () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (token) {
        router.push("/dashboard");
      } else {
        router.push("/login");
      }
    };
    login();
  }, [router]);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {loading && (
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Loading...</h1>
      )}
    </div>
  );
}
