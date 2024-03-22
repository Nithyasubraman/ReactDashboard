// import React from 'react'

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Button from 'react-bootstrap/Button';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Login.css';

// import { Button } from 'mdb-react-ui-kit';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
  from 'mdb-react-ui-kit';

function Login() {

  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate('/Signup');
  };

  return (
    <div className='Form'>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      {/* <TextField id="outlined-basic" label="UserName" variant="outlined" /> */}
      {/* <Form>
      <input required type="text" name="firstname" />
      <input type="submit" value="Submit"/>
      </Form> */}
      <br/>
      <br/>
      <TextField id="outlined-basic" label="Password" variant="outlined" />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          <a href="!#">Forgot password?</a>
        </div>


        <Button variant="contained" color='primary'>Sign in</Button>

        <div className="text-center">
          <p>Not a member? <a href="#" onClick={navigateToSignup}>Create an account</a></p>
          <p>or sign up with:</p>
          <Button variant="outlined" color='secondary'>Sign in with Google</Button>
          <br/>
          <br/>
          <Button variant="contained" color='primary'>Sign in with Facebook</Button>


          {/* <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
            <MDBIcon fab icon="facebook-f" className="mx-2" />
            Sign in with facebook
          </MDBBtn> */}
        </div>

      </MDBContainer>
    </div>
  )
}

export default Login