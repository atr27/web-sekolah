import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

    function Navigation () {
    return (
        <Navbar bg="light" variant="light" expand="lg">
        <Container>
            <Navbar.Brand href="#" style={{fontPalette:'dark'}}>WEBSITE SMK</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <NavDropdown title="Fasilitas" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Perpustakaan</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Koperasi</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                <Button variant="success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
  );
}

export default Navigation;
