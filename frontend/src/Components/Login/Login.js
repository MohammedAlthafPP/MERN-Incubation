import React,{useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'react-cookie';
import axios from "axios";
import { Paper,Button,Typography,Avatar,TextField,Grid } from '@mui/material';
import { Lock } from '@mui/icons-material';
import "./Login.css"



const boxStyle={
  width: 450,
  height: 600,
  margin: 'auto',
  mt:5,
  flexWrap:'wrap',
  pt:5,
  padding:6
}




function Login() {
  const navigate = useNavigate() ;
  const [cookies,setCookie,removeCookie]= useCookies([])
  
//   useEffect(() => {

//     const verifyUser = async()=>{
//       if(cookies.user) {
//        navigate('/homepage')
//       }else {
//         navigate('/')
//       }
//     }
//       verifyUser()
// }, []);
  

  const [values, setValues] = useState({
   
    email:"",
    password:"",
  });

  const generateError = (err) =>toast.error(err,{
    position : "top-center"
  })

  const handleSubmit =async (e)=>{
    e.preventDefault();
    try {
      const {data} = await axios.post("http://localhost:4000/login",{
        ...values
      },{
        withCredentials:true,
      })
      console.log(data,"============login data");
      if (data) {

        if (data.errors) {

          const { email, password ,name} = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password)
          else if (name) generateError(name)

        } else {

          if (data.value) {

            navigate("/admin");
          } else {
            navigate("/homepage");
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
    <form className="form" action="" onSubmit={(e)=>handleSubmit(e)}>
      <Avatar  sx={{ mt:3,bgcolor: 'secondary.main', margin:'auto', }}>
        <Lock />
      </Avatar>
      <Typography variant='h4' align="center" margin="20px" ><b>
      Login
      </b>           
      </Typography>
      
      <TextField className='text'
          margin="normal"
         
          fullWidth             
          label="Email Address"
          type="email"
          name="email"
          onChange={(e)=>setValues({...values,[e.target.name]: e.target.value})}
        />
         <TextField
          margin="normal"
          
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e)=>setValues({...values,[e.target.name]: e.target.value})}
        />
        <Grid item sx={{mt:3}}>
          
         
            <h5 style={{color:'blue', cursor:'pointer'}} onClick={()=>{navigate('/register')}} >
              {"Don't have an account ? Sign Up"}
            </h5>
           
          </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          
        >


         <h3> Sign In </h3> 
        </Button>
      
        </form>
    </Paper>   
    {/* </Box>     
      */}
       <ToastContainer />
</div>
    
  );
}

export default Login;
