import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container,Form, Button } from "react-bootstrap";

export default function Login(){
    const [username, setUsername] = useState()
    const navigate = useNavigate()

    function handleLogin(e){
        e.preventDefault();

        if(username !== ''){
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/books');
        }
    }

    return(
        <Container className="mt-5">
            <h2 className="text-center">Login</h2>

            <Form onSubmit={handleLogin}>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <Button type="submit" className="mt-3">
                    Login
                </Button>
            </Form>
        </Container>
    );
}