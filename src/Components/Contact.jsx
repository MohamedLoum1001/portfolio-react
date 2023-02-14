import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Kande from "../Assets/kande1.png";

const Contact = () => {
    return (
        <section id='contact' className='contact'>
            <div className="container">
                <div className="text-center">
                    <h1 className='fs-1 fw-bold'>RESTONS EN CONTACT</h1>
                </div>
                <div className="row g-3 my-5 justify-content-center">
                    <div className="col-md-6">
                        <div className="formulaire">
                            <Form>

                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Control type="text" className='form-control  border-bottom border-secondary-subtle' placeholder='Prénom' />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicText" >
                                    <Form.Control type="text" className='form-control border-bottom border-secondary-subtle' placeholder='Nom' />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={3} placeholder="Votre message" className='textarea border border-dark' />
                                </Form.Group>

                                <div className="bouton mx-auto d-flex justify-content-end align-items-end">
                                    <Button type="submit" className='btn'>ENVOYEZ </Button>
                                </div>
                            </Form>

                        </div>

                    </div>

                    <div className="col-md-6">
                        <div className="bouton1 mx-auto d-none d-lg-flex  justify-content-center align-items-center mt-4">
                            <Button type="submit" className='btn1'>ENVOYEZ </Button>
                        </div>
                        <div className="img">
                            <img src={Kande} alt="Kande" className="img-fluid mx-auto" />
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Contact
