"use client"
import Hero from "./components/sections/Hero";
import WaitlistForm from "./components/sections/WaitlistForm";
import Features from "./components/sections/Features";
import About from "./components/sections/About";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
  //  Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Hero />
      <Features />
      <About />
      <WaitlistForm />

      {/* Left - Bottom corner floating button to scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-white text-blue-600 w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}
