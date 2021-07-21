import * as React from 'react'
import Seo from "./seo"
import 'bootstrap/dist/css/bootstrap.min.css'
import  '../styles/layout.scss'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'

const Layout = ({ pageTitle, pageDescription, pageName, containerClass="container", navStyle="light", children }) => {

    return (

        <main className={pageName}>
            <Seo title={pageTitle} description={pageDescription}/>
            <Navbar bg={navStyle} variant={navStyle} expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        Doctor
                        ENgineer
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/photography">Photography</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className={containerClass}>
                <h1 className="page-title">{pageTitle}</h1>
                {children}
            </div>
        </main>
    )
}

export default Layout