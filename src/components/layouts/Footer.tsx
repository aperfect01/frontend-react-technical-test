import { NavLink } from "react-router-dom";
import { footerLinks } from "../../data/footer";

export const Footer = () => {
  return (
    <footer className="my-20 px-6 md:px-12 lg:px-0">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-10">
          {footerLinks.map((link) => (
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
        </div>
        <h5 className="font-bold text-center md:text-right text-sm md:text-base">
          © 2026 By Enative. All Rights Reserved.
        </h5>
      </div>
    </footer>
  );
};
