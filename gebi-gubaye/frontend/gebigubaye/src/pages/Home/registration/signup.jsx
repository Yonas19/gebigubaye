import React, { useRef, useState } from 'react'
import { Card,Button,Form, Alert,Container } from 'react-bootstrap'
import { useauth } from './context/authcontext'
import { Link , useNavigate } from 'react-router-dom'
export default function Signuper() {
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordconfRef=useRef()
    const {signup} = useauth()
    const [error,seterror]= useState("")
    const [loading ,setloading] =useState(false)
    const navigate = useNavigate()
    

  const handlesubmit= async (e)=>{
    e.preventDefault()

    if (passwordRef.current.value !== passwordconfRef.current.value){
      return seterror("password do not much")
    }
    try {
      seterror("")
      setloading(true)
      await signup(emailRef.current.value,passwordRef.current.value)
      navigate("/login")

    } catch (error) {
      seterror("invalid registration")
      console.log(error);
    }
      setloading(false)
  }

  return (
    <> 
     <Container className='w-100 d-flex justify-content-center align-items-center ' style={{minHeight:"100vh"}}>
            <div  style={{maxWidth:"400px"}}>
      <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Sign Up</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handlesubmit}>
                <Form.Group id='email'>
                    <Form.Label> Email</Form.Label>
                    <Form.Control type='email' ref={emailRef} required/>
                </Form.Group>
                <Form.Group id='password'>
                    <Form.Label> Password</Form.Label>
                    <Form.Control type='password' ref={passwordRef} required/>
                </Form.Group>
                <Form.Group id='password confirmation'>
                    <Form.Label> Password confirmation </Form.Label>
                    <Form.Control type='password' ref={passwordconfRef} required/>
                </Form.Group>
                <Button disabled={loading} type='submit' className='w-100 mt-2' >Signup</Button>
            </Form>

        </Card.Body>
      </Card>

    

      <div className='w-100 text-center mt-4'>
       Already have an account? <Link to="/login">Sign In</Link>
      </div>
      </div>
      </Container>
          
    </>
  )
}
