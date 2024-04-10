import {Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../components/menu.css'

const Menu = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home" className='logo'>Happy Cake</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-bar ms-auto">
                        <Link className='nav-item nav-link' to='/inicio'>Inicio</Link>
                        <Link className='nav-item nav-link' to='/contacto'>Contacto</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu
