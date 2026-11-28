import { Container, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <Container className="text-center mt-5">
            <h1>Welcome to Book Haven</h1>
            <p>Explore your favourite books</p>

            <Button as={Link} to="/books">View Books</Button>
        </Container>
    )
}