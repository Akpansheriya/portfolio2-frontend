import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { ToastContainer, Zoom, toast } from 'react-toastify';
import Thanks from '../ThankYou/Thanks';
import axios from 'axios';

function PackageModal({show,handleClose}) {
    const [loading, setLoading] = useState()

  const [data, setData] = useState({
    name: "",
    email: "",
    technologies: "",
    message: "",
  });


  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const user = {
      name:data.name,
      email:data.email,
     technologies:data.technologies,
      message:data.message
    }

    axios.post("http://3.108.143.134:8000/works",user).then((res) => {
      setLoading(false)
     if(res.data){
        handleClose();
      toast(<Thanks/> , {
        position: "top-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
      })
      setData({
        name: "",
        email: "",
        technologies:"",
        message: "",
      })
     }
    }).catch((err) => {
      setLoading(false)
      toast(err.message , {
        position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
      })
    })
  }
  return (
    <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Drop A message For Discussion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          Name
        </Form.Label>
        <Col sm="9">
          <Form.Control value={data.name} onChange={handleChange} name="name" type="text" placeholder="Enter Your Name" required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          Email
        </Form.Label>
        <Col sm="9">
          <Form.Control value={data.email} onChange={handleChange} name="email" type="email" placeholder="Enter Your Email" required />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          Technologies
        </Form.Label>
        <Col sm="9">
          <Form.Control value={data.technologies} name="technologies" onChange={handleChange} type="text" placeholder="Enter Technologies " required />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label column sm="3">Message</Form.Label>
        <Col sm="9">
        
        <Form.Control value={data.message} name="message" onChange={handleChange} as="textarea" rows={3} required />
        </Col>
      </Form.Group>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Button target="_blank" rel="noopener noreferrer" style={{fontSize:"20px", fontWeight:"700"}} type='submit'>{loading ? "Wait..." : "Submit"} </Button>
      </div>
     
    </Form>
        </Modal.Body>
        
      </Modal>
      <ToastContainer
      transition={Zoom}
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>
  )
}

export default PackageModal