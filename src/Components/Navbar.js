import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const categories = ["health", "technology", "sports", "science"];

export const Navbar_filter = ({ setCategory }) => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Health News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="me-auto"></div>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="text-black px-2 py-1 rounded"
          >
            {categories.map((cat) => {
              return (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              );
            })}
          </select>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
