import React,{ useState } from 'react'
import Frontend from './Frontend'
import Testing from './Testing';
import Fullstack from './Fullstack';
import Datascience from './Datascience'
import Uiux from './Uiux';
import "../css/page/Allcourse.css";


 


function Allcourse() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
  <>
    <div className='d-flex allcourse gap-5'>
        <button className='allcoursediv' onClick={() => setSelectedCourse('frontend')}>Frontent Developer</button>
        <button className='allcoursediv' onClick={() => setSelectedCourse('fullstack')}>Fullstack Development</button>
        <button className='allcoursediv' onClick={() => setSelectedCourse('datascience')}>Data Science</button>
        <button className='allcoursediv' onClick={() => setSelectedCourse('uiux')}>UI/UX</button>
        <button className='allcoursediv' onClick={() => setSelectedCourse('testing')}>Software Testing</button>
        <button className='allcoursediv'>Fullstack Development</button>    
        <div className='coursedetailsmain'>
        {selectedCourse === 'frontend' && <Frontend />}
        {selectedCourse === 'fullstack' && <Fullstack />}
        {selectedCourse === 'datascience' && <Datascience />}
        {selectedCourse === 'uiux' && <Uiux />}   
        {selectedCourse === 'testing' && <Testing />}
      </div>
    </div>
     </>
  )
}

export default Allcourse
