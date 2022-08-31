import React, { Fragment } from 'react'
import ApplicationList from '../../Components/Admin_panel/ApplicationList/ApplicationList'
import Navbar from '../../Components/Admin_panel/NavBar/Navbar'

function ApplicationListPage() {
  return (
    <Fragment>
        <Navbar/>
        <ApplicationList/>
    </Fragment>

    
  )
}

export default ApplicationListPage