import world from "../assets/word.jpeg";
import { Container, Image } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <Image src={world} width="200px"></Image>
      <h1 className="my-2 font-monospace display-4 fw-bold">COUNTRIES</h1>
    </Container>
  );
};

export default Header;
