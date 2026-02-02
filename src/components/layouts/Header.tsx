import { navigationLinks } from "../../data/navigation";
import { Button } from "../common/Button";

export const Header = () => {
  return (
    <header className="bg-transparent py-10">
      <div className="flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold text-gray-800">My Website</h1>
        <div className="space-x-4">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
        <Button label="Get Started" onClick={() => alert("Button Clicked!")} />
      </div>
    </header>
  );
};
