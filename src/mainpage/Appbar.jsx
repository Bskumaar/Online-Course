import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import "../css/page/Appbar.css";

function Appbar() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#" className="navbar-brand">Great Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto nav-links">
            <Nav.Link href="#">📞 9047720775</Nav.Link>
            <Nav.Link href="#">✉️ greatech@gmail.com</Nav.Link>
          </Nav>
          
          {/* Updated Search Bar */}
          <Form className="search-form">
  <Form.Control type="search" placeholder="Search..." className="search-input" />
 
</Form>

          {/* Updated Login Button */}
          <button className="btn portal-btn" onClick={() => navigate('/login')}>Login →</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;
