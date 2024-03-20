import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-cyan-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Pokemon GO</div>
        <ul className="flex space-x-4">
          <li>
            <a
              className="hover:text-white hover:font-semibold text-slate-300"
              href="/"
            >
              Pokemon List
            </a>
          </li>
          <li>
            <a
              className="hover:text-white hover:font-semibold text-slate-300"
              href="/my-pokemon"
            >
              My Pokemon
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
