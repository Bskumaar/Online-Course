import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import "../css/portal/Portalnav.css";




function Portalnav() {

  const navigate = useNavigate(); 

  const handleLogout = () => {
   
    localStorage.removeItem('authToken');


    navigate('/');}
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
    <Container fluid>
      <Navbar.Brand  className="ms-3"  href="#">Great Tech</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="justify-content-end">
        <Nav        >
          <Nav.Link href="/">Home</Nav.Link>
       
         
        </Nav>
        

   
        <button className='btn btn-success' onClick={handleLogout}>Log Out</button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
  )
}

export default Portalnav
