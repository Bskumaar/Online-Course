import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import qur from '../assets/qur.jpg'
import "../css/portal/Query.css";

function Queries() {
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState('');
  const [query, setQuery] = useState('');
  const [queryList, setQueryList] = useState([]);
  
  const handleSubmit = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString(); // Get date & time in readable format
  // Create new query object
  const newQuery = {
    description,
    query,
    timestamp: formattedDate
  };
  
 // Append new query to existing list
 setQueryList([...queryList, newQuery]);

 // Clear input fields & close modal
 setDescription('');
 setQuery('');
 setShow(false);
};
  return (
    
    <div className='mt-5'> 
    <div className='mydetails '>
            <h1 className='text-center mb-4'>My Details</h1>
                <div className=' detailname'>
           <div className='d-flex justify-content-center'>        {/* Button to open popup */}
      <button className='querybtn' onClick={() => setShow(true)}>+Create Query</button>
      </div>
      {/* Bootstrap Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create a Query</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalbody'>
        {/* <label>Description</label> */}
          <input 
          type="text"
          className="form-control" 
          placeholder=" Description"  
          value={description}
          onChange={(e) => setDescription(e.target.value)} /> 
          {/* <label>Enter your Queries</label> */}
          <textarea 
          className="form-control"  
          placeholder=" Enter your Queriestion"  
          value={query}
          onChange={(e) => setQuery(e.target.value)}></textarea>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
          {/* Display submitted data */}
          <div className="mt-3">
        <h5>Submitted Queries:</h5>
        {queryList.length === 0 ? (
                <div className="text-center">
                <img src={qur} alt="No queries" className="img-fluid qurno" />
                <h3>No queries submitted yet.</h3>
              </div>
        ) : (
          <ul className="listgroup">
            {queryList.map((item, index) => (
              <li key={index} className="queryitem">
                <strong>{"Query Heading:   "+item.description}</strong>
                <p>{"Queries :   "+item.query}</p>
                <small className="text-muted">Submitted on: {item.timestamp}</small>
              </li>
            ))}
          </ul>
        )}
    </div> 
                  


                </div>
            </div>
      </div>
  

  
  );
}

export default Queries;

