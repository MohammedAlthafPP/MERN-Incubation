import React, { useEffect } from 'react'
import { Container, ProgressBar } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import './RecordList.css'
import { useDispatch, useSelector } from 'react-redux'
import { getApplicationData, pendingStatus } from '../../../Redux/ApplicationSlice'


function RecordList() {

    const dispatch = useDispatch()
    const applicationData = useSelector((state) => state.application)
    //console.log(applicationData,"applicationData");


    useEffect(() => {

        dispatch(getApplicationData())
    }, [dispatch])
    

    return (
        <Container className='mt-5 pt-5'>

            <h3>RECORD LIST</h3>
            <div className='row_posters'>
                <Table striped bordered hover className='mt-5'>
                    <thead>
                        <tr className='text-center'>
                            <th>S.No</th>
                            <th>Company Name</th>
                            <th>Company Details</th>


                            <th>
                                <div className='d-flex justify-content-around'>
                                    <p>Registration Submit</p>
                                    <p>Under Proccess</p>
                                    <p>Approved / Declined</p>
                                </div>
                            </th>





                        </tr>
                    </thead>
                    <tbody>
                    {applicationData &&
                            applicationData.data.map((item, index) => {
                                
                                    return (
                                        <tr className='text-center' key={item._id}>
                                            <td>{index + 1}</td>
                                            <td>{item.companyname}</td>
                                            <td>{item.address}</td>




                                            {/* <td><ProgressBar variant="info" now={90}  */}
                                            <td><ProgressBar  style={{height:10}}  
                                            // variant = { item.status === 'New' ? "info" : item.status === 'Pending' ? "warning" : "success" }
                                            variant = { item.status === 'New' ? "info" : item.status === 'Pending' ? "warning" : item.status === "Approved" ? "success" : "danger"  }
                                            now = { item.status === 'New' ? 30 : item.status === 'Pending' ? 60 : 100 }
                                            // now = { item.status === 'New' ? 37 : item.status === 'Pending' ? 70 : 100 }


                                            /></td>
                                        </tr>
                                    );
                              
                                })}
                            

                    </tbody>
                        
                </Table>
                </div>
        </Container>
    )
}

export default RecordList