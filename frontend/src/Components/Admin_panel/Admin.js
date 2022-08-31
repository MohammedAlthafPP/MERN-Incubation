import React, { Fragment,useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import SideNavBar from './AdminSide-navbar/SideNavBar';
import Nav from './Admin_Navbar'
import Navbar from './NavBar/Navbar'
import ApplicationList from './ApplicationList/ApplicationList';
import View_Users from './View_Users'

function Admin() {
  const navigate = useNavigate() ;
  const [cookies,setCookie,removeCookie]= useCookies([])
  useEffect(() => {

    const verifyUser = async()=>{
      if(cookies.admin) {
       navigate('/admin')
      }else {
        navigate('/')
      }
    }
      verifyUser()
}, []);
  return (
    <Fragment>
        {/* <Nav/> */}
        {/* <SideNavBar/> */}
        <Navbar/>
        <ApplicationList/>
      
        <View_Users/>
    </Fragment>
  )
}

export default Admin