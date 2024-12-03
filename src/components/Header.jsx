import React from "react";

const Header = () => {
  return (
    <div id="header">
      <header className="flex justify-evenly items-center px-8 py-4 bg-white shadow-md">
        {/* Logo */}
        <div className="header-logo text-2xl font-bold">LOGO</div>

        {/* Navigation Links */}
        <nav className="header-links flex space-x-8">
          <a
            href="#process"
            className="relative text-gray-800 hover:after:w-full after:w-0 after:h-[2px] after:bg-gray-300 after:block after:transition-all after:duration-300 after:origin-left"
          >
            PROCESS
          </a>
          <a
            href="#projects"
            className="relative text-gray-800 hover:after:w-full after:w-0 after:h-[2px] after:bg-gray-300 after:block after:transition-all after:duration-300 after:origin-left"
          >
            PROJECTS
          </a>
          <a
            href="#team"
            className="relative text-gray-800 hover:after:w-full after:w-0 after:h-[2px] after:bg-gray-300 after:block after:transition-all after:duration-300 after:origin-left"
          >
            TEAM
          </a>
          <a
            href="#contact"
            className="relative text-gray-800 hover:after:w-full after:w-0 after:h-[2px] after:bg-gray-300 after:block after:transition-all after:duration-300 after:origin-left"
          >
            CONTACT
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
