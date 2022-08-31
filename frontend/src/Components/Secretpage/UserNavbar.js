import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useCookies } from 'react-cookie';
import {Link, useNavigate} from 'react-router-dom'

function UserNavbar() {
    const navigate = useNavigate()
    const [cookies,setCookie,removeCookie]= useCookies([])
    const logOut= ()=>{
        removeCookie("user")
          navigate("/")
      }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/homepage">User</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          <Nav.Link href="/status">Check Status</Nav.Link>
            
          </Nav>
          <Nav>
          
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="outline-light" className='text-info' onClick={logOut} >LOG OUT</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UserNavbar;