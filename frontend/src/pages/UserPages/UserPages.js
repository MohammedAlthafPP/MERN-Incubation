import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ViewStatusPage from './ViewStatusPage'




function UserPages() {
  return (
    <>
    

    <Routes>

      <Route exact path="/status" element={<ViewStatusPage/>} />
   
      


      </Routes>
    
    </>
  )
}

export default UserPages

