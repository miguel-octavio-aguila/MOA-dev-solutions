import React from 'react'; // Importa React para forwardRef
import { Navbar, Nav, Container } from 'react-bootstrap';

// 1. Envuelve tu componente en React.forwardRef
const Header = React.forwardRef((props, ref) => {
    
    // 2. Quitamos toda la lógica de useLayoutEffect, gsap, y ScrollTrigger
    
    return (
        // 3. Asigna la 'ref' recibida al elemento <header>
        <header className="header" ref={ref}>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className="logo-navbar change-section">MOA</Navbar.Brand>
                    <Navbar.Toggle 
                        aria-controls="navbarSupportedContent" 
                        className="change-section" 
                    />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="navbar-nav">
                            <Nav.Link href="#" className="nav-a change-section" style={{ color: 'var(--font-color-tertiary)' }}>Inicio</Nav.Link>
                            <Nav.Link href="#" className="nav-a change-section" style={{ color: 'var(--font-color-tertiary)' }}>Conócenos</Nav.Link>
                            <Nav.Link href="#" className="nav-a change-section" style={{ color: 'var(--font-color-tertiary)' }}>Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <button className="language-btn change-section">ESP | EN</button>
                </Container>
            </Navbar>
        </header>
    );
});

export default Header;