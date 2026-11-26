import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavBar(){
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Book Haven</Navbar.Brand>

                <Nav>
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#books">Books</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}