//Import Components
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Appbar from './mainpage/Appbar';
import Image from './mainpage/Image';
import Info from './mainpage/Info'
import Hairing from './mainpage/Hairing'
import Popularcourse from './mainpage/Popularcourse'
import Review from './mainpage/Review'
import Footer from './mainpage/Footer'
import frontend from './assets/frontend.jpg'
import fullstack from './assets/fullstack.jpg'
import data from './assets/data.jpg'
import uiux from './assets/uiux.jpg'
import Login from './mainportal/Login';
//image
import jobsearch from './assets/job search.png'
import hours from './assets/24 hours.png'
import suport from './assets/suport.png'
import stutent2 from './assets/stutent2.jpg'
import stutent3 from './assets/stutent3.jpg'
import stutent4 from './assets/stutent4.jpg'
import stutent5 from './assets/stutent5.jpg'
import stutent6 from './assets/stutent6.jpg'
import stutent7 from './assets/stutent7.jpg'
import stutent8 from './assets/stutent8.jpg'
import Allcourse from './mainpage/Allcourse';
import Partner from './mainpage/Partner';



function Home() {
  return (
    <>
  
      <Appbar />
      
      <Image />
      <div className='allcoursemain mt-5'>
      <Allcourse/>
      </div>
      <div className='mt-5'> 
        <h1>Trending Course</h1>
        <div className='ps-5 pe-5 d-flex container-fluid gap-5 mt-4'>
          <Popularcourse name="Frontend Development" img={frontend} />
          <Popularcourse name="Fullstack Development" img={fullstack} />
          <Popularcourse name="Data Scince" img={data} />
          <Popularcourse name="UI/UX" img={uiux} />
        </div>
      </div>

      <div className='container mb-5'>
        <div className='row mt-5   '>
          <div className='col-sm-4 '> <Info massage="600 + Hiring Partners" himage={suport} list1="1:1 Mentorship" list2="Resume Building & Mock Interview Prep" list3="Network with Peers & Interact with Industry Leaders" /> </div>
          <div className='col-sm-4 ' > <Info massage="10000 + Jobs in Top Companies" himage={jobsearch} list1="Fresher's " list2="Non-It To It" list3="Career Brack" /> </div>
          <div className='col-sm-4 '> <Info massage="24 x 7 Support" himage={hours} list1="Dedicated Learning Managers" list2="24*7 learning Support" list3="Network with Peers & Interact with Industry Leaders" /> </div>
        </div>
      </div>

      <div className='mt-5'> <h1>Placement Stutents</h1>
        <div className='ps-5 pe-5 d-flex container-fluid gap-5 mt-4'>
          <Hairing name="Ramesh" sub="Frontend" com="Zoho" lpa="5.5 LPA" img={stutent8} />
          <Hairing name="Ranjith" sub="FullStack" com="Tcs" lpa="4.6 LPA" img={stutent2} />
          <Hairing name="Hema" sub="Data Scince" com="Zoho" lpa="5.5 LPA" img={stutent3} />
          <Hairing name="Swtha" sub="FullStack" com="Hcl" lpa="4.4 LPA" img={stutent4} />
          <Hairing name="Arun" sub="UI/IX" img={stutent5} com="Paypal" lpa="6 LPA" />
          <Hairing name="Kiran" sub="Frontent" com="Infosys" lpa="5.2 LPA" img={stutent6} />
          {/* <Hairing name="Lohesh" sub="FullStack" com="capgemini" lpa="4.5 LPA" img={stutent7} />
         */}
        </div>
      </div>
      <div className='mt-5'>  <Partner/></div>
 

      {/* <div className='container-fluid review mb-5'>
        <div className='row mt-5    '>
          <div className='col-sm-4  '> <Review rev="ramesh,Chennai" para="Attending the one-month virtual Python programming course was a truly enriching experience. The course was well-structured, covering fundamental concepts like data types, loops, and functions, as well as more advanced topics such as object-oriented programming and working with libraries. The hands-on exercises and projects helped me solidify my understanding and gain confidence in coding." /> </div>
          <div className='col-sm-4 ' > <Review rev="ramu, Selam" para="I recently completed the one-month Java programming course offered by Besant Technology and had an outstanding learning experience. The comprehensive curriculum, engaging teaching style, and hands-on exercises made the course both informative and enjoyable. The instructor's expertise and support were exceptional, creating a conducive learning environment. I highly recommend this course to anyone interested in learning java and look forward to future courses from Besant Technology." /> </div>
          <div className='col-sm-4 '> <Review rev="velu,Mudhurai" para="N.Rahul Trainer -- I recently completed the one-month Full Stack programming course offered by Besant Technology and had an outstanding learning experience. The comprehensive curriculum, engaging teaching style, and hands-on exercises made the course both informative and enjoyable. The instructor's expertise and support were exceptional, creating a conducive learning environment. Although the pace was sometimes challenging for beginners, the interactive coding sessions and clear explanations helped solidify my understanding of full stack fundamentals." /> </div>

        </div>
      </div> */}

      <Footer />

    </>
  )
}

export default Home
