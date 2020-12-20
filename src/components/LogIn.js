import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, Container, Form} from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom';


const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState(" ")
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
       
        try {
            setError('');
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/")
        } catch {
            setError("Failed to Sign In")
        }
        setLoading(false)


    }

    return (

        <Container text style={{ marginTop: "20px" }}>
                    <Card.Group centered items>
                        <Card>
                            <Card.Content>
                                <Card.Header>Log In</Card.Header>
                               
                                {error ? <p color="#CC7B29">{error}</p>:null}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Field>
                                        <label>Email</label>
                                        <input type="email" id="email" ref={emailRef} required />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Password</label>
                                        <input type="password" id="password" ref={passwordRef} required />
                                    </Form.Field>
                                    
                                    <Form.Button disabled={loading}>Log In</Form.Button>
                                </Form>
                                <div>Need an Account? <Link to="/signUp">Sign Up</Link> </div>
                            </Card.Content>
                        </Card>
                        </Card.Group>
                        



        </Container>





    )
}

export default Login;