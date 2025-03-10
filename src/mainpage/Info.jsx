import React from 'react'
import "../css/page/info.css";

function Info({ massage, himage, list1, list2, list3 }) {
    return (
        <>
            <div className='info1'>
                <div className='infotext'>
                    <img className='rounded mx-auto d-block' src={himage} alt="" />
                    <h2 className='mt-3 text-center'>{massage}</h2>
                </div>
                <div className='mt-5'>
                    <ul>
                        <li className='h5'>{list1}</li>
                        <li className='h5'>{list2}</li>
                        <li className='h5'>{list3}</li>
                    </ul>
                </div>
            </div>

        </>


    )
}

export default Info
