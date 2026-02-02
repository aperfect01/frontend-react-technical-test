import { NavLink } from "react-router-dom";
import { navigationLinks } from "../../data/navigation";
import { Button } from "../common/Button";

export const Header = () => {
  return (
    <header className="bg-transparent py-10">
      <div className="flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold">My Website</h1>
        <div className="space-x-20">
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
        </div>
        <Button label="Get Started" onClick={() => alert("Button Clicked!")} />
      </div>
    </header>
  );
};
