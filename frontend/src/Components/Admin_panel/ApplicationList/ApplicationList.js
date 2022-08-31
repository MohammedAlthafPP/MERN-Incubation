import React,{useEffect,useState} from 'react'
import { Container, Button, Table } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getApplicationData, pendingStatus, approveStatus, declineStatus } from '../../../Redux/ApplicationSlice'
import ApplicationModal from '../Model/ApplicationModal'

function ApplicationList() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const applicationData = useSelector((state) => state.application)
    console.log(applicationData.data,"applicationData.data");



    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState([]);
    

    useEffect(() => {

        dispatch(getApplicationData())
    }, [])
    


    const handlePending = async (id) => {
        dispatch(pendingStatus(id))

    }
    const handleApprove = async (id) => {
        dispatch(approveStatus(id))

    }
    const handleDecline = async (id) => {
        dispatch(declineStatus(id))

    }
    const handleModalData = (id) => {
        setModalData(applicationData.data.filter((item) => item._id === id));
      };
      const handleModalOpen = (id) => {
        setShow(true);
        handleModalData(id);
      };
      const handleModalClose = () => {
        // setModalData({});
        setShow(false);
      };



    return (
        <>
       
        <ApplicationModal 
    show={show}
    handleModalClose={handleModalClose}
    modalData={modalData.length ? modalData[0] : {}}
    />

        <Container className='mt-5 pt-5'>

            <h3 className=''>NEW APPLICANT LIST</h3>
            <div className='row_posters'>
                <Table striped bordered hover className='mt-5   text-center mx-auto ' size="sm" >
                    <thead>
                        <tr className='text-center'>
                            <th>S.No</th>
                            <th>Company Name</th>
                            <th>Company Details</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                   


                        {applicationData &&
                            applicationData.data.map((item, index) => {
                                if (item.status === 'New') {
                                    return (
                                        <tr className='text-center' key={item._id}>
                                            <td>{index + 1}</td>
                                            <td>{item.companyname}</td>
                                            <td>{item.address}</td>
                                            <td><Button className='btn open-btn' onClick={() => handleModalOpen(item._id)}>Open</Button></td>
                                            <td><Button className='btn btn-warning ' onClick={() => handlePending(item._id)}>Pending</Button></td>
                                        </tr>
                                    );
                                } else {
                                    <tr>
                                        <td><h5>No Data</h5></td>
                                    </tr>
                                }
                            })}


                    </tbody>
                </Table>
            </div>


            {/* ========== PENDING APPLICANT LIST START ================= */}

            <h3 className='mt-5'>PENDING APPLICANT LIST</h3>
            <div className='row_posters '>
                <Table striped bordered hover className='mt-5 mb-5  text-center mx-auto' size="sm">
                    <thead>
                        <tr className='text-center'>
                            <th>S.No</th>
                            <th>Company Name</th>
                            <th>Company Details</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>


                        {applicationData &&
                            applicationData.data.map((item, index) => {
                                if (item.status === 'Pending' && item.status != 'Approved' && item.status != 'Declined') {

                                    return (
                                        <tr className='text-center' key={item._id}>
                                            <td>{index + 1}</td>
                                            <td>{item.companyname}</td>
                                            <td>{item.address}</td>
                                            {/* <td><Button className='btn btn-danger text-white  ms-2' >Open</Button></td> */}
                                            <td><button className='btn open-btn' onClick={() => handleModalOpen(item._id)}>Open</button> </td>


                                            <td >
                                                <button className='btn approve-btn' onClick={() => handleApprove(item._id)}>Approve</button> 
                                                {/* <h6>Approve</h6> */}
                                                </td>


                                            {/* <td><Button className='btn btn-secondary text-white  ms-2'>Decline</Button></td> */}
                                            <td><button className='btn decline-btn' onClick={() => handleDecline(item._id)}>Decline</button> </td>
                                        </tr>

                                    )
                                } else {
                                    <tr>
                                        <td><h5>No Data</h5></td>
                                    </tr>
                                }
                            })}
                    </tbody>
                </Table>

            </div>

        </Container>
        </>
    )
}

export default ApplicationList