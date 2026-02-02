import { LiaAtomSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import { navigationLinks } from "../../data/navigation";
import { Button } from "../common/Button";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-transparent py-4 md:py-6 md:px-0">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <LiaAtomSolid className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          <h1 className="text-2xl md:text-3xl font-bold">Website</h1>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-bold transition-colors ${
                  isActive ? "text-primary" : "text-black hover:text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Get Started button */}
        <Button
          label="Get Started"
          onClick={() => alert("Button Clicked!")}
          className="hidden md:block"
        />

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-bold transition-colors ${
                  isActive ? "text-primary" : "text-black hover:text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Button
            label="Get Started"
            onClick={() => alert("Button Clicked!")}
          />
        </div>
      )}
    </header>
  );
};
