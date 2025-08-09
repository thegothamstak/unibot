import { FaRobot, FaTwitter, FaReddit, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-md font-semibold">
                AI
              </div>
              <h2 className="text-xl font-bold text-blue-500">UniBot</h2>
            </div>
            <p className="text-gray-500 text-sm">
              Empowering students with intelligent assistance for a better university experience
            </p>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-black mb-2">Product</h3>
            <ul className="space-y-1 text-gray-500 text-sm">
              <li>
                <Link href="" className="hover:text-blue-600">Features</Link>
              </li>
              <li>
                <Link href="" className="hover:text-blue-600">Pricing</Link>
              </li>
              <li>
                <Link href="" className="hover:text-blue-600">Demo</Link>
              </li>
              <li>
                <Link href="" className="hover:text-blue-600">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-black mb-2">Company</h3>
            <ul className="space-y-1 text-gray-500 text-sm">
              <li>
                <Link href="" className="hover:text-blue-600">About</Link>
              </li>
              <li>
                <Link href="" className="hover:text-blue-600">Careers</Link>
              </li>
              <li>
                <Link href="" className="hover:text-blue-600">Contact</Link>
              </li>
              <li>
                <Link href="" className="hover:text-blue-600">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-black mb-2">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4 text-gray-500">
              <a href="https://x.com" className="hover:text-blue-600">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="https://reddit.com" className="hover:text-blue-600">
                <FaReddit className="text-2xl" />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-600">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://gmail.com" className="hover:text-blue-600">
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 my-6"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm space-y-4 md:space-y-0">
          <p>&copy; 2024 UniBot. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="" className="hover:text-blue-600">Privacy Policy</Link>
            <Link href="" className="hover:text-blue-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}