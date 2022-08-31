import React, { Fragment } from 'react'
import BookingSlots from '../../Components/Admin_panel/BookingSlot/BookingSlot'
import Navbar from '../../Components/Admin_panel/NavBar/Navbar'

function BookingslotPage() {
  return (
    <Fragment>
        <Navbar/>
        <BookingSlots/>

       
    </Fragment>
  )
}

export default BookingslotPage
