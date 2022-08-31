import React, { useEffect } from 'react'
import {useNavigate } from "react-router-dom";
import { Container, ProgressBar } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getApplicationData } from '../../Redux/ApplicationSlice'
import { decodeToken } from "react-jwt";
import { useCookies } from 'react-cookie'

function ViewStatus() {
    const navigate = useNavigate() ;
    const [cookies, setCookie, removeCookie] = useCookies([]);

    
        const user = decodeToken(cookies.user)
        console.log(user,"======usser");
        
        const dispatch = useDispatch()
        const applicationData = useSelector((state) => state.application)
        
       
     
    let app = applicationData.data.filter ((item) =>{
        return item.userId == user.id
    })
    console.log(applicationData.data,"---app");



   


    useEffect(() => {

       

        dispatch(getApplicationData())
      
    }, [dispatch])

    //const user = decodeToken(cookies.jwt)
   
      useEffect(() => {

    const verifyUser = async()=>{
      if(cookies.user) {
       navigate('/status')
      }else {
        navigate('/')
      }
    }
      verifyUser()
}, []);



    return (

        <Container className='mt-5 pt-5'>

            <h3>Application Status</h3>
            <div className='row_posters'>
                <Table striped bordered hover className='mt-5'>
                    <thead>
                        <tr className='text-center'>

                            <th>Company Name</th>
                            <th>Company Email</th>


                            <th>
                                <div className='d-flex justify-content-around'>
                                    <p>Registration Submited</p>
                                    <p>Under Proccess</p>
                                    <p>Approved / Declined</p>
                                </div>
                            </th>





                        </tr>
                    </thead>
                    <tbody>
                        {app &&
                            app.map((item, index) => {
                               
                                   
                                    return (
                                        <tr className='text-center' key={item._id}>

                                            <td>{item.name}</td>
                                            <td>{item.email}</td>




                                            {/* <td><ProgressBar variant="info" now={90}  */}
                                            <td><ProgressBar style={{ height: 10 }}
                                                // variant = { item.status === 'New' ? "info" : item.status === 'Pending' ? "warning" : "success" }
                                                variant={item.status === 'New' ? "info" : item.status === 'Pending' ? "warning" : item.status === "Approved" ? "success" : "danger"}
                                                now={item.status === 'New' ? 30 : item.status === 'Pending' ? 70 : 100}
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

export default ViewStatus