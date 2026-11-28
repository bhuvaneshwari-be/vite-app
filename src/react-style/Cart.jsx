import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Container, Card, Button } from "react-bootstrap";


export default function Cart(){
    const {cart, removeFromCart, updateQuantity } = useContext(CartContext);
    

    return(
        <Container className="mt-4">
            <h2 className="text-center">My Cart</h2>

            {cart.length === 0 ? (
                <p className="text-center text-danger">Your Cart is empty!</p>
            ) : (
                cart.map((book,index) => (
                    <Card className="mt-3" key={index}>
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h5>{book.name}</h5>
                                    <Button variant="secondary" size="sm" onClick={() => updateQuantity(book.name, -1)}> - </Button>
                                    <span className="mx-3">{book.quantity}</span>
                                    <Button variant="secondary" size="sm" onClick={() => updateQuantity(book.name, 1)}> + </Button>
                                </div>

                                <Button variant="danger" size="sm" onClick={() => removeFromCart(book.name)}> Remove </Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))
            )}
        </Container>
    )
}