import * as React from 'react'
import Seo from "./seo"
import 'bootstrap/dist/css/bootstrap.min.css'
import  '../styles/layout.scss'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'

const Layout = ({ pageTitle, pageDescription, pageName, pageClass, navStyle="dark", children }) => {

    return (

        <main className={pageClass}>
            <Seo title={pageTitle} description={pageDescription}/>
            <Navbar variant={navStyle} expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        Tooth & Keys
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/photography">Photography</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="main-content">
                {children}
            </div>
        </main>
    )
}

export default Layout