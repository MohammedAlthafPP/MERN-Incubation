import React, { Fragment } from 'react'
import Navbar from '../../Components/Admin_panel/NavBar/Navbar'
import View_Users from '../../Components/Admin_panel/View_Users'

function ViewUsersPage() {
  return (
    <Fragment>
        <Navbar/>
        <View_Users/>
    </Fragment>
  )
}

export default ViewUsersPage