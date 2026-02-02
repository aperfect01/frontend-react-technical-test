import { Header } from "./Header";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="bg-secondary w-full overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        {children}
      </div>
    </div>
  );
};
