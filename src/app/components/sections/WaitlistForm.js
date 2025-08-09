// "use client";

// import { useState, useEffect } from "react";
// import { FaUser, FaEnvelope, FaUniversity } from "react-icons/fa";

// export default function WaitlistForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [university, setUniversity] = useState("");
//   const [toast, setToast] = useState(null);

//   useEffect(() => {
//     if (toast) {
//       const timer = setTimeout(() => setToast(null), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [toast]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name.trim() || !email.trim() || !university.trim()) {
//       setToast({ type: "error", message: "Please fill in all fields." });
//       return;
//     }

//     setToast({ type: "success", message: "Successfully joined the waitlist!" });

//     // Clear fields on success
//     setName("");
//     setEmail("");
//     setUniversity("");
//   };

//   return (
//     <section id="contactSection" className="bg-gray-200 py-16">
//       <div className="container mx-auto px-4 text-center relative">
//         {/* Toast */}
//         {toast && (
//           <div
//             className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded shadow-lg text-white font-semibold max-w-xs w-full z-50 ${
//               toast.type === "success" ? "bg-green-600" : "bg-red-600"
//             }`}
//           >
//             {toast.message}
//           </div>
//         )}

//         <h3 className="text-3xl sm:text-4xl font-bold text-black mb-4">
//           Be the First to Experience UniBot
//         </h3>
//         <p className="text-lg text-gray-600 mb-8">
//           Join our exclusive waitlist and get early access to the future of university assistance.
//         </p>

//         <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
//           <h4 className="text-2xl font-semibold text-black mb-2">Join the Waitlist</h4>
//           <p className="text-gray-600 mb-6">
//             Get notified when UniBot launches at your university
//           </p>

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div className="relative">
//               <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Your full name"
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>

//             <div className="relative">
//               <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="relative">
//               <FaUniversity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Your university name"
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={university}
//                 onChange={(e) => setUniversity(e.target.value)}
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//             >
//               Join Waitlist
//             </button>
//           </form>
//         </div>

//         <p className="text-gray-600 mt-8 text-lg">
//           Already <span className="font-bold text-blue-600">2,547</span> students waiting
//         </p>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaUniversity } from "react-icons/fa";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !university.trim()) {
      setToast({ type: "error", message: "Please fill in all fields." });
      return;
    }

    setToast({ type: "success", message: "Successfully joined the waitlist!" });

    // Clear fields on success
    setName("");
    setEmail("");
    setUniversity("");
  };

  return (
    <section id="contactSection" className="bg-gray-200 py-16">
      <div className="container mx-auto px-4 text-center relative">
        {/* Toast */}
        {toast && (
          <div
            className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded shadow-lg text-white font-semibold max-w-xs w-full z-50 ${
              toast.type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {toast.message}
          </div>
        )}

        <h3 className="text-3xl sm:text-4xl font-bold text-black mb-4">
          Be the First to Experience UniBot
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Join our exclusive waitlist and get early access to the future of university assistance.
        </p>

        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <h4 className="text-2xl font-semibold text-black mb-2">Join the Waitlist</h4>
          <p className="text-gray-600 mb-6">
            Get notified when UniBot launches at your university
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Your full name"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative">
              <FaUniversity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Your university name"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-600"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Join Waitlist
            </button>
          </form>
        </div>

        <p className="text-gray-600 mt-8 text-lg">
          Already <span className="font-bold text-blue-600">2,547</span> students waiting
        </p>
      </div>
    </section>
  );
}
