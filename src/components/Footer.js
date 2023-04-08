import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return(
    <Navbar bg='dark' variant='dark' className='mt-4'>
      <Container>
        <Navbar.Brand href="#home">WEBSITE SMK</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Copyright by Ahmad Taufik R <a href="#">2023</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Footer;