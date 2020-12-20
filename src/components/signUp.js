import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, Container, Form} from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState(" ")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("The Passwords Entered Do Not Match")
        }
        try {
            setError('');
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError("Failed to Create an Account")
        }
        setLoading(false)


    }

    return (

        <Container style={{ marginTop: "20px" }}>
           <Card.Group centered items>
                        <Card>
                            <Card.Content>
                                <Card.Header>Sign Up</Card.Header>
                               
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
                                    <Form.Field>
                                        <label>Password Confirmation</label>
                                        <input type="password" id="passwordConfirm" ref={passwordConfirmRef} required />
                                    </Form.Field>
                                    <Form.Button disabled={loading}>Sign Up</Form.Button>
                                </Form>
                                <div>Already have an Account? <Link to="/login">Log In</Link>    </div>
                            </Card.Content>
                        </Card>
                        
                        </Card.Group>
                        

        </Container>





    )
}

export default Signup;