import { FaComment, FaUsers, FaBolt } from "react-icons/fa";
import FeatureCard from "../commons/FeatureCard";

export default function Features() {
  return (
    <section id="featuresSection" className="py-10 md:py-20 md:px-40 bg-gradient-to-r from-blue-400 to-blue-500">
      <div className="container mx-auto px-4 md:px-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What UniBot does ?</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            Icon={FaComment}
            title="Instant Answers"
            description="Get immediate responses to your academic and campus questions"
          />
          <FeatureCard
            Icon={FaUsers}
            title="Academic Support"
            description="Access personalized resources and study tips tailored to your needs"
          />
          <FeatureCard
            Icon={FaBolt}
            title="24/7 Guidance"
            description="Receive round-the-clock assistance for all your university queries"
          />
        </div>
      </div>
    </section>
  );
}

// import { FaComment, FaUsers, FaBolt } from "react-icons/fa";

// export default function Features() {
//   return (
//     <section className="py-12 bg-gradient-to-b from-white to-gray-100">
//       <div className="container mx-auto px-4 md:px-16">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Why Choose UniBot?</h2>
//         <div className="relative flex flex-col space-y-12 md:space-y-16">
//           <div className="flex items-start space-x-4 animate-slide-right">
//             <div className="flex-shrink-0">
//               <FaComment className="text-5xl text-blue-600" />
//               <div className="hidden md:block absolute left-6 w-1 h-full bg-blue-200 top-12" />
//               <div className="hidden md:block absolute left-4 w-4 h-4 bg-blue-600 rounded-full -ml-2 mt-2" />
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">Instant Answers</h3>
//               <p className="text-base text-gray-600">
//                 Get immediate responses to your academic and campus questions
//               </p>
//             </div>
//           </div>
//           <div className="flex items-start space-x-4 animate-slide-right">
//             <div className="flex-shrink-0">
//               <FaUsers className="text-5xl text-purple-600" />
//               <div className="hidden md:block absolute left-6 w-1 h-24 bg-purple-200 top-12" />
//               <div className="hidden md:block absolute left-4 w-4 h-4 bg-purple-600 rounded-full -ml-2 mt-2" />
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">Personalized Support</h3>
//               <p className="text-base text-gray-600">
//                 Tailored guidance based on your academic journey and interests
//               </p>
//             </div>
//           </div>
//           <div className="flex items-start space-x-4 animate-slide-right">
//             <div className="flex-shrink-0">
//               <FaBolt className="text-5xl text-teal-600" />
//               <div className="hidden md:block absolute left-4 w-4 h-4 bg-teal-600 rounded-full -ml-2 mt-2" />
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">Always Available</h3>
//               <p className="text-base text-gray-600">
//                 24/7 accessibility whenever you need academic assistance
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client"
// import { useState, useEffect } from "react";
// import { FaComment, FaUsers, FaBolt } from "react-icons/fa";

// export default function Features() {
//   const features = [
//     {
//       icon: <FaComment className="text-5xl text-blue-600 mx-auto mb-4" />,
//       title: "Instant Answers",
//       description: "Get immediate responses to your academic and campus questions",
//     },
//     {
//       icon: <FaUsers className="text-5xl text-purple-600 mx-auto mb-4" />,
//       title: "Personalized Support",
//       description: "Tailored guidance based on your academic journey and interests",
//     },
//     {
//       icon: <FaBolt className="text-5xl text-teal-600 mx-auto mb-4" />,
//       title: "Always Available",
//       description: "24/7 accessibility whenever you need academic assistance",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [features.length]);

//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-4 md:px-16">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Discover UniBot</h2>
//         <div className="relative">
//           <div className="flex flex-col md:flex-row md:justify-center md:space-x-0 overflow-hidden">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className={`flex-1 text-center p-6 border-l-4 border-blue-500 bg-opacity-50 bg-white transition-opacity duration-500 ${
//                   index === currentIndex ? "opacity-100" : "opacity-0 hidden md:block"
//                 }`}
//               >
//                 {feature.icon}
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
//                 <p className="text-base text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-center space-x-4 mt-6 md:hidden">
//             {features.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full ${
//                   index === currentIndex ? "bg-blue-600" : "bg-gray-400"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }