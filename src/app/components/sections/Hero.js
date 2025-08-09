import { FaArrowRight } from "react-icons/fa";
import SmoothLink from "../commons/SmoothLink";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white">
      <section className="py-8 md:py-20">
        <div className="container mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 order-2 md:order-1">
              <img
                src="/images/main.avif"
                alt="UniBot interface on laptop screen"
                className="mx-auto max-w-full md:max-w-3xl h-auto rounded-lg border-4 border-white shadow-[2px_2px_4px_rgba(0,0,0,0.3)] hover:shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 text-center order-1 md:order-2">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">Your Smart</h2>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">University Assistant</h2>
              <p className="text-lg sm:text-xl mb-8 max-w-lg mx-auto">
                Meet UniBot - the intelligent chatbot designed to help students navigate university life with ease. Get instant answers, academic support, and personalized guidance 24/7.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <SmoothLink 
                  href="#contactSection" 
                  className="bg-white text-blue-600 px-6 py-3 rounded font-semibold cursor-pointer hover:bg-gray-400 hover:text-white flex items-center justify-center space-x-2 w-full sm:w-auto"
                >
                  <span>Join Waitlist</span>
                  <FaArrowRight className="text-blue-600" />
                </SmoothLink>

                <button
                  className="bg-white text-blue-600 px-6 py-3 rounded font-semibold cursor-pointer hover:bg-gray-400 hover:text-white flex items-center justify-center space-x-2 w-full sm:w-auto"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}