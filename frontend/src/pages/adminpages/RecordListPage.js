import React, { Fragment } from 'react'
import Navbar from '../../Components/Admin_panel/NavBar/Navbar'
import RecordList from '../../Components/Admin_panel/RecordTracker/RecordList'

function RecordListPage() {
  return (
    <Fragment>
        <Navbar/>
        <RecordList/>
    </Fragment>
  )
}

export default RecordListPage