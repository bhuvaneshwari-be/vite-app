import {Card, Row, Col, Container, Button} from "react-bootstrap";
import thelovehypothesis from '../assets/thelovehypothesis.jpg'
import betterthanthemovies from '../assets/betterthanthemovies.jpg'
import thespanishlovedeception from '../assets/thespanishlovedeception.jpg'

export default function BookCard(){
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
                            <Button variant="warning">Add to Cart</Button>
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
                            <Button variant="warning">Add to Cart</Button>
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
                            <Button variant="warning">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}