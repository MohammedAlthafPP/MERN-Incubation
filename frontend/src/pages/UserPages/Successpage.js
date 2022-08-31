import React from 'react'
import {Link} from 'react-router-dom'
function SuccessPage() {
  return (
    <div className='d-flex  justify-content-center align-items-center' style={{width:"100%", height:"100%"}}>
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <h3 className='mt-5'>Your Response Has Been Submited</h3>
        <Link to="/status">
        <button className='btn btn-primary'>View Status</button>
        </Link>
    </div>
    </div>
  )
}

export default SuccessPage