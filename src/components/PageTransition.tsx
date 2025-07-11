"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Head from "next/head";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <header
        className={`sticky top-0 z-50 transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Navbar />
      </header>

      <main
        className={`transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </main>
    </>
  );
};

export default PageTransition;
