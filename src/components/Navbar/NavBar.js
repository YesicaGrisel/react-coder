
import  Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import CartWidget from "../CartWidget/CartWidget"
import './Navbar.css'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand  className="name" href="#home">Otakunu </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className="link" href="#features">Home</Nav.Link>
      <Nav.Link className="link" href="#pricing">Contacto</Nav.Link>
      <NavDropdown className="link" title="Stock" id="collasible-nav-dropdown">
        <NavDropdown.Item className="link" href="#action/3.1">Mangas</NavDropdown.Item>
        <NavDropdown.Item className="link" href="#action/3.2">Cosplay</NavDropdown.Item>
        <NavDropdown.Item className="link"  href="#action/3.3">Accesorios</NavDropdown.Item>
       
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets"><CartWidget/></Nav.Link>
   
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
  
}

export default NavBar