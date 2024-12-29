import React, { useRef, useState } from 'react'
import { Card,Button,Form, Alert,Container } from 'react-bootstrap'
import { useauth } from './context/authcontext'
import { Link,useNavigate   } from 'react-router-dom'

export default function Loginer() {
    const emailRef=useRef()
    const passwordRef=useRef()
    const {login} = useauth()
    const [error,seterror]= useState("")
    const [loading ,setloading] =useState(false)
    const navigate=useNavigate()
    

  const handlesubmit= async (e)=>{
    e.preventDefault()

  
    try {
      seterror("")
      setloading(true)
      await login(emailRef.current.value,passwordRef.current.value)
      navigate('/dashbaord')

    } catch (error) {
      seterror("failed to login")
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
            <h2 className='text-center mb-4'>Login</h2>
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
                
                <Button disabled={loading} type='submit' className='w-100 mt-4' >Login</Button>
            </Form>

        </Card.Body>
      </Card>

      <div className='w-100 text-center mt-2'>
       Need  an account? <Link to="/signup">Sign Up</Link>
      </div>
      </div>
      </Container>
    </>
  )
}
