
import React,{useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Fullstack() {
     const [showPopup, setShowPopup] = useState(false);
    return (
        <div>
            <div className='coursedetal'>
                <div>
                    <h1>Full Stack Developer Course</h1>
                    <p>100% Job Guarantee</p>
                </div>

                <div className="course-syllabus">
                    <h3>Course Syllabus</h3>
                    <div className="course-section">
                        <div>
                            <h5>Frontend</h5>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Bootstrap</p>
                            <p>JavaScript</p>
                            <p>Angular JS, React JS</p>
                        </div>

                        <div>
                            <h5>Backend</h5>
                            <p>Java</p>
                            <p>Express.js</p>
                            <p>MongoDB</p>
                            <p>SQL</p>
                            <p>Node.js</p>
                        </div>
                    </div>
                    <h3 className='mt-4'>Rs.45,000.00</h3>
                    <div><button className='coursedetailsbtn mt-3' onClick={() => setShowPopup(true)}>Register</button></div>
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

export default Fullstack;
