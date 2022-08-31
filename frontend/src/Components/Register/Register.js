import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios"
import { useForm } from 'react-hook-form'
import { useCookies } from 'react-cookie';
import { Paper,Button,Typography,Avatar,TextField,Grid } from '@mui/material';
import { Lock } from '@mui/icons-material';
import Container from 'react-bootstrap/Container';
import './Register.css'



const boxStyle={
  width: 450,
  height: 'max-content',
  margin: 'auto',
  mt:5,
  flexWrap:'wrap',
  pt:5,
  padding:6
}




function Register() {
  const naviagte = useNavigate() ;
  const [cookies,setCookie,removeCookie]= useCookies([])
  useEffect(() => {

    const verifyUser = async()=>{
      if(cookies.user) {
        naviagte('/homepage')
      }else {
        naviagte('/register')
      }
    }
      verifyUser()
}, []);






  const { register, handleSubmit, formState: { errors } } = useForm();


  const [values, setValues] = useState({
    name:"",
    email:"",
    password:"",
  });

  const generateError = (err) =>toast.error(err,{
    position : "top-center"
  })

  const onSubmit =async (values)=>{
   
   
    try {
      const {data} = await axios.post("http://localhost:4000/register",{
        ...values
      },{
        withCredentials:true,
      })
      
      if (data) {
       

        if (data.errors) {

          const { email, password ,name} = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password)
          else if (name) generateError(name)

        } else {

          if (data.value) {

            naviagte("/admin");
          } else {
            naviagte("/homepage");
          }
         
        }



      }


    } catch (error) {
      console.log(error,"==========register error");
      
    }
  };



  return (
    <div  className="container">
      
        {/* <Box  >         */}
        <Paper sx={boxStyle}  elevation={6} >
        <form className="form" action="" onSubmit={handleSubmit(onSubmit)}>
          <Avatar  sx={{ mt:3,bgcolor: 'secondary.main', margin:'auto', }}>
            <Lock />
          </Avatar>
          <Typography variant='h4' align="center" margin="20px" ><b>
          Signup
          </b>           
          </Typography>
         
          <TextField className='text'
              margin="normal"
            
              fullWidth             
              label="User name"
              type="text"
              name="name"
              onChange={(e)=>setValues({...values,[e.target.name]: e.target.value})} 

              {...register("name", {
                required: "Name is required",
                 maxLength: {
                  value: 15,
                  message: "Name cannot exceed more than 10 characters"
                },
                pattern: { 
                  value: /^[a-zA-Z ]*$/, 
                  message: "Sorry,only alphabets are allowed" 
                 }
  
  
              })}

            />

{errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

          <TextField className='text'
              margin="normal"
             
              fullWidth             
              label="Email Address"
              type="email"
              name="email"
              onChange={(e)=>setValues({...values,[e.target.name]: e.target.value})} 

              {...register("email", {
                required: "Email is required", 
                pattern: { 
                value: /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/, 
                message: "Enter valid email" 
               }
 
              })}

            />

{errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

             <TextField
              margin="normal"
              
              fullWidth
              name="password"
              label="Password"
              type="password"
         
              onChange={(e)=>setValues({...values,[e.target.name]: e.target.value})} 

              {...register("password", {
                required: "Password is required", 
                minLength: {
                  value: 8,
                  message: "At least 8 characters required"
                },
                pattern: { 
                value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, 
                message: "The password must contain at least 1 number,1 lower case letter, and 1 upper case letter" 
               }
 
              })}

            />

{errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
           
            <Grid item sx={{mt:3}}>
                <h5 style={{color:'blue', cursor:'pointer'}}  onClick={()=>{naviagte('/')}}>
                  {"Already have an account? Login"}
                </h5>
              </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
            >
             <h3> Sign Up </h3> 
            </Button>
            </form>
            <ToastContainer />
        </Paper>   
        {/* </Box>     
          */}
      
    </div>
  )
}

export default Register;
