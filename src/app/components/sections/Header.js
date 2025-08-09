import SmoothLink from "../commons/SmoothLink";

export default function Header() {
  return (
    <header className="bg-gray-100 p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-semibold">
            AI
          </div>
          <h1 className="text-2xl font-bold text-blue-500">UniBot</h1>
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-600">
          <li>
            <SmoothLink href="#featuresSection" className="hover:text-blue-600">
              Features
            </SmoothLink>
          </li>
          <li>
            <SmoothLink href="#aboutSection" className="hover:text-blue-600">
              About
            </SmoothLink>
          </li>
          <li>
            <SmoothLink href="#contactSection" className="hover:text-blue-600">
              Contact
            </SmoothLink>
          </li>
        </ul>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold cursor-pointer hover:bg-green-500"
        >
          Get Started
        </button>
      </nav>
    </header>
  );
}
