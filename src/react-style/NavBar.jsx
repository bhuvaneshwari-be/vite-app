import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
export default function NavBar(){
    const {cart} = useContext(CartContext);

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Book Haven</Navbar.Brand>

                <Nav>
                    <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/books">Books</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                    <Nav.Link as={NavLink} to="/cart">Cart({cart.length})</Nav.Link> 
                </Nav>
            </Container>
        </Navbar>
    )
}