import React, { useState} from 'react'
import { Grid, TextField, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from '@mui/material'
import "./Form.css"
import axios from 'axios'
import { useForm } from 'react-hook-form'

import {useNavigate} from 'react-router-dom'
import { decodeToken } from "react-jwt";
import { useCookies } from 'react-cookie'
// import { ArrowForward } from '@material-ui/icons';


function Form() {
  const navigate = useNavigate()
  const initialValues = {
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    phoneno: '',
    companyname: '',
    teamandbackground: '',
    companyandproduct: '',
    problem: '',
    solution: '',
    valueproposition: ',',
    competators: '',
    revenue: '',
    potentialmarketsize: '',
    plan: '',
    type: '',
    businessproposal: '',
  }
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [formValues, setFormvalues] = useState(initialValues)
  const [formError, setFormError] = useState()
  const [logo, setLogo] = useState()

  const handleImage = (e) => {
    setLogo(e.target.files[0])
    console.log(logo,"===============img");
  }
  



  
  const onSubmit =async (values)=>{
   console.log(formValues,"==========formValues");
   
    try {

      const user = decodeToken(cookies.user)
      const {data} = await axios.post(`http://localhost:4000/submit/${user.id}`,{
        ...formValues
      },{
        withCredentials:true,
      })
      console.log(data,"====dat");
      if(data.Success){
   
        navigate('/success')

      }else{
        navigate('/homepage')
      }


    } catch (error) {
      console.log(error,"==========register error");
      
    }
  };




  console.log(formValues,"==========================Formvalues");
  return (
    <div className='Box'>
<form className="" action="" onSubmit={handleSubmit(onSubmit)}>
      <h1 className='Header'>APPLICATION FOR INCUBATION</h1>
      {formError && <h4 style={{ color: 'red' }}>{formError}</h4>}
      
      <Grid container spacing={3}>

        <Grid item sm={6} xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="name"
            name='name'
            type="text"
            //onChange={handleChange}
            onChange={(e)=>setFormvalues({...formValues,[e.target.name]: e.target.value})} 
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="email"
            name='email'
            type="email"
           // onChange={handleChange}
           onChange={(e)=>setFormvalues({...formValues,[e.target.name]: e.target.value})} 
          />
        </Grid>


        <Grid item sm={6} xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="Address"
            name='address'
            type="text"
            onChange={(e)=>setFormvalues({...formValues,[e.target.name]: e.target.value})} 
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="City"
            name='city'
            type="text"
            onChange={(e)=>setFormvalues({...formValues,[e.target.name]: e.target.value})} 
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="State"
            name='state'
            type="text"
            onChange={(e)=>setFormvalues({...formValues,[e.target.name]: e.target.value})} 
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="Phone no"
            type="number"
            name='phoneno'
            onChange={(e)=>setFormvalues({...formValues,[e.target.name]: e.target.value})} 
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="Company name"
            type="text"
            name='companyname'
            onChange={(e)=>setFormvalues({...formValues,[e.target.name]: e.target.value})} 
          />
        </Grid>
        {/* <Grid sx={{ mt: 2.5 }} item sm={6} xs={12}>
          <label>Companylogo</label>  <br />
          <input type='file' name='logo' onChange={handleImage} />
        </Grid> */}
        <Grid item xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="Describe your team and background"
            type="text"
            name='teamandbackground'
            onChange={(e)=>setFormvalues({...formValues,[e.target.name]: e.target.value})} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="Describe your Company and Product"
            type="text"
            name='companyandproduct'
            onChange={(e)=>setFormvalues({...formValues,[e.target.name]: e.target.value})} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="Describe the problem you are trying to solve"
            type="text"
            name='problem'
            onChange={(e)=>setFormvalues({...formValues,[e.target.name]: e.target.value})} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="What is unique about your solution"
            type="text"
            name='solution'
            onChange={(e)=>setFormvalues({...formValues,[e.target.name]: e.target.value})} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="What is your value proposition for the customer"
            type="text"
            name='valueproposition'
            onChange={(e)=>setFormvalues({...formValues,[e.target.name]: e.target.value})} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="Who are your competators and what is your competatiev advantage?"
            type="text"
            name='competators'
            onChange={(e)=>setFormvalues({...formValues,[e.target.name]: e.target.value})} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="Explain your revenue model"
            type="number"
            name='revenue'
            onChange={(e)=>setFormvalues({...formValues,[e.target.name]: e.target.value})} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="What is the potential market size of the product?"
            type="text"
            name='potentialmarketsize'
            onChange={(e)=>setFormvalues({...formValues,[e.target.name]: e.target.value})} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="How do you market or plan to market your products and services?"
            type="text"
            name='plan'
            onChange={(e)=>setFormvalues({...formValues,[e.target.name]: e.target.value})} 
          />
        </Grid>
        <Grid item xs={12}>

          <FormLabel id="demo-radio-buttons-group-label">Type of incubation needed</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="type"
            onChange={(e)=>setFormvalues({...formValues,[e.target.name]: e.target.value})} 
          >
            <FormControlLabel className='radio' value="Physical incubation" control={<Radio />} label="Physical incubation" />
            <FormControlLabel value="Virtual incubation" control={<Radio />} label="Virtual incubation" />
          </RadioGroup>

        </Grid>
        <Grid item xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="Upload a detailed business proposal"
            type="text"
            name='businessproposal'
            onChange={(e)=>setFormvalues({...formValues,[e.target.name]: e.target.value})} 
          />
        </Grid>
        
        <Grid item xs={12}>
          <Button className='button' variant="contained" color="success" type='submit' >
            Submit
          </Button>
        </Grid>
      </Grid>
      </form>

    </div>
  )
}

export default Form