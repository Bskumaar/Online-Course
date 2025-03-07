import React from 'react'
import "../css/portal/Class.css";
function Class1() {
    return (
        <div>
            <div className='classtype'>
                <div className='classnames'>
                    <h2>Frontend Development</h2>
                    <h4>Class-1</h4>
                    <table className='classtable'>

                        <tr>
                            <td>Next Class</td>
                            <td>01-02-2025</td>
                        </tr>

                        <tr>
                            <td>    Time</td>
                            <td>8 am to 9 am</td>

                        </tr>
                        <tr>
                            <td> Contents: </td>
                            <td>HTML -  Elements, Tags, Text , Formatting.</td>


                        </tr>


                        <button className='classplay'>Play Recording</button>


                    </table>
                </div>
            </div>

        </div>
    )
}

export default Class1
