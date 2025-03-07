import React from 'react'
import { useState } from 'react'
import Mydetails from './Mydetails'
import Class from './Class'
import Queries from './Queries'
import Task from './Task'
import Requirements from './Requirements'
import Submission from './Submission'
import Mock from './Mock'
import Certificate from './Certificate'
import Syllabus from './Syllabus'
import "../css/portal/Sidebar.css";
function Sidebar() {
  const [currentPage, setCurrentPage] = useState("mydetails")

  const renderPage = () => {
    switch (currentPage) {
      case "mydetails":
        return <Mydetails />
      case "class":
        return <Class />;
      case "queries":
        return <Queries />;
        case "task":
          return <Task />;
          case "requirements":
            return <Requirements />;
            case "Submission":
              return <Submission />;
              case "mock":
                return <Mock />;
                case "Certificate":
                  return <Certificate />;
                  case "Syllabus":
                    return <Syllabus />;
    }
  }
  return (
    <div className='d-flex'>
      <div 
      className='sidebar bg-dark  text-white'>
      <h3 className=' text-center pt-3'>Sureshkumar B</h3>
      <nav className="navlink">
        <button onClick={() => setCurrentPage("mydetails")} className='sidebarbtn'>My Details</button>
        <button onClick={() => setCurrentPage("class")} className='sidebarbtn'>Class</button>
        <button onClick={() => setCurrentPage("task")} className='sidebarbtn'>Task</button>
        <button onClick={() => setCurrentPage("queries")} className='sidebarbtn'>Queries</button>
       
        <button onClick={() => setCurrentPage("requirements")} className='sidebarbtn'>Requirements</button>
        <button onClick={() => setCurrentPage("Submission")} className='sidebarbtn'>Project Submission</button>
        <button onClick={() => setCurrentPage("mock")}  className='sidebarbtn'>Mock Interviews</button>
        <button onClick={() => setCurrentPage("Certificate")}  className='sidebarbtn'>Certicates</button>
        <button onClick={() => setCurrentPage("Syllabus")}  className='sidebarbtn'>Syllabus</button>
        </nav>
      </div>


      <div className="content p-4 " 
      style={{    
        marginLeft: "300px", 
        width: "calc(100% - 300px)", 
        minHeight: "100vh", 
        paddingTop: "70px"  }}>
        {renderPage()}
      </div>



    </div>
  )
}

export default Sidebar
