import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="hidden space-x-8 text-sm font-medium text-gray-600 md:flex">
            <Link
              to="/"
              className="border-b-2 border-transparent px-1 pt-1 transition duration-150 hover:border-b-2 hover:border-indigo-600 px-1 pt-1 hover:text-indigo-600"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="border-b-2 border-transparent px-1 pt-1 transition duration-150 hover:border-indigo-600 hover:text-indigo-600"
            >
              About
            </Link>
            <Link
              to="/contact-us"
              className="border-b-2 border-transparent px-1 pt-1 transition duration-150 hover:border-indigo-600 hover:text-indigo-600"
            >
              Contact Us
            </Link>
            <Link
              to="/portofolio"
              className="border-b-2 border-transparent px-1 pt-1 transition duration-150 hover:border-indigo-600 hover:text-indigo-600"
            >
              Portofolio
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
