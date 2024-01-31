import * as React from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/Navbar'
import NavLink from 'react-bootstrap/NavLink';
import MySearchComponent from './MySearchComponent';


const NavigationBar = ({ data, setData }) => {

    return (
        <>
            <NavBar bg="primary" data-bs-theme="dark">
                <Container>
                    <NavBar.Brand href="/">Navbar</NavBar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {/* <Nav.Link href=''></Nav.Link>
                        <Nav.Link></Nav.Link> */}
                    </Nav>
                </Container>

                <MySearchComponent />
            </NavBar>
        </>
    )
}

export default NavigationBar;