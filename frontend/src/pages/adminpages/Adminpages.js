import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import ApplicationListPage from './ApplicationListPage'
import BookingslotPage from './BookingslotPage'
import RecordListPage from './RecordListPage'
import ViewUsersPage from './ViewUsersPage'

function AdminPage() {
  return (
    <>
    

    <Routes>

      <Route exact path="/" element={<ViewUsersPage/>} />
      <Route exact path="/adminpanel" element={<ApplicationListPage/>} />
      <Route exact path="/recordlist" element={<RecordListPage/>} />
      <Route exact path="/bookingslots" element={<BookingslotPage/>} />
      


      </Routes>
    
    </>
  )
}

export default AdminPage