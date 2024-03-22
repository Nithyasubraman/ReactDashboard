//import React from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Signup.css'
// import { Link } from "react-router-dom";
import { CFormCheck,CFormFeedback } from '@coreui/react';


function Signup() {
  return (
    <div className='Form'>
        <h1> Signup </h1>
        <br/>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='TextField'>
        <TextField
          id="outlined-textarea"
          label="First Name"
          placeholder="First Name"
          required=""
        />
        <br/>
        <br/>
        <TextField
          id="outlined-textarea"
          label="Last Name"
          placeholder="Last Name"
        />
        <br/>
        <br/>
        <TextField
          id="outlined-textarea"
          label="Email ID "
          placeholder="Email ID"
        />
        <br/>
        <br/>
        <TextField
          id="outlined-textarea"
          label="Password"
          placeholder="Password"
          
        />
        <br/>
        <br/>
        <TextField
          id="outlined-textarea"
          label="Confirm Password"
          placeholder="Confirm Password"
        />
        <br/>
        <br/>
        <CFormCheck
        type="checkbox"
        id="invalidCheck"
        label="Agree to terms and conditions"
        required
      />
      <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
        <br/>
        <br/>
        <Button variant="contained">Signup</Button>
        <br/>
        <br/>
      </div>

    </Box>
        
    </div>
  )
}

export default Signup