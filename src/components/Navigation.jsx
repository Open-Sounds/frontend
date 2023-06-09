import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Open Sounds</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
                <Link to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='/playlist'>Playlist</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='/'>Artists</Link>    
            </Nav.Link>
            <Nav.Link>
                <Link to='/'>Top Artists</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='/'>Top Charts</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { Navigation };