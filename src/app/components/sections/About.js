import { FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <section id="aboutSection" className="py-10 md:py-20 md:px-40 bg-gradient-to-r from-blue-400 to-blue-500 text-white">
      <div className="container mx-auto px-4 md:px-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">About UniBot</h1>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <img
              src="/images/about.avif"
              alt="UniBot interface on laptop"
              className="w-full h-auto rounded-lg border-4 border-white shadow-[2px_2px_4px_rgba(0,0,0,0.3)] hover:shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 text-center">
            <p className="text-lg mb-6">
              We are a passionate team dedicated to revolutionizing student life with UniBot, an intelligent chatbot designed to simplify university navigation. UniBot provides instant answers, personalized academic support, and 24/7 guidance, empowering students to focus on what matters most—their education and growth.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold cursor-pointer hover:bg-gray-400 hover:text-white inline-flex items-center space-x-2">
              <span>Learn More</span>
              <FaArrowRight className="text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}