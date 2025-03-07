import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useNavigate } from 'react-router-dom';
import "../css/page/Appbar.css";



function Appbar() {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="custom-navbar ">
      <Container fluid>
        <Navbar.Brand href="#" className='navbar-brand'>Great Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto nav-links" >
            <Nav.Link href="#action1">9047720775</Nav.Link>
            <Nav.Link href="#action1">gratetech@gmail.com</Nav.Link>
         

          </Nav>
          <Form className="d-flex search-form">
            <Form.Control
              type="search"
              placeholder="Search..."
              className="search-input"
              aria-label="Search"
            />
            <Button variant="outline-light" className="search-btn">Search</Button>
          </Form>

          <button className="btn portal-btn" onClick={() => navigate('/login')}>Portal Login</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Appbar
