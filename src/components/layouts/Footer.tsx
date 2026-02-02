import { NavLink } from "react-router-dom";
import { footerLinks } from "../../data/footer";

export const Footer = () => {
  return (
    <footer className="my-20">
      <div className="flex justify-between items-center px-4">
        <div className="space-x-10">
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
        <h5 className="font-bold">© 2026 By Enative. All Rights Reserved.</h5>
      </div>
    </footer>
  );
};
