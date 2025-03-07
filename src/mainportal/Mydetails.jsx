import React from 'react'
import "../css/portal/Mydetails.css";
function Mydetails() {
    return (
        <div>
            
            <div className='mydetails mt-5'>
            <h1 className='text-center'>My Details</h1>
                <div className=' detailname'>
                    <table className='detailstable'>
                        <tr>
                            <td>Name:</td>
                            <td>Sureshkumar B</td>
                        </tr>

                        <tr>
                            <td>    Mobile No:</td>
                            <td>9047720775</td>

                        </tr>
                        <tr>
                            <td>  Qualification: </td>
                            <td>Bsc visual communication</td>

                        </tr>
                        <tr>
                            <td>  Year of Passing: </td>
                            <td>2010</td>

                        </tr>
                        <tr>
                            <td>  Gmail:  </td>
                            <td>bskumaar88@gmail.com</td>

                        </tr>
                        <tr>
                            <td>  Github URL:  </td>
                            <td>None</td>

                        </tr>
                        <tr>
                            <td>  Resume URL: </td>
                            <td>None</td>

                        </tr>
                    </table>


                </div>
            </div>
            <div className='mydetails'>
            <h1 className='text-center'>Course Details</h1>
                <div className=' detailname'>
                    <table className='detailstable'>
                        <tr>
                            <td>My Course:</td>
                            <td>Frontend development</td>
                        </tr>

                        <tr>
                            <td> Starting Date:</td>
                            <td>01-02-2025</td>

                        </tr>
                        <tr>
                            <td>  Time </td>
                            <td>8 am to 9am</td>

                        </tr>
                        <tr>
                            <td>  Trainer: </td>
                            <td>SivaRaman</td>

                        </tr>
                        <tr>
                            <td>  Batch:  </td>
                            <td>FD-20</td>

                        </tr>
                      
                    </table>


                </div>
            </div>

        </div>
    )
}

export default Mydetails

