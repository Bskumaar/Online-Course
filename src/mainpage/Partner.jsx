import React from 'react'
import zoho from '../assets/zoho.png'
import tcs from '../assets/tcs.png'
import cognizant from '../assets/cognizant.png'
import freshworks from '../assets/freshworks.png'
import accenture from '../assets/accenture.png'
import amazon from '../assets/amazon.png'
import hcl from '../assets/hcl.png'
import capgemini from '../assets/capgemini.png'
import tech from '../assets/tech.png'
import deloltte from '../assets/deloltte.png'
import infosys from '../assets/infosys.png'
import mindtree from '../assets/mindtree.png'
import paypal from '../assets/paypal.png'
import "../css/page/Partner.css";

function Partner() {
  
  return (
    <div className='company1 '>
        <h1>Hire Partner</h1>
     
        <div className=' mt-4 company2'>
        <img className='companys' src={zoho} alt=""  />  
        <img className='companys' src={tcs} alt="" />        
        <img className='companys' src={cognizant} alt="" />
        <img className='companys' src={infosys} alt="" />
        <img className='companys' src={accenture} alt="" />
        <img className='companys' src={amazon} alt="" />
        <img className='companys' src={hcl} alt="" />
        <img className='companys' src={capgemini} alt="" />
        <img className='companys' src={tech} alt="" />
       
        <img className='companys' src={freshworks} alt="" />
        <img className='companys' src={paypal} alt="" />
        
        </div>
       
    </div>
  )
}

export default Partner
