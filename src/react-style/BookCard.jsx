import {Card, Row, Col, Container, Button} from "react-bootstrap";
import thelovehypothesis from '../assets/thelovehypothesis.jpg'
import betterthanthemovies from '../assets/betterthanthemovies.jpg'
import thespanishlovedeception from '../assets/thespanishlovedeception.jpg'
import mydecemberdarling from '../assets/mydecemberdarling.jpg'
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function BookCard(){
    const {addToCart} = useContext(CartContext);
    return(
        <Container className="mt-4" id="books">
            <Row>
                <Col md={3}>
                    <Card>
                        <Card.Img src={betterthanthemovies} height="300" variant="top"/>
                        <Card.Body>
                            <Card.Title>Better Than The Movies</Card.Title>
                            <Card.Text>Author: Lynn Painter</Card.Text>
                            <Card.Text className="fs-5">Price: ₹450</Card.Text>
                            <Button variant="warning" onClick={() => addToCart("Better Than The Movies")}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card>
                        <Card.Img src={thelovehypothesis} height="300" variant="top"/>
                        <Card.Body>
                            <Card.Title>The Love Hypothesis</Card.Title>
                            <Card.Text>Author: Ali Hazelwood</Card.Text>
                            <Card.Text className="fs-5">Price: ₹499</Card.Text>
                            <Button variant="warning" onClick={() => addToCart("The Love Hypothesis")}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card>
                        <Card.Img src={thespanishlovedeception} height="300" variant="top"/>
                        <Card.Body>
                            <Card.Title>The Spanish Love Deception</Card.Title>
                            <Card.Text>Author: Elena Arams</Card.Text>
                            <Card.Text className="fs-5">Price: ₹550</Card.Text>
                            <Button variant="warning" onClick={() => addToCart("The Spanish Love Deception")}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card>
                        <Card.Img src={mydecemberdarling} height="300" variant="top"/>
                        <Card.Body>
                            <Card.Title>My December Darling</Card.Title>
                            <Card.Text>Author: Ana Huang</Card.Text>
                            <Card.Text className="fs-5">Price: ₹599</Card.Text>
                            <Button variant="warning" onClick={() => addToCart("My December Darling")}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}