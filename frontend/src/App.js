import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <main></main>
      </Container>
      <Footer />
    </>
  );
};

export default App;
