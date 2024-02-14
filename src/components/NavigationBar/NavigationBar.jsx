import * as React from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavLink from 'react-bootstrap/NavLink';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';


const NavigationBar = () => {

    return (
        <>
            <Navbar sticky='top' bg='dark' variant='dark' className="mb-4">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to='/'>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/playlist'>Playlist</Link>
                        </Nav.Link>
                        {/*<Nav.Link></Nav.Link> */}
                    </Nav>

                    <SearchBar />
                </Container>

            </Navbar>
        </>
    )
}

export default NavigationBar;