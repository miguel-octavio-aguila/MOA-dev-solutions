import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Header() {
    const headerRef = useRef(null);

    // Animación específica del Header para el cambio de color
    useLayoutEffect(() => {
        // Es buena práctica "limitar" el alcance de los selectores de GSAP
        // al componente actual usando .querySelectorAll o, mejor, refs.
        // Aquí usamos headerRef.current como el "scope"
        const changeSections = gsap.utils.toArray('.change-section', headerRef.current);

        const ctx = gsap.context(() => {
        gsap.to(changeSections, {
            scrollTrigger: {
            trigger: ".features", // El trigger puede ser global
            start: "7% top",
            onEnter: () => gsap.to(changeSections, { color: "black", duration: 0.2 }),
            onLeaveBack: () => gsap.to(changeSections, { color: "var(--font-color-tertiary)", duration: 0.2 }),
            },
        });
        }, headerRef); // <-- Alcance del contexto es el header

        return () => ctx.revert();
    }, []);

    return (
        // Usamos 'ref={headerRef}' para dárselo a GSAP
        <header className="header" ref={headerRef}>
            {/* Componentes de React-Bootstrap */}
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
}