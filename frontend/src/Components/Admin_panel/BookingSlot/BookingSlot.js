import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./BookingSlot.css"
import { Box, Paper, Divider, Modal, Typography, FormControl, InputLabel, MenuItem, Select, Button } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import { GiLoad } from 'react-icons/gi'


function BookingSlots() {


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };




    useEffect(() => {

    }, [])

    const [slotA, setSlotA] = useState([])
    const [slotB, setSlotB] = useState([])
    const [slotC, setSlotC] = useState([])
    const [slotD, setSlotD] = useState([])


    const [company, setCompany] = useState([])
    const [selectedCompany, setSelectedCompany] = useState('')
    const [slotId, setSlotid] = useState()
    const [errorMessage, setErrorMassage] = useState()
    const [refresh, setRefresh] = useState()
    //console.log(slotA,"========slotA");


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const selectSlot = async() => {
        console.log("select fun");
        if (selectedCompany === '') {
            console.log("qwertyuiop");
            setErrorMassage("select a company")
        } else {
            console.log("all fine");
            setErrorMassage('')
            const dataid = {
                _id: slotId,
                company: selectedCompany
            }
            console.log(dataid,"==dataidd");
            const res = await axios.post("http://localhost:4000/selected", dataid)
                console.log(res);
                setRefresh(res)
            
        }
    }

    useEffect(() => {
        onpage()


    }, [refresh])   

    const onpage = async () => {
        try {
            const response = await axios.get("http://localhost:4000/slots")
            console.log(response.data,"==dataa");
            setSlotA(response.data.A)
            setSlotB(response.data.B)
            setSlotC(response.data.C)
            setSlotD(response.data.D)

            const appData = await axios.get("http://localhost:4000/records")

            const approvedApplicants = appData.data.filter((item) => {
                return item.status === 'Approved'
            })

            setCompany(approvedApplicants)

        } catch (err) {
            console.log(err)
        }
    }








    return (



        <div className='main'>
            <div className='main2'>
                {/* <Box className='box'
                    sx={{
                        display: 'flex', flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 2,
                            width: 90,
                            height: 90,
                            backgroundColor: '#d6ffc7'
                        }
                    }} >
                        {slotA.map((rows) => (
                        <Paper className='paper' style={{backgroundColor : rows.selected && '#416e31'  }} elevation={3}  />
                    ))}
                </Box>
                <hr className='hrline' />
                <hr className='hrline' /> */}




                <div className='bottom' style={{ display: 'flex' }}>
                    <div className='boxdown1'>
                        



                        <Box className='box'
                            sx={{
                                display: 'flex', flexWrap: 'wrap',
                                '& > :not(style)': {
                                    m: 2,
                                    width: 90,
                                    height: 90,
                                    backgroundColor: '#d6ffc7'
                                }
                            }} >
                            {slotA.map((rows) => (
                                <Paper className='paper' style={{ backgroundColor: rows.isBooked && '#416e31' }} elevation={3} onClick={!rows.isBooked ? () => {
                                    handleOpen()
                                    setSlotid(rows._id)
                                } : ''} />
                            ))}
                        </Box>











                    </div>
                    <Divider className='divider' orientation="vertical" flexItem />
                    <div className='boxdown2'>
                        <Box className='box'
                            sx={{
                                display: 'flex', flexWrap: 'wrap',
                                '& > :not(style)': {
                                    m: 2,
                                    width: 90,
                                    height: 90,
                                    backgroundColor: '#d6ffc7'
                                }
                            }} >
                            {slotB.map((rows) => (
                                <Paper className='paper' style={{ backgroundColor: rows.isBooked && '#416e31' }} elevation={3} onClick={!rows.isBooked ? () => {
                                    handleOpen()
                                    setSlotid(rows._id)
                                } : ''} />
                            ))}
                        </Box>
                    </div>
                    <Divider className='divider' orientation="vertical" flexItem />
                    <div className='boxdown3'>
                        <Box className='box'
                            sx={{
                                display: 'flex', flexWrap: 'wrap',
                                '& > :not(style)': {
                                    m: 2,
                                    width: 90,
                                    height: 90,
                                    backgroundColor: '#d6ffc7'
                                }
                            }} >
                            {slotC.map((rows) => (
                                <Paper className='paper' style={{ backgroundColor: rows.isBooked && '#416e31' }} elevation={3} onClick={!rows.isBooked ? () => {
                                    handleOpen()
                                    setSlotid(rows._id)
                                } : ''} />
                            ))}
                        </Box>
                    </div>
                    <Divider className='divider' orientation="vertical" flexItem />
                    <div className='boxdown4'>
                        <Box className='box'
                            sx={{
                                display: 'flex', flexWrap: 'wrap',
                                '& > :not(style)': {
                                    m: 2,
                                    width: 90,
                                    height: 90,
                                    backgroundColor: '#d6ffc7'
                                }
                            }} >
                            {slotD.map((rows) => (
                                <Paper className='paper' style={{ backgroundColor: rows.isBooked && '#416e31' }} elevation={3} onClick={!rows.isBooked ? () => {
                                    handleOpen()
                                    setSlotid(rows._id)
                                } : ''} />
                            ))}
                        </Box>

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description">
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Choose a company
                                </Typography>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">name</InputLabel>
                                        
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={selectedCompany}
                                            label="Company"
                                            onChange={(e) => setSelectedCompany(e.target.value)}
                                        >
                                            {company.map((data) => (
                                                // {data.status === 'Approved' ?           
                                                <MenuItem value={data._id}>{!data.slot && data.companyname}</MenuItem> 
                                                // :
                                                //  ""}
                                            ))}

                                        </Select>

                                    </FormControl>
                                </Box>
                                <Button variant="contained" sx={{ mt: 4, float: "right" }} 
                                onClick={()=>{
                                    selectSlot()
                                    handleClose()
                                    }}
                                >Select</Button>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default BookingSlots