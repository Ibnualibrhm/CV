import { Navbar, NavbarBrand, NavbarLink, NavbarToggle, NavbarCollapse } from "flowbite-react";
import { useState } from "react";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Navbar fluid rounded className="bg-white shadow-md border-b border-gray-200">
      <NavbarBrand href="/">
        <span className="self-center text-2xl font-semibold text-gray-800">
          CV
        </span>
      </NavbarBrand>
      <NavbarToggle
        onClick={() => setNavbarOpen(!navbarOpen)}
        aria-label="Toggle navigation"
      />
      <NavbarCollapse open={navbarOpen}>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 md:px-4">
          <NavbarLink href="/" active className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
            Home
          </NavbarLink>
          <NavbarLink href="#about" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
            About
          </NavbarLink>
          <div className="relative">
            <NavbarLink
              href="#services"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
              Services
            </NavbarLink>
            {/* Dropdown for mobile or hover */}
            <div className="absolute left-0 hidden bg-white border shadow-md w-40 mt-2 rounded-md group-hover:block">
              <NavbarLink href="#web" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Web Development
              </NavbarLink>
              <NavbarLink href="#design" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Design Services
              </NavbarLink>
              <NavbarLink href="#seo" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                SEO Services
              </NavbarLink>
            </div>
          </div>
          <NavbarLink href="#contact" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
            Contact
          </NavbarLink>
          <NavbarLink
            href="https://github.com/your-profile"
            target="_blank"
            className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
          >
            GitHub
          </NavbarLink>
        </div>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
