import { Container } from "../components/layouts/Container";

const NotFoundPage = () => {
  return (
    <Container>
      <h1 className="text-4xl font-bold mb-4 text-center">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-center">
        The page you are looking for does not exist.
      </p>
    </Container>
  );
};

export default NotFoundPage;
