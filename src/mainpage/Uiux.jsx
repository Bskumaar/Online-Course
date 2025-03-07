import React,{useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Uiux() {
         const [showPopup, setShowPopup] = useState(false);
    return (
        <div>
            <div className='coursedetal'>
                <div>
                    <h1>UI\UX Designing Course</h1>
                    <p>100% Job Guarantee</p>
                </div>

                <div className="course-syllabus">
                    <h3>Course Syllabus</h3>
                    <div className="course-section">
                        <div>
                           
                            <p>Define</p>
                            <p> Research</p>
                            <p>Analysis & Planning</p>
                            <p>Prototyping</p>
                            <p>Testing</p>
                        </div>

                        <div>
                            <p>Figma</p>
                            <p>Adobe XD</p>
                            <p>Sketch</p>
                            <p>Marvel</p>
                            <p>Framer</p>
                            
                        </div>

                    
                    </div>
                    <h3 className='mt-4'>Rs.43,000.00</h3>
                    <div><button className='coursedetailsbtn mt-3'  onClick={() => setShowPopup(true)}>Register</button></div>
                </div>
            </div>
             {/* Bootstrap Modal */}
             <Modal show={showPopup} onHide={() => setShowPopup(false)} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Register</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Name *</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your name" required />
                                    </Form.Group>
            
                                    <Form.Group className="mb-3">
                                        <Form.Label>10 Digit Mobile No *</Form.Label>
                                        <Form.Control type="tel" placeholder="Enter your mobile number" maxLength="10" required />
                                    </Form.Group>
            
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email *</Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email" required />
                                    </Form.Group>
            
                                    <Form.Group className="mb-3">
                                        <Form.Label>Select Your City</Form.Label>
                                        <Form.Label>City *</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your City" required />
                                        
                                    </Form.Group>
            
                                    <Form.Group className="mb-3">
                                        <Form.Label>Message *</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
                                    </Form.Group>
            
                                    <Button variant="primary" className="w-100" onClick={() => setShowPopup(false)}>
                                        I'm Interested, Tell me more.
                                    </Button>
                                </Form>
                            </Modal.Body>
                        </Modal>
        </div>
    );
}

export default Uiux;
